import { readFileSync } from "node:fs";
import path from "node:path";

const ROUTES_MANIFEST = "publication-routes.json";

export function loadPublicationRoutes(rootDir) {
  const manifestPath = path.join(rootDir, ROUTES_MANIFEST);
  let manifest;

  try {
    manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw new Error(`Could not read ${ROUTES_MANIFEST}: ${error.message}`);
  }

  if (manifest.version !== 1 || !Array.isArray(manifest.routes)) {
    throw new Error(`${ROUTES_MANIFEST} must contain version 1 and a routes array`);
  }

  return manifest.routes
    .map(normalizeRoute)
    .filter(Boolean)
    .sort((left, right) => right.source.length - left.source.length || left.source.localeCompare(right.source));
}

export function resolvePublicationRoute(routes, pathname) {
  const requestPath = normalizePath(pathname);

  for (const route of routes) {
    const suffix = matchRoute(route, requestPath);
    if (suffix === null) continue;

    const target = appendRouteSuffix(route.target, suffix);
    if (!target || target === requestPath) continue;

    if (route.type === "redirect" || isExternalTarget(target)) {
      return {
        type: "redirect",
        target,
        statusCode: route.statusCode ?? 302
      };
    }

    return {
      type: "rewrite",
      target
    };
  }

  return null;
}

function normalizeRoute(route) {
  if (!route || typeof route !== "object") return null;
  const source = normalizePath(route.source);
  const target = normalizeTarget(route.target);
  if (!source || !target) return null;

  const statusCode = Number(route.statusCode);

  return {
    source,
    target,
    match: route.match === "exact" ? "exact" : "prefix",
    type: route.type === "redirect" ? "redirect" : "rewrite",
    statusCode: Number.isInteger(statusCode) ? statusCode : 302
  };
}

function matchRoute(route, requestPath) {
  if (route.match === "exact") return requestPath === route.source ? "" : null;
  if (requestPath === route.source || requestPath === `${route.source}/`) return "";
  if (requestPath.startsWith(`${route.source}/`)) return requestPath.slice(route.source.length + 1);
  return null;
}

function appendRouteSuffix(target, suffix) {
  if (!suffix) return target;
  const base = target.endsWith("/") ? target : `${target}/`;
  return `${base}${suffix}`;
}

function normalizeTarget(target) {
  if (typeof target !== "string" || target.length === 0) return null;
  if (isExternalTarget(target)) return target;
  return target.startsWith("/") ? target : `/${target}`;
}

function normalizePath(value) {
  if (typeof value !== "string" || value.length === 0) return null;
  const pathname = value.startsWith("/") ? value : `/${value}`;
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

function isExternalTarget(target) {
  return /^https?:\/\//i.test(target);
}
