import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_ROOT = path.resolve(__dirname, "..");
const ROOT_DIR = process.env.DOCS_ROOT ? path.resolve(process.env.DOCS_ROOT) : DEFAULT_ROOT;
const ROUTES_MANIFEST = "publication-routes.json";

if (process.argv[1] && import.meta.url === pathToFileUrl(process.argv[1])) {
  const routes = await generatePublicationRoutes(ROOT_DIR);
  if (!routes.length) {
    throw new Error("No .htaccess RewriteRule routes found; refusing to overwrite publication-routes.json");
  }

  await writeFile(
    path.join(ROOT_DIR, ROUTES_MANIFEST),
    `${JSON.stringify({ version: 1, routes }, null, 2)}\n`
  );
  console.log(`Wrote ${routes.length} publication routes to ${ROUTES_MANIFEST}`);
}

export async function generatePublicationRoutes(rootDir) {
  const htaccessFiles = await findHtaccessFiles(rootDir);
  const routes = [];

  for (const htaccessPath of htaccessFiles) {
    const directory = path.dirname(htaccessPath);
    const source = toUrlPath(path.relative(rootDir, directory));
    const content = await readFile(htaccessPath, "utf8");
    routes.push(...routesFromHtaccess(source, content));
  }

  return routes.sort((left, right) => left.source.localeCompare(right.source) || left.target.localeCompare(right.target));
}

export function routesFromHtaccess(source, content) {
  const rules = extractRewriteRules(content);
  const routes = [];
  const consumed = new Set();

  for (let index = 0; index < rules.length; index += 1) {
    const emptyRule = rules[index];
    if (emptyRule.pattern !== "^$" || !emptyRule.redirect) continue;

    const childIndex = rules.findIndex((candidate, candidateIndex) => {
      if (candidateIndex === index || consumed.has(candidateIndex)) return false;
      return candidate.pattern === "^(.+)$" && candidate.redirect === emptyRule.redirect;
    });

    if (childIndex === -1) continue;
    const childRule = rules[childIndex];
    const emptyTarget = stripTrailingSlash(emptyRule.substitution);
    const childTarget = stripRewriteCapture(childRule.substitution);

    if (stripTrailingSlash(childTarget) !== emptyTarget) continue;

    routes.push(createRoute({
      source,
      target: childTarget,
      type: "redirect",
      statusCode: emptyRule.statusCode
    }));
    consumed.add(index);
    consumed.add(childIndex);
  }

  for (let index = 0; index < rules.length; index += 1) {
    if (consumed.has(index)) continue;
    const rule = rules[index];
    const route = routeFromRule(source, rule);
    if (route) routes.push(route);
  }

  return routes;
}

function routeFromRule(source, rule) {
  const type = rule.redirect || isExternalTarget(rule.substitution) || rule.proxy ? "redirect" : "rewrite";

  if (["^(.*)$", "^(.*)?$", "^(.+)$"].includes(rule.pattern)) {
    return createRoute({
      source,
      target: stripRewriteCapture(rule.substitution),
      type,
      statusCode: rule.statusCode
    });
  }

  const prefixMatch = rule.pattern.match(/^\^(.+?)\(\.\*\)\$$/);
  if (prefixMatch) {
    return createRoute({
      source: joinUrlPath(source, prefixMatch[1]),
      target: stripRewriteCapture(rule.substitution),
      type,
      statusCode: rule.statusCode
    });
  }

  return null;
}

function createRoute({ source, target, type, statusCode }) {
  return {
    source,
    match: "prefix",
    type,
    statusCode,
    target: stripTrailingRewriteCapture(target)
  };
}

function extractRewriteRules(content) {
  const rules = [];

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const match = trimmed.match(/^RewriteRule\s+(\S+)\s+(\S+)(?:\s+\[([^\]]+)])?/i);
    if (!match) continue;

    const [, pattern, substitution, rawFlags = ""] = match;
    const flags = rawFlags.split(",").map((flag) => flag.trim().toUpperCase()).filter(Boolean);
    const redirectFlag = flags.find((flag) => flag === "R" || flag.startsWith("R="));
    const statusCode = redirectFlag?.includes("=") ? Number(redirectFlag.split("=", 2)[1]) : 302;
    rules.push({
      pattern,
      substitution,
      redirect: Boolean(redirectFlag),
      proxy: flags.includes("P"),
      statusCode: Number.isInteger(statusCode) ? statusCode : 302
    });
  }

  return rules;
}

async function findHtaccessFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtaccessFiles(entryPath)));
    } else if (entry.name === ".htaccess") {
      files.push(entryPath);
    }
  }

  return files.sort();
}

function stripRewriteCapture(target) {
  return target.replace(/\/?\$1$/, "/");
}

function stripTrailingRewriteCapture(target) {
  return target.replace(/\/?\$1$/, "/");
}

function stripTrailingSlash(target) {
  return target.length > 1 ? target.replace(/\/+$/, "") : target;
}

function toUrlPath(relativePath) {
  if (!relativePath || relativePath === ".") return "/";
  return `/${relativePath.split(path.sep).join("/")}`;
}

function joinUrlPath(base, segment) {
  const normalizedSegment = segment.replace(/\\\//g, "/").replace(/^\/+|\/+$/g, "");
  return base === "/" ? `/${normalizedSegment}` : `${base}/${normalizedSegment}`;
}

function isExternalTarget(target) {
  return /^https?:\/\//i.test(target);
}

function pathToFileUrl(filePath) {
  return pathToFileURL(path.resolve(filePath)).href;
}
