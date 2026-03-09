#!/usr/bin/env node

/**
 * Converts .htaccess RewriteRule directives to serve.json redirects
 * so the site can be served locally with `serve` without Apache.
 *
 * Only handles the common pattern:
 *   RewriteRule ^(.*)$ /destination/path/$1 [NC,L]
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
// Using RegExp constructor to avoid shell-escaping confusion with \$
const REWRITE_RULE_RE = new RegExp(
  String.raw`^RewriteRule\s+\S+\s+(\/\S+?)\$1(?:\s+\[([^\]]*)\])?$`,
  'i'
);

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

async function main() {
  const htaccessFiles = await findHtaccessFiles(rootDir);
  const redirects = [];

  for (const htaccessPath of htaccessFiles) {
    const content = await fs.readFile(htaccessPath, 'utf8');
    const destination = parseRewriteDestination(content);
    if (!destination) continue;

    const relDir = path.relative(rootDir, path.dirname(htaccessPath)).replace(/\\/g, '/');
    const source = `/${relDir}`;

    // Redirect both the bare directory and any sub-paths within it
    redirects.push({ source, destination, type: 301 });
    redirects.push({ source: `${source}/:path*`, destination: `${destination}:path*`, type: 301 });
  }

  const config = { redirects };
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(config, null, 2) + '\n');
  console.log(`Generated serve.json with ${redirects.length / 2} redirect(s)`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
