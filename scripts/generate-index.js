#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(rootDir, 'index.html');
const PUB_DOMAIN_FILE = path.join(rootDir, 'pubDomainList.json');
const TEMPLATE_FILE = path.join(rootDir, 'templates', 'index.html');

const IGNORE_LIST = new Set([
  'NWBBGT',
  '.GIT',
  '.GITHUB',
  'BRTNEXT',
  'SFR',
  'MEDIA',
  'NODE_MODULES',
  'SCRIPTS',
  'STYLES',
  'TEMPLATES',
]);
const PUBLISH_ALL_LIST = new Set(['G4W', 'KL', 'MIM', 'OOV', 'RO', 'SERV']);

function sanitizeLogValue(value) {
  return String(value).replace(/[\r\n\t]/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Map specType abbreviations to the buckets shown on the landing page.
const SPEC_TYPE_GROUP = new Map([
  ['no', 'norm'],
  ['st', 'norm'],
  ['im', 'norm'],
  ['pr', 'toelichting'],
  ['al', 'documentatie'],
  ['bd', 'documentatie'],
  ['hr', 'documentatie'],
  ['wa', 'documentatie'],
]);

const GROUP_CONFIG = [
  { key: 'unknown', heading: 'Laatste versies' },
  { key: 'norm', heading: 'Standaarden' },
  { key: 'toelichting', heading: 'Toelichtingen' },
  { key: 'documentatie', heading: 'Documentatie' },
];

(async () => {
  try {
    const html = await buildIndexPage();
    await fs.writeFile(OUTPUT_FILE, html);
    console.log(`Updated ${sanitizeLogValue(path.relative(rootDir, OUTPUT_FILE))}`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();

async function buildIndexPage() {
  const template = await fs.readFile(TEMPLATE_FILE, 'utf8');
  const pubDomainMeta = await loadPubDomainMeta();
  const pubDomains = await listPubDomains();
  const sections = [];

  for (const pubDomain of pubDomains) {
    const section = await buildDomainSection(pubDomain, pubDomainMeta);
    if (section) {
      sections.push(section);
    }
  }

  // Join without whitespace between blocks so inline-grid items keep fitting on each row.
  const content = sections.join('');
  return template.replace('{{CONTENT}}', content);
}

async function loadPubDomainMeta() {
  const raw = await fs.readFile(PUB_DOMAIN_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  const entries = Array.isArray(parsed.Geonovum) ? parsed.Geonovum : [];
  const meta = new Map();

  for (const entry of entries) {
    if (!entry || !entry.pubDomain) continue;
    const title = entry.pubDomainTitle && entry.pubDomainTitle.length > 0
      ? entry.pubDomainTitle
      : entry.pubDomain.toUpperCase();
    meta.set(entry.pubDomain, {
      title,
    });
  }

  return meta;
}

async function listPubDomains() {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !IGNORE_LIST.has(name.toUpperCase()))
    .sort((a, b) => a.localeCompare(b, 'nl', { sensitivity: 'base' }));
}

async function buildDomainSection(pubDomain, pubDomainMeta) {
  const domainPath = path.join(rootDir, pubDomain);
  const dirEntries = await fs.readdir(domainPath, { withFileTypes: true }).catch(() => []);
  const subdirs = dirEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'nl', { sensitivity: 'base' }));

  if (subdirs.length === 0) {
    return '';
  }

  const buckets = {
    norm: [],
    toelichting: [],
    documentatie: [],
    unknown: [],
  };

  for (const subdir of subdirs) {
    const segments = subdir.split('-');
    let targetBucket = 'unknown';

    if (segments.length > 3) {
      const specType = segments[1];
      if (SPEC_TYPE_GROUP.has(specType)) {
        targetBucket = SPEC_TYPE_GROUP.get(specType);
      }
    }

    buckets[targetBucket].push(subdir);
  }

  const lookIntoDir = `/${pubDomain}`;
  const sectionParts = [];

  for (const { key, heading } of GROUP_CONFIG) {
    const listHtml = renderSubdirList(buckets[key], pubDomain, lookIntoDir);
    if (!listHtml) continue;
    sectionParts.push(`<h3>${escapeHtml(heading)}</h3>`);
    sectionParts.push(listHtml);
  }

  if (sectionParts.length === 0) {
    return '';
  }

  const title = buildPubDomainTitle(pubDomain, pubDomainMeta);
  return `<div class='pubDomain'><h2><a href='/${escapeHtml(pubDomain)}'>${title}</a></h2>${sectionParts.join('')}</div>`;
}

function buildPubDomainTitle(pubDomain, meta) {
  const entry = meta.get(pubDomain);
  const baseTitle = entry ? escapeHtml(entry.title) : escapeHtml(pubDomain.toUpperCase());
  const prefix = `<span class='pubDomainAbbr'>(${escapeHtml(pubDomain.toLowerCase())})</span>`;
  return `${prefix}${baseTitle}`;
}

function renderSubdirList(subdirs, pubDomain, lookIntoDir) {
  if (!Array.isArray(subdirs) || subdirs.length === 0) {
    return '';
  }

  const includeAll = PUBLISH_ALL_LIST.has(pubDomain.toUpperCase());
  const items = [];

  for (const subdir of subdirs) {
    const { docType, cls } = getDocType(subdir);
    if (docType === 'Laatste versie' || includeAll || docType === 'Definitieve versie') {
      const href = `${lookIntoDir}/${escapeHtml(subdir)}`;
      items.push(`<li><span class='${cls}'><a href='${href}'>${escapeHtml(docType)}: ${escapeHtml(subdir)}</a></span></li>`);
    }
  }

  if (items.length === 0) {
    return '';
  }

  return `<ul class='docs'>${items.join('')}</ul>`;
}

function getDocType(subdir) {
  let docType = 'Laatste versie';
  let cls = 'final';

  if (subdir.startsWith('def-')) {
    docType = 'Definitieve versie';
    cls = 'def';
  } else if (subdir.startsWith('cv-')) {
    docType = 'Consultatie versie';
    cls = 'cv';
  } else if (subdir.startsWith('vv-')) {
    docType = 'Vastgestelde versie';
    cls = 'vv';
  }

  return { docType, cls };
}
