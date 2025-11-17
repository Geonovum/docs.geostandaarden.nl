#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(rootDir, 'index.html');
const PUB_DOMAIN_FILE = path.join(rootDir, 'pubDomainList.json');

const IGNORE_LIST = new Set([
  'NWBBGT',
  '.GIT',
  '.GITHUB',
  'BRTNEXT',
  'SFR',
  'MEDIA',
  'NODE_MODULES',
  'SCRIPTS',
]);
const PUBLISH_ALL_LIST = new Set(['G4W', 'KL', 'MIM', 'OOV', 'RO', 'SERV']);

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

const TEMPLATE_START = `<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="content-type">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Geonovum specificaties</title>
    <link rel='shortcut icon' type='image/x-icon' href='https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico' />
    <style>

    body {
      line-height: 1.5;
      font-family: "Open Sans", sans-serif;
      color: #5e5e5e;
      font-size: .875rem;
      line-height: 1.5;
    }

    .page {
      max-width: 88rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: Montserrat, "Open Sans", sans-serif;
    }

    h1 {
      margin: 1em 0 2em;
      font-size: 1.25rem;
      line-height: 4em;
      border-bottom: 1px solid rgba(94,94,94,.2);
      font-weight: 500;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 500;
        /*background-color: #f7f7f7;*/
        padding-left: 0.5em;
        border-bottom: 4px solid rgb(141, 182, 63);
        line-height: 4rem;
        width: 34rem;
    }

    h3 {
        margin-left: 1.8em;
        font-weight: 500;
    }

    a {
      color: #005a9c;
    }

    h2 > a {
      text-decoration: none;
      color: rgb(94,94,94);
    }

    span.final, span.final a {
      font-weight: normal;
      color: #005a9c;
    }

    span.def, span.def a {
      color: #005a9c;
      /*font-size: 0.85em;*/
    }

    span.cv, span.cv a {
      color: orange;
      /*font-size: 0.85em;*/
    }

    span.vv, span.vv a {
      color: green;
      /*font-size: 0.85em;*/
    }

    .warning {
      background-color: #ffbb66;
      border: 1px solid black;
      padding: 1em;
      margin: 1em;
    }

    div.pubDomain {
      width: 44rem;
      display: inline-grid;
    }

    span.pubDomainAbbr{
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }

    ul.docs {
      border-bottom: 1px solid rgba(94, 94, 94, 0.2);
      width: 36rem;
      padding-bottom: 2rem;
    }

    </style>
  </head>
<body>
<div class="page">
<img class="block-sitebranding__logo" src="https://www.geonovum.nl/logo.svg" alt="Home">
<h1>Standaarden en technische documenten</h1>
<p>Op <a href="https://docs.geostandaarden.nl/">https://docs.geostandaarden.nl/</a> publiceert Geonovum standaarden en technische documenten.</p>

<p class="warning">Deze pagina is slechts een inhoudsopgave van documentatie die wij beheren. Ga naar de <a href="https://www.geonovum.nl">website van Geonovum</a> voor toelichting op de documentatie.</p>
<p>Onderstaande documenten zijn op dit moment beschikbaar:</p>
`;

const TEMPLATE_END = `
</div>
</body>
</html>
`;

(async () => {
  try {
    const html = await buildIndexPage();
    await fs.writeFile(OUTPUT_FILE, html);
    console.log(`Updated ${path.relative(rootDir, OUTPUT_FILE)}`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();

async function buildIndexPage() {
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
  return `${TEMPLATE_START}${sections.join('')}${TEMPLATE_END}`;
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

  const lookIntoDir = `./${pubDomain}`;
  const sectionParts = [];

  for (const { key, heading } of GROUP_CONFIG) {
    if (buckets[key].length === 0) continue;
    sectionParts.push(`<h3>${heading}</h3>`);
    sectionParts.push(renderSubdirList(buckets[key], pubDomain, lookIntoDir));
  }

  if (sectionParts.length === 0) {
    return '';
  }

  const title = buildPubDomainTitle(pubDomain, pubDomainMeta);
  return `<div class='pubDomain'><h2><a href='${pubDomain}'>${title}</a></h2>${sectionParts.join('')}</div>`;
}

function buildPubDomainTitle(pubDomain, meta) {
  const entry = meta.get(pubDomain);
  const baseTitle = entry ? entry.title : pubDomain.toUpperCase();
  const prefix = `<span class='pubDomainAbbr'>(${pubDomain.toLowerCase()})</span>`;
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
      const href = `${lookIntoDir}/${subdir}`;
      items.push(`<li><span class='${cls}'><a href='${href}'>${docType}: ${subdir}</a></span></li>`);
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
