<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="content-type">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>TEST - Geonovum specificaties</title>
    <link rel='shortcut icon' type='image/x-icon' href='https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico' />

    <!-- TODO: css to external doc and/or use geonovum css file -->
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
        font-size: 1.6rem;
        font-weight: 500;
        padding-left: 0.5em;
        border-bottom: 4px solid rgb(141, 182, 63);
        line-height: 3rem;
        width: 34rem;
        margin-bottom: 0.4em;
        margin-top: 0.4em;
      }

      h3 {
        margin-left: 1.8em;
        font-weight: 500;
        margin-bottom: 0.2em;
        margin-top: 0.2em;
      }

      a {
        color: #005a9c;
      }

      h2 > a {
        text-decoration: none;
        color: rgb(94,94,94);
      }

      li.final span, li.final span a {
        font-weight: normal;
        color: #005a9c;
      }
      li.def span, li.def span a {
        color: #005a9c;
      }
      li.cv span, li.cv span a {
        color: orange;
      }
      li.vv span, li.vv span a {
        color: green;
      }
      li.ld span, li.ld span a {
        color: #80CC28; 
      }

      li.nofinal, li.nodef, div.hidden {
        visibility: hidden;
        height: 0px
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

    <script>
      function doContent (which = "all") {
        // cleanup previous
        const contentContainer = document.getElementById("content");
        while (contentContainer.firstChild){
          contentContainer.removeChild(contentContainer.firstChild);
        }

        var domains = JSON.parse(window.domains);
        //filter

        // per domain
        domains.forEach((domain) => { // 0 domain, 1 title, 2 path, 3 groepen
          const domaindiv = document.createElement(div);
          domaindiv.className = 'pubDomain';
          const h2 = document.createElement(h2);
          const anchor = document.createElement(a);
          anchor.href = domain[2];
          anchor.textContent = domain[1];
          const span = document.createElement(span);
          span.className = 'pubDomainAbbr';
          span.textContent = concat('(', domain[0]toLowerCase(), ')');
          anchor appendChild(span);
          h2.appendChild(anchor);
          domaindiv.appendChild(h2);

          var groups = domain[3];
          // per groep
          groups.forEach((group) => { // 0 name, 1 docs
            var name = group[0];
            var docs = group[1];
            const docsdiv = document.createElement(div);
            docsdiv.className = 'docs';
            const h3 = document.createElement(h3);
            h3.textContent = name;
            docsdiv.appendChild(h3);

            const ul = document.createElement(ul);
            // per document
            docs.forEach((doc) => { // 0 cls, 1 title, 2 path
              const li = document.createElement(li);
              li.className = doc[0];
              const span2 = document.createElement(span);
              const a2 = document.createElement(a);
              a2.href = doc[2];
              a2.textContent = doc[1];
              span2.appendChild(a2);
              li.appendChild(span2);
              ul.appendChild(li);
            });

            docsdiv.appendChild(ul);
            domaindiv.appendChild(docsdiv);
          });
          contentContainer.appendChild(div);
        });
      }
    </script>
  </head>
<body>
<div class="page">
<img class="block-sitebranding__logo" src="https://www.geonovum.nl/logo.svg" alt="Home">
<h1>Standaarden en technische documenten</h1>
<p>Op <a href="https://docs.geostandaarden.nl/">https://docs.geostandaarden.nl/</a> publiceert Geonovum standaarden en technische documenten.</p>
  <label style="margin-left: 20px;">
    <input type="checkbox" id="showLatest" />Laat alleen laatste versies zien
  </label>
  <label style="margin-left: 20px;">
    <input type="checkbox" id="showDef" />Laat alleen definitieve versies zien
  </label>
  <script>
    const showLatestCheckbox = document.getElementById("showLatest");
    showLatestCheckbox.addEventListener("change", updatePage);
    const showDefCheckbox = document.getElementById("showDef");
    showDefCheckbox.addEventListener("change", updatePageDef);

    function updatePage() {
      doContent("latest");
      showDefCheckbox.disabled = !showDefCheckbox.disabled;
    }
    function updatePageDef() {
      doContent("def");
      showLatestCheckbox.disabled = !showLatestCheckbox.disabled;
    }
  </script>

<p class="warning">Deze pagina is slechts een inhoudsopgave van documentatie die wij beheren. Ga naar de <a href="https://www.geonovum.nl">website van Geonovum</a> voor toelichting op de documentatie.</p>
<p>Onderstaande documenten zijn op dit moment beschikbaar:</p>

<div id="content"></div>

<?php
$pubDomainListURL = 'https://raw.githubusercontent.com/Geonovum/respec-utils/master/src/autodeploy/config/pubDomainList.json';
// directories to be ignored. Uppercase
$ignoreList = ['BRO', 'NWBBGT', '.GIT', 'BRTNEXT', 'SFR', 'MEDIA','.WELL-KNOWN','.GITHUB'];
// directories for which all files should be shown (containing PDFs instead of ReSpec docs)
$publishAllList = ['G4W', 'KL', 'MIM', 'OOV','RO','SERV'];

// -------------------------------
// get the list of pubDomains:
$pubDomainsJson = file_get_contents($pubDomainListURL);
$pubDomainsArr = json_decode($pubDomainsJson, true);
$allPubDomains = $pubDomainsArr['Geonovum'];
// -------------------------------

function startsWith($haystack, $needle)
{
     $length = strlen($needle);
     return (substr($haystack, 0, $length) === $needle);
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}

function getPubDomainTitle($pubDomain, $allPubDomains)
{
  // default to pubdomain
  $title = strtoupper($pubDomain);
  foreach ($allPubDomains as $pd) {
    if ($pd['pubDomain'] == $pubDomain and strlen($pd['pubDomainTitle']) > 0) {
      $title = $pd['pubDomainTitle'];
    }
  }
  return $title;
}

function subDirsAsList($subdirs, $pubDomain, $lookintodir, $publishAllList)
{
  $htmlList = [];

  foreach ($subdirs as $subdir) {
    $docType="Laatste versie";
    $cls="final";
    if (startsWith($subdir, "def-")) {
      $docType="Vastgestelde versie";
      $cls="def";
    } elseif (startsWith($subdir, "cv-")) {
      $docType="Consultatie versie";
      $cls="cv";
    } elseif (startsWith($subdir, "vv-")) {
      $docType="Versie ter vaststelling";
      $cls="vv";
    } elseif (startsWith($subdir, "ld-")) {
      $docType="Levend document";
      $cls="ld";
    }
      $htmlList[] = array($cls, $docType .": ". $subdir, $lookintodir . "/" . $subdir);
  }

  return $htmlList;
}

// inlezen data
$path = '.';
$pubDomains = scandir($path);
$domain = [];

foreach ($pubDomains as $pubDomain) {
  if ($pubDomain === '.' or $pubDomain === '..') continue;

  $groups = [];

  // reset the arrays for types
  $norm = [];
  $toelichting = [];
  $documentatie = [];
  $unknown = [];      // also latest

  if (is_dir($path . '/' . $pubDomain) and !in_array(strtoupper($pubDomain), $ignoreList) and !startsWith($pubDomain, 'https-')) {
    // loop over the folders again to find docs
    $lookintodir = $path . "/" . $pubDomain;
    $subdirs = scandir($lookintodir);
    $lastVersion = [];
    foreach ($subdirs as $subdir) {
        if ($subdir === '.' or $subdir === '..') continue;
        if (is_dir($lookintodir . "/" . $subdir)) {
            // find the specType https://github.com/Geonovum/respec/wiki/specType
            // no, st, hr, im, pr, hr, wa
            // split on -, get the second patt
            // example: def-im-ro2012-20120418
            $specType="";
            // default: laatste versie?
            $specGroup="laatste"; // norm, toelichting, documentatie, laatste
            $dirParts = explode("-", $subdir);
            if (count($dirParts) > 3) {
              $specType=$dirParts[1];
              switch ($specType) {
                  case 'no':
                      $norm[] = $subdir;
                      break;
                  case 'st':
                      $norm[] = $subdir;
                      break;
                  case 'im':
                      $norm[] = $subdir;
                      break;
                  case 'pr':
                      $toelichting[] = $subdir;
                      break;
                  case 'al':
                      $documentatie[] = $subdir;
                      break;
                  case 'bd':
                      $documentatie[] = $subdir;
                      break;
                  case 'hr':
                      $documentatie[] = $subdir;
                      break;
                  case 'wa':
                      $documentatie[] = $subdir;
                      break;
                  default:
                      $unknown[] = $subdir;
                      // reset spectype
                      $specType = "";
              }
            } else {
              $unknown[] = $subdir;
            }
        }
    }
    // reorder the types:
    // loop over all docs
    // TODO: order on types. If no def-, ... ..., then it could be a basedir
    // now loop over all arrays with $subdirs
    if (count($unknown) > 0) { // ook subdirs
      $groups[] = array("Laatste versies", subDirsAsList($unknown, $pubDomain, $lookintodir, $publishAllList));
    }
    if (count($norm) > 0) {
      $groups[] = array("Standaarden", subDirsAsList($norm, $pubDomain, $lookintodir, $publishAllList));
    }
    if (count($toelichting) > 0) {
      $groups[] = array("Toelichtingen", subDirsAsList($toelichting, $pubDomain, $lookintodir, $publishAllList));
    }
    if (count($documentatie) > 0) {
      $groups[] = array("Documentatie", subDirsAsList($documentatie, $pubDomain, $lookintodir, $publishAllList));
    }

    $domain[] = array($pubDomain, getPubDomainTitle($pubDomain, $allPubDomains), $pubDomain, $groups);
  }
}
//echo "console.log(" .htmlspecialchars(json_encode($domain), ENT_QUOTES, 'UTF-8'). ");"

//echo "<script>window.domains = " .htmlspecialchars(json_encode($domain), ENT_QUOTES, 'UTF-8'). ";"
//echo "doContent();"
//echo "</script>";
?>
</div>
</body>
