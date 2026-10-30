export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function pageTemplate({ title, body }) {
  return `<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="content-type">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${escapeHtml(title)}</title>
    <link rel="shortcut icon" type="image/x-icon" href="https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico">
    <link rel="stylesheet" href="/media/publication-index.css">
  </head>
  <body>
    <div class="page">
      ${body}
    </div>
  </body>
</html>`;
}
