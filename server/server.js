import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { renderBibliography } from "./bibliography.js";
import { renderBroIndex, renderDirectoryListing, renderMainIndex } from "./publication-index.js";
import { loadPublicationRoutes, resolvePublicationRoute } from "./publication-routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".ico",
  ".svg",
  ".css",
  ".html",
  ".js",
  ".mjs",
  ".md",
  ".eot",
  ".ttf",
  ".woff",
  ".woff2",
  ".otf"
]);

const BLOCKED_TOP_LEVEL_PATHS = new Set([
  ".agents",
  ".claude",
  ".codex",
  ".git",
  ".github",
  "node_modules",
  "server"
]);

const MIME_TYPES = new Map([
  [".html", "text/html; charset=utf-8"],
  [".htm", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".rdf", "application/rdf+xml; charset=utf-8"],
  [".ttl", "text/turtle; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".md", "text/markdown; charset=utf-8"],
  [".csv", "text/csv; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".pdf", "application/pdf"],
  [".zip", "application/zip"],
  [".mp4", "video/mp4"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
  [".otf", "font/otf"],
  [".eot", "application/vnd.ms-fontobject"],
  [".doc", "application/msword"],
  [".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  [".xls", "application/vnd.ms-excel"],
  [".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  [".ppt", "application/vnd.ms-powerpoint"],
  [".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]
]);

const LEGACY_REDIRECTS = new Map([
  ["/index.php", "/"],
  ["/bro/index.php", "/bro/"],
  ["/brtnext", "/brtnext/vv-bd-brtnext-20230526/"],
  ["/brtnext/", "/brtnext/vv-bd-brtnext-20230526/"],
  ["/brtnext/index.php", "/brtnext/vv-bd-brtnext-20230526/"],
  ["/imroi", "/imroi/cv-im-imroi-20240521"],
  ["/imroi/", "/imroi/cv-im-imroi-20240521"],
  ["/imroi/index.php", "/imroi/cv-im-imroi-20240521"],
  ["/dsgo", "/dsgo/vv-hr-DSGO-20220316/"],
  ["/dsgo/", "/dsgo/vv-hr-DSGO-20220316/"],
  ["/dsgo/index.php", "/dsgo/vv-hr-DSGO-20220316/"]
]);

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

export function createApp({
  rootDir = DEFAULT_ROOT,
  environment = process.env.PUBLICATION_ENV ?? "production",
  cspMode = process.env.CSP_MODE ?? "enforce",
  hstsEnabled = process.env.HSTS_ENABLED ?? "true",
  securityTxtUrl = process.env.SECURITY_TXT_URL
} = {}) {
  const resolvedRoot = path.resolve(rootDir);
  const publicationRoutes = loadPublicationRoutes(resolvedRoot);
  const publicationEnvironment = normalizeEnvironment(environment);
  const securityHeaders = createSecurityHeaders({
    cspMode,
    hstsEnabled,
    publicationEnvironment
  });

  return async function handleRequest(req, res) {
    try {
      const method = req.method ?? "GET";
      if (method !== "GET" && method !== "HEAD") {
        return sendText(res, 405, "Method Not Allowed", method);
      }

      const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
      const pathname = normalizePathname(requestUrl.pathname);

      setBaseHeaders(res, securityHeaders);

      if (pathname === "/healthz") {
        return sendText(res, 200, "ok\n", method, "text/plain; charset=utf-8");
      }

      if (pathname === "/.well-known/security.txt" && securityTxtUrl) {
        return sendRedirect(res, securityTxtUrl, 302);
      }

      if (pathname === "/environment.json") {
        return sendJson(res, 200, { environment: publicationEnvironment }, method);
      }

      const redirect = resolveRedirect(pathname);
      if (redirect) {
        return sendRedirect(res, redirect, 301);
      }

      if (pathname === "/biblio.php" || pathname === "/biblio") {
        if (!requestUrl.searchParams.has("geonovum")) return sendText(res, 404, "Not Found\n", method);
        const html = await renderBibliography(resolvedRoot);
        return sendText(res, 200, html, method, "text/html; charset=utf-8");
      }

      if (pathname === "/bro/gen/cors.php" || pathname === "/bro/gen/cors") {
        return handleCorsProxy(req, res, requestUrl, method, resolvedRoot, publicationRoutes);
      }

      if (pathname === "/") {
        const html = await renderMainIndex(resolvedRoot);
        return sendText(res, 200, html, method, "text/html; charset=utf-8");
      }

      if (pathname === "/bro" || pathname === "/bro/") {
        if (requestUrl.searchParams.get("browse") === "true") {
          const html = await renderDirectoryListing(resolvedRoot, "/bro/", path.join(resolvedRoot, "bro"));
          return sendText(res, 200, html, method, "text/html; charset=utf-8");
        }
        return sendText(res, 200, renderBroIndex(), method, "text/html; charset=utf-8");
      }

      return serveStaticOrDirectory(req, res, resolvedRoot, pathname, method, publicationRoutes);
    } catch (error) {
      console.error(error);
      return sendText(res, 500, "Internal Server Error\n", req.method ?? "GET");
    }
  };
}

function normalizePathname(pathname) {
  if (!pathname) return "/";
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function resolveRedirect(pathname) {
  const direct = LEGACY_REDIRECTS.get(pathname);
  if (direct) return direct;

  const wpRedirects = [
    [/^\/wp\/basis-wpgs-20170531(.*)$/i, "/wp/basis-hr-wpgs-20170531$1"],
    [/^\/wp\/basis-wpgs-20171222(.*)$/i, "/wp/basis-hr-wpgs-20171222$1"],
    [/^\/wp\/basis-wpgs(.*)$/i, "/wp/wpgs$1"]
  ];
  for (const [regex, replacement] of wpRedirects) {
    if (regex.test(pathname)) return pathname.replace(regex, replacement);
  }

  return null;
}

async function handleCorsProxy(req, res, requestUrl, method, rootDir, publicationRoutes) {
  const target = requestUrl.searchParams.get("url");
  const targetUrl = parseBroGenUrl(target);
  if (!targetUrl) {
    return sendText(res, 400, "Invalid url\n", method);
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Max-Age", "86400");

  return serveStaticOrDirectory(req, res, rootDir, targetUrl.pathname, method, publicationRoutes);
}

function parseBroGenUrl(target) {
  if (!target) return null;
  let targetUrl;
  try {
    targetUrl = new URL(target);
  } catch {
    return null;
  }

  if (targetUrl.protocol !== "https:") return null;
  if (targetUrl.hostname !== "docs.geostandaarden.nl") return null;
  if (!targetUrl.pathname.startsWith("/bro/gen/")) return null;
  return targetUrl;
}

async function serveStaticOrDirectory(req, res, rootDir, pathname, method, publicationRoutes = [], rewriteDepth = 0) {
  if (rewriteDepth > 5) return sendText(res, 508, "Rewrite loop detected\n", method);

  const route = resolvePublicationRoute(publicationRoutes, pathname);
  if (route) {
    if (route.type === "redirect") return sendRedirect(res, route.target, route.statusCode);
    return serveStaticOrDirectory(req, res, rootDir, route.target, method, publicationRoutes, rewriteDepth + 1);
  }

  const filePath = resolveFilePath(rootDir, pathname);
  if (!filePath) return send404(res, method);

  const stats = await stat(filePath).catch(() => null);
  if (!stats) return send404(res, method);

  if (stats.isDirectory()) {
    if (!pathname.endsWith("/")) return sendRedirect(res, `${pathname}/`, 301);
    const indexPath = path.join(filePath, "index.html");
    const indexStats = await stat(indexPath).catch(() => null);
    if (indexStats?.isFile()) return sendFile(req, res, indexPath, indexStats, method);
    const html = await renderDirectoryListing(rootDir, pathname, filePath);
    return sendText(res, 200, html, method, "text/html; charset=utf-8");
  }

  if (!stats.isFile()) return send404(res, method);
  return sendFile(req, res, filePath, stats, method);
}

function resolveFilePath(rootDir, pathname) {
  const relative = pathname.replace(/^\/+/, "");
  if (hasBlockedPathSegment(relative)) return null;
  const [topLevel] = relative.split("/");
  if (BLOCKED_TOP_LEVEL_PATHS.has(topLevel.toLowerCase())) return null;
  const filePath = path.resolve(rootDir, relative);
  return filePath === rootDir || filePath.startsWith(`${rootDir}${path.sep}`) ? filePath : null;
}

function hasBlockedPathSegment(relativePath) {
  return relativePath
    .split("/")
    .filter(Boolean)
    .some((segment) => segment.startsWith(".") && segment !== ".well-known");
}

function sendFile(req, res, filePath, stats, method) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES.get(ext) ?? "application/octet-stream";
  const headers = {
    "Content-Type": contentType,
    "Accept-Ranges": "bytes"
  };

  if (PUBLIC_EXTENSIONS.has(ext)) {
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
  }

  const range = req.headers.range;
  if (range) {
    const match = range.match(/^bytes=(\d*)-(\d*)$/);
    if (!match) {
      res.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
      return res.end();
    }
    const start = match[1] === "" ? 0 : Number(match[1]);
    const end = match[2] === "" ? stats.size - 1 : Number(match[2]);
    if (start > end || end >= stats.size) {
      res.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
      return res.end();
    }
    res.writeHead(206, {
      ...headers,
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${stats.size}`
    });
    if (method === "HEAD") return res.end();
    return createReadStream(filePath, { start, end }).pipe(res);
  }

  res.writeHead(200, {
    ...headers,
    "Content-Length": stats.size
  });
  if (method === "HEAD") return res.end();
  return createReadStream(filePath).pipe(res);
}

async function send404(res, method) {
  return sendText(res, 404, "Not Found\n", method);
}

function sendRedirect(res, location, statusCode) {
  res.writeHead(statusCode, { Location: location });
  return res.end();
}

function sendText(res, statusCode, body, method, contentType = "text/plain; charset=utf-8") {
  const buffer = Buffer.from(body);
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Content-Length": buffer.byteLength
  });
  if (method === "HEAD") return res.end();
  return res.end(buffer);
}

function normalizeEnvironment(environment) {
  return String(environment || "production")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "-") || "production";
}

function sendJson(res, statusCode, body, method) {
  return sendText(res, statusCode, `${JSON.stringify(body)}\n`, method, "application/json; charset=utf-8");
}

function createSecurityHeaders({ cspMode, hstsEnabled, publicationEnvironment }) {
  const headers = new Map([
    ["X-Content-Type-Options", "nosniff"],
    ["X-Frame-Options", "SAMEORIGIN"],
    ["Referrer-Policy", "strict-origin-when-cross-origin"],
    ["Permissions-Policy", "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"],
    ["X-Permitted-Cross-Domain-Policies", "none"],
    ["X-Publication-Environment", publicationEnvironment]
  ]);

  if (normalizeBoolean(hstsEnabled)) {
    headers.set("Strict-Transport-Security", "max-age=31536000");
  }

  const normalizedCspMode = String(cspMode ?? "enforce").toLowerCase();
  if (normalizedCspMode === "report-only") {
    headers.set("Content-Security-Policy-Report-Only", DEFAULT_CSP);
  } else if (normalizedCspMode !== "off") {
    headers.set("Content-Security-Policy", DEFAULT_CSP);
  }

  return headers;
}

function normalizeBoolean(value) {
  return !["0", "false", "off", "no"].includes(String(value ?? "").toLowerCase());
}

function setBaseHeaders(res, securityHeaders) {
  for (const [name, value] of securityHeaders) {
    res.setHeader(name, value);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const rootDir = process.env.DOCS_ROOT ? path.resolve(process.env.DOCS_ROOT) : DEFAULT_ROOT;
  const host = process.env.HOST ?? "127.0.0.1";
  const port = Number(process.env.PORT ?? 8080);
  const server = http.createServer(createApp({ rootDir }));
  server.listen(port, host, () => {
    console.log(`docs.geostandaarden.nl server listening on http://${host}:${port}`);
  });
}
