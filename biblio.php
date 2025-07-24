<?php


if (isset($_GET['geonovum'])) {
    header('Content-Type: text/html; charset=UTF-8');

function formatArrayAsList($array) {
    // Controleer of het een array is
    if (!is_array($array)) {
        return htmlspecialchars($array); // Als het geen array is, behandel het als een string
    }
    
    return implode("<br>", array_map(function($item) {
        $escaped = htmlspecialchars($item);
        return filter_var($item, FILTER_VALIDATE_URL) ? "<a href='$escaped' target='_blank'>$escaped</a>" : $escaped;
    }, $array));
}


    echo "<!DOCTYPE html>
    <html lang='nl'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Referentie Bibliografie</title>
        <style>
            body { font-family: 'Open Sans', sans-serif; color: #5e5e5e; font-size: .875rem; }
            .page { max-width: 88rem; margin: 2rem auto; }
            table { width: 100%; border-collapse: collapse; background: #fff; margin-top: 2rem; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { cursor: pointer; background-color: #f2f2f2; }
            th:hover { background-color: #ddd; }
            tr:nth-child(even) { background-color: #f9f9f9; }
        </style>
        <script>
            function sortTable(n) {
                var table = document.getElementById('biblioTable'), switching = true, dir = 'asc', switchcount = 0;
                while (switching) {
                    switching = false;
                    var rows = table.rows;
                    for (var i = 1; i < rows.length - 1; i++) {
                        var x = rows[i].getElementsByTagName('TD')[n], y = rows[i + 1].getElementsByTagName('TD')[n];
                        if ((dir === 'asc' && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) || 
                            (dir === 'desc' && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())) {
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                            switchcount++;
                            break;
                        }
                    }
                    if (!switching && switchcount === 0) { dir = 'desc'; switching = true; }
                }
            }
        </script>
    </head>
    <body>
        <div class='page'>
            <h2>Referentie Bibliografie</h2>
            <table id='biblioTable'>
                <thead>
                    <tr>
                        <th onclick='sortTable(0)'>href</th>
                        <th onclick='sortTable(1)'>Aantal voorkomens</th>
                        <th onclick='sortTable(2)'>Komt voor in</th>
                        <th onclick='sortTable(3)'>Gebruikte shortcodes</th>
                        <th onclick='sortTable(4)'>Titel</th>
                        <th onclick='sortTable(5)'>Status</th>
                        <th onclick='sortTable(6)'>Publisher</th>
                        <th onclick='sortTable(7)'>Editors</th>
                        <th onclick='sortTable(8)'>Datum</th>
                        <th onclick='sortTable(9)'>ID</th>
                    </tr>
                </thead>
                <tbody>";

    $baseUrl = 'https://docs.geostandaarden.nl';
    $context = stream_context_create(["ssl" => ["verify_peer" => false, "verify_peer_name" => false]]);
    $html = file_get_contents($baseUrl, false, $context);
    $dom = new DOMDocument();
    libxml_use_internal_errors(true);
    $dom->loadHTML($html);
    libxml_clear_errors();
    $xpath = new DOMXPath($dom);
    $finalElements = $xpath->query('//span[contains(@class, "final")]');
    $biblioCount = [];

    foreach ($finalElements as $final) {
        $links = $final->getElementsByTagName('a');
        foreach ($links as $link) {
            $url = $link->getAttribute('href');
            if (!filter_var($url, FILTER_VALIDATE_URL)) {
                $url = rtrim($baseUrl, '/') . '/' . ltrim($url, '/');
            }

            $pageHtml = file_get_contents($url, false, $context);
            if ($pageHtml !== false) {
                $pageDom = new DOMDocument();
                libxml_use_internal_errors(true);
                $pageDom->loadHTML($pageHtml);
                libxml_clear_errors();
                $pageXpath = new DOMXPath($pageDom);
                $scriptElement = $pageXpath->query('//script[@id="initialUserConfig"]')->item(0);

                if ($scriptElement) {
                    $jsonContent = trim($scriptElement->nodeValue);
                    $jsonData = json_decode($jsonContent, true);

                    if (isset($jsonData['localBiblio']) && is_array($jsonData['localBiblio'])) {
                        foreach ($jsonData['localBiblio'] as $shortcode => $biblioItem) {
                            if (isset($biblioItem['href'])) {
                                $href = $biblioItem['href'];

                                // Zorg ervoor dat je ongewenste URLs uitsluit
                                if ($href === "http://url van de publicatie" || $href === "https://www.geonovum.nl") {
                                    continue;
                                }

                                // Controleer of deze href al in de array zit
                                if (isset($biblioCount[$href])) {
                                    // Verhoog de telling en voeg shortcodes toe
                                    $biblioCount[$href]['count']++;
                                    $biblioCount[$href]['voorkomende_urls'][] = $url;
                                    // Voeg de shortcode toe als deze nog niet bestaat voor deze href
                                    if (!in_array("[".$shortcode."]", $biblioCount[$href]['shortcodes'])) {
                                        $biblioCount[$href]['shortcodes'][] = "[".$shortcode."]";
                                    }
                                    // Voeg de overige velden toe als ze nog niet bestaan
                                    foreach (['title', 'status', 'publisher', 'editors', 'date', 'id'] as $field) {
                                        if (isset($biblioItem[$field]) && !in_array($biblioItem[$field], $biblioCount[$href][$field])) {
                                            $biblioCount[$href][$field][] = $biblioItem[$field];
                                        }
                                    }
                                } else {
                                    // Voeg de nieuwe entry toe aan de array
                                    $biblioCount[$href] = [
                                        'href' => $href,
                                        'count' => 1,
                                        'voorkomende_urls' => [$url],
                                        'shortcodes' => ['['.$shortcode.']'],
                                        'title' => isset($biblioItem['title']) ? [$biblioItem['title']] : [],
                                        'status' => isset($biblioItem['status']) ? [$biblioItem['status']] : [],
                                        'publisher' => isset($biblioItem['publisher']) ? [$biblioItem['publisher']] : [],
                                        'editors' => isset($biblioItem['editors']) ? [$biblioItem['editors']] : [],
                                        'date' => isset($biblioItem['date']) ? [$biblioItem['date']] : [],
                                        'id' => isset($biblioItem['id']) ? [$biblioItem['id']] : []
                                    ];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
	

    // Verwijder dubbele shortcodes
   foreach ($biblioCount as $href => &$item) {
       $item['shortcodes'] = array_unique($item['shortcodes']);
   }



    // Sorteer de biblioCount array op het aantal keer dat iets voorkomt
    usort($biblioCount, fn($a, $b) => $b['count'] - $a['count']);

	// Genereer de HTML voor de tabel
    foreach ($biblioCount as $item) {
		
		
        echo "<tr>
            <td><a href='{$item['href']}' target='_blank'>{$item['href']}</a></td>
            <td>{$item['count']}</td>
            <td>" . implode(';', $item['voorkomende_urls']) . "</td>
            <td>" . implode(';', $item['shortcodes']) . "</td>
            <td>" . implode(';', $item['title']) . "</td>
            <td>" . implode(';', $item['status']) . "</td>
            <td>" . implode(';', $item['publisher']) . "</td>
            <td>" . implode(';', $item['editors']) . "</td>
            <td>" . implode(';', $item['date']) . "</td>
            <td>" . implode(';', $item['id']) . "</td>
        </tr>";
		
    }

    echo "</tbody></table></div></body></html>";
}


?>