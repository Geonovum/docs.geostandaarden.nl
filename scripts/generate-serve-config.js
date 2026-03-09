#!/usr/bin/env node

/**
 * Generates serve.json with redirect rules from two sources:
 *
 * 1. .htaccess RewriteRule directives (local path rewrites)
 *      RewriteRule ^(.*)$ /destination/path/$1 [NC,L]
 *
 * 2. index.html <meta http-equiv="refresh"> redirects (external URL redirects)
 *    Scanned from direct subdirectories of the project root only.
 *    These replace the old PHP `Location:` header redirects with proper HTTP 301s.
 */

const fs = require('fs/promises');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(rootDir, 'serve.json');

const IGNORE_DIRS = new Set([
  '.git', '.github', 'node_modules', 'scripts', 'styles', 'templates',
]);

// Matches: RewriteRule ^(.*)$ /destination/$1 [flags]
// Captures the destination prefix before the $1 back-reference.
// Only local (non-proxy) rewrites — skips rules with external URLs or [P] flag.
const REWRITE_RULE_RE = new RegExp(
  String.raw`^RewriteRule\s+\S+\s+(\/\S+?)\$1(?:\s+\[([^\]]*)\])?$`,
  'i'
);

// Matches: <meta http-equiv="refresh" content="0; url=https://...">
const META_REFRESH_RE =
  /<meta\s+http-equiv=["']refresh["'][^>]+content=["'][^;]*;\s*url=([^"'>]+)/i;

async function findHtaccessFiles(dir, results = []) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await findHtaccessFiles(fullPath, results);
    } else if (entry.name === '.htaccess') {
      results.push(fullPath);
    }
  }
  return results;
}

function parseRewriteDestination(content) {
  for (const line of content.split('\n')) {
    const match = line.trim().match(REWRITE_RULE_RE);
    if (!match) continue;
    const flags = (match[2] || '').toUpperCase();
    // Skip proxy rules — they point to external servers
    if (flags.includes('P')) continue;
    return match[1]; // e.g. '/bgt/def-hr-visualisatie-20181015/'
  }
  return null;
}

async function collectHtaccessRedirects() {
  const htaccessFiles = await findHtaccessFiles(rootDir);
  const redirects = [];

  for (const htaccessPath of htaccessFiles) {
    const content = await fs.readFile(htaccessPath, 'utf8');
    const destination = parseRewriteDestination(content);
    if (!destination) continue;

    const relDir = path.relative(rootDir, path.dirname(htaccessPath)).replace(/\\/g, '/');
    // Skip root-level .htaccess — relDir is empty, which would produce malformed paths
    if (!relDir) continue;

    const source = `/${relDir}`;
    // Redirect both the bare directory and any sub-paths within it
    redirects.push({ source, destination, type: 301 });
    redirects.push({ source: `${source}/:path*`, destination: `${destination}:path*`, type: 301 });
  }
  return redirects;
}

async function collectMetaRefreshRedirects() {
  const redirects = [];
  let entries;
  try {
    entries = await fs.readdir(rootDir, { withFileTypes: true });
  } catch {
    return redirects;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (IGNORE_DIRS.has(entry.name)) continue;

    const indexPath = path.join(rootDir, entry.name, 'index.html');
    let content;
    try {
      content = await fs.readFile(indexPath, 'utf8');
    } catch {
      continue;
    }

    const match = content.match(META_REFRESH_RE);
    if (!match) continue;

    const destination = match[1].trim();
    redirects.push({ source: `/${entry.name}`, destination, type: 301 });
  }
  return redirects;
}

async function main() {
  const [htaccessRedirects, metaRefreshRedirects] = await Promise.all([
    collectHtaccessRedirects(),
    collectMetaRefreshRedirects(),
  ]);

  // .htaccess redirects take precedence — skip meta-refresh entries for already-covered paths
  const htaccessSources = new Set(htaccessRedirects.map((r) => r.source));
  const externalRedirects = metaRefreshRedirects.filter((r) => !htaccessSources.has(r.source));

  const redirects = [...htaccessRedirects, ...externalRedirects];
  const config = { redirects };

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(config, null, 2) + '\n');
  console.log(
    `Generated serve.json with ${htaccessRedirects.length / 2} .htaccess redirect(s)` +
    ` and ${externalRedirects.length} meta-refresh redirect(s)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
