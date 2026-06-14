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
    <style>
      body {
        line-height: 1.5;
        font-family: "Open Sans", sans-serif;
        color: #5e5e5e;
        font-size: .875rem;
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
        padding-left: 0.5em;
        border-bottom: 4px solid rgb(141, 182, 63);
        line-height: 4rem;
        width: 34rem;
      }

      h3 {
        margin-left: 1.8em;
        font-weight: 500;
        width: 36rem;
      }

      a {
        color: #005a9c;
      }

      h2 > a {
        text-decoration: none;
        color: rgb(94,94,94);
      }

      span.final, span.final a,
      span.def, span.def a {
        color: #005a9c;
      }

      span.cv, span.cv a {
        color: orange;
      }

      span.vv, span.vv a {
        color: green;
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
        vertical-align: top;
      }

      span.pubDomainAbbr {
        font-size: 0.8rem;
        margin-right: 0.5rem;
      }

      ul.docs {
        border-bottom: 1px solid rgba(94, 94, 94, 0.2);
        width: 36rem;
        padding-bottom: 2rem;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        background: #fff;
        margin-top: 2rem;
      }

      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
        vertical-align: top;
      }

      th {
        background-color: #f2f2f2;
      }

      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <div class="page">
      ${body}
    </div>
  </body>
</html>`;
}
