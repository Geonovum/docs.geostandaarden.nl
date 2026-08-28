import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { renderBibliography } from "./bibliography.js";
import { renderBroIndex, renderMainIndex } from "./publication-index.js";

const DEFAULT_CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' https: data:",
  "font-src 'self' https: data:",
  "style-src 'self' https: 'unsafe-inline'",
  "script-src 'self' https: 'unsafe-inline' 'unsafe-eval'",
  "connect-src 'self' https:",
  "media-src 'self' https: data:",
  "frame-src 'self' https:",
  "upgrade-insecure-requests"
].join("; ");

const COPY_EXCLUDE = new Set([
  ".agents",
  ".claude",
  ".codex",
  ".git",
  ".github",
  "build",
  "dist",
  "node_modules",
  "server",
  ".DS_Store",
  ".dockerignore",
  ".gitattributes",
  ".gitignore",
  "Dockerfile",
  "package-lock.json",
  "package.json",
  "publication-routes.json",
  "README.md"
]);

export async function buildNginxSite({ rootDir, outDir, copyContent = true }) {
  const htmlDir = path.join(outDir, "html");
  const manifest = JSON.parse(await readFile(path.join(rootDir, "publication-routes.json"), "utf8"));

  await removeOutDir(outDir);
  await mkdir(htmlDir, { recursive: true });
  if (copyContent) {
    await copySiteContent(rootDir, htmlDir);
  }

  await writeFile(path.join(htmlDir, "index.html"), await renderMainIndex(rootDir));
  await mkdir(path.join(htmlDir, "bro"), { recursive: true });
  await writeFile(path.join(htmlDir, "bro", "index.html"), renderBroIndex());
  await writeFile(path.join(htmlDir, "biblio.php"), await renderBibliography(rootDir));
  await writeFile(path.join(htmlDir, "biblio"), await renderBibliography(rootDir));
  await writeFile(path.join(outDir, "default.conf.template"), generateNginxConfig(manifest));
}

export function generateNginxConfig(manifest) {
  const routes = Array.isArray(manifest.routes) ? manifest.routes : [];
  const exactLocations = [];
  const prefixLocations = [];

  for (const route of routes) {
    const normalized = normalizeRoute(route);
    if (!normalized) continue;

    exactLocations.push(renderExactLocation(normalized));
    if (normalized.match === "prefix") {
      prefixLocations.push(renderPrefixLocation(normalized));
    }
  }

  return `server {
  listen 8080 default_server;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;
  autoindex on;
  absolute_redirect off;
  port_in_redirect off;
  charset utf-8;

${indentLines(generateSecurityHeadersSnippet(), 2)}

  location = /healthz {
    access_log off;
    default_type text/plain;
    return 200 "ok\\n";
  }

  location = /environment.json {
    default_type application/json;
    return 200 "{\\"environment\\":\\"\${PUBLICATION_ENV}\\"}\\n";
  }

  location = /.well-known/security.txt {
    return 302 https://www.geonovum.nl/.well-known/security.txt;
  }

  location = /biblio.php {
    if ($arg_geonovum = "") {
      return 404;
    }
    try_files /biblio.php =404;
  }

  location = /biblio {
    if ($arg_geonovum = "") {
      return 404;
    }
    try_files /biblio =404;
  }

  location = /bro/gen/cors.php {
    js_content docs_cors.cors;
  }

  location = /bro/gen/cors {
    js_content docs_cors.cors;
  }

  location ^~ /_cors/bro/gen/ {
    internal;
    add_header Access-Control-Allow-Origin "*" always;
    add_header Access-Control-Max-Age "86400" always;
    rewrite ^/_cors(/bro/gen/.*)$ $1 break;
    try_files $uri =404;
  }

${indentBlocks(exactLocations)}

${indentBlocks(prefixLocations)}

  location ~ /\\.(?!well-known) {
    return 404;
  }

  location ~ ^/(server|node_modules)(/|$) {
    return 404;
  }

  location ~* \\.(jpg|jpeg|png|gif|ico|svg|css|html|js|mjs|md|eot|ttf|woff|woff2|otf)$ {
${indentLines(generateSecurityHeadersSnippet(), 4)}
    add_header Access-Control-Allow-Origin "*" always;
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;
    try_files $uri =404;
  }

  location / {
    try_files $uri $uri/ =404;
  }

  error_page 404 /error.html;
}
`;
}

export function generateSecurityHeadersSnippet() {
  return `add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000" always;
add_header Permissions-Policy "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()" always;
add_header X-Permitted-Cross-Domain-Policies "none" always;
add_header X-Publication-Environment "\${PUBLICATION_ENV}" always;
add_header Content-Security-Policy "${DEFAULT_CSP}" always;
`;
}

function renderExactLocation(route) {
  if (route.type === "redirect") {
    return `location = ${route.source} {
  return ${route.statusCode} ${route.target}$is_args$args;
}`;
  }

  return `location = ${route.source} {
  rewrite ^ ${route.target} last;
}`;
}

function renderPrefixLocation(route) {
  const sourceRegex = escapeRegex(route.source);
  if (route.type === "redirect") {
    return `location ~ ^${sourceRegex}/(?<route_suffix>.*)$ {
  return ${route.statusCode} ${joinUrl(route.target, "$route_suffix")}$is_args$args;
}`;
  }

  return `location ~ ^${sourceRegex}/(.*)$ {
  rewrite ^${sourceRegex}/(.*)$ ${joinUrl(route.target, "$1")} last;
}`;
}

function normalizeRoute(route) {
  if (!route?.source || !route?.target) return null;
  const source = normalizePath(route.source);
  const target = normalizeTarget(route.target);
  if (!source || !target) return null;

  return {
    source,
    target,
    match: route.match === "exact" ? "exact" : "prefix",
    type: route.type === "redirect" || isExternalTarget(target) ? "redirect" : "rewrite",
    statusCode: Number.isInteger(Number(route.statusCode)) ? Number(route.statusCode) : 302
  };
}

function normalizePath(value) {
  const pathValue = String(value);
  const withLeadingSlash = pathValue.startsWith("/") ? pathValue : `/${pathValue}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : withLeadingSlash;
}

function normalizeTarget(value) {
  const target = String(value);
  if (isExternalTarget(target)) return target;
  return target.startsWith("/") ? target : `/${target}`;
}

function joinUrl(base, suffix) {
  return base.endsWith("/") ? `${base}${suffix}` : `${base}/${suffix}`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isExternalTarget(target) {
  return /^https?:\/\//i.test(target);
}

function indentBlocks(blocks) {
  return blocks.join("\n\n").split("\n").map((line) => (line ? `  ${line}` : line)).join("\n");
}

function indentLines(block, spaces) {
  const prefix = " ".repeat(spaces);
  return block.trimEnd().split("\n").map((line) => `${prefix}${line}`).join("\n");
}

function shouldCopy(rootDir, source) {
  const relative = path.relative(rootDir, source);
  if (!relative) return true;

  const segments = relative.split(path.sep);
  if (segments[0] === ".well-known") return true;
  return !segments.some((segment) => COPY_EXCLUDE.has(segment));
}

async function copySiteContent(rootDir, htmlDir) {
  const entries = await readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const source = path.join(rootDir, entry.name);
    if (!shouldCopy(rootDir, source)) continue;
    await cp(source, path.join(htmlDir, entry.name), {
      recursive: true,
      dereference: false,
      filter: (nestedSource) => shouldCopy(rootDir, nestedSource)
    });
  }
}

async function removeOutDir(outDir) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await rm(outDir, { recursive: true, force: true });
      return;
    } catch (error) {
      if (!["ENOTEMPTY", "EBUSY"].includes(error?.code) || attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    }
  }
}
