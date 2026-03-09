# Informatiemodel Logisch model IBRO
## Domein Kern
![Kern](data/media/kern.png "Domein Kern")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_object">
<h4>Object</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Object</td>
</tr>
<tr>
<th>Naam</th>
<td>Object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/object">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_identificatie">identificatie</a>
</td>
<td>
Unieke identificatiecode van een informatieobject binnen de context van een registratie.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_domein">domein</a>
</td>
<td>
Aanduiding van het domein waarbinnen de identificatie uniek is.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object_relatiesoort_geregistreerd_met">geregistreerdMet</a>
</td>
<td>
Gegevens over de registratie van het object als informatieobject.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie">Registratie</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_identificatie">
<h6>identificatie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610-2022#identificatie</td>
</tr>
<tr>
<th>Naam</th>
<td>identificatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Unieke identificatiecode van een informatieobject binnen de context van een registratie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>&#39;identificatie&#39; is de identificatiecode die een object heeft binnen een registratie of binnen een ketenproces voor data-uitwisseling. Binnen de registratie of de data-uitwisseling is het object uniek identificeerbaar. In combinatie met het attribuut domein wordt een object hiermee uniek identificeerbaar op het niveau van verschillende registraties, uitwisselprocessen en ook wereldwijd uniek.
De reguliere expressie voor de toegestane tekens is: [a-zA-Z|0-9|_|.|-|\/|:|]</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/identificatie">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/identificatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tr>
<th>Patroon</th>
<td>Alleen de volgende karakters mogen in een waarde van het attribuut identificatie voorkomen: {&#39;A&#39; ... &#39;Z&#39;, &#39;a&#39; ... &#39;z&#39;, &#39;0&#39; ... &#39;9&#39;, &#39;_&#39;, &#39;-&#39;, &#39;,&#39;, &#39;.&#39;, &#39;/&#39;, &#39;:&#39;}</td>
</tr>
<tr>
<th>Formeel patroon</th>
<td>([a-z]|[A-Z]|[0-9]|\_|\-|\,|\.|\:|\/)+</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_domein">
<h6>domein</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610-2022#domein</td>
</tr>
<tr>
<th>Naam</th>
<td>domein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aanduiding van het domein waarbinnen de identificatie uniek is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/domein">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/domein</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tr>
<th>Patroon</th>
<td>Alleen de volgende karakters mogen in een waarde van het attribuut domein voorkomen: {&#39;A&#39; ... &#39;Z&#39;, &#39;a&#39; ... &#39;z&#39;, &#39;0&#39; ... &#39;9&#39;, &#39;_&#39;, &#39;-&#39;, &#39;,&#39;, &#39;.&#39;, &#39;/&#39;, &#39;:&#39;}</td>
</tr>
<tr>
<th>Formeel patroon</th>
<td>([a-z]|[A-Z]|[0-9]|\_|\-|\,|\.|\:|\/)+</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_object_relatiesoort_geregistreerd_met">
<h6>geregistreerdMet</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#geregistreerdMet</td>
</tr>
<tr>
<th>Naam</th>
<td>geregistreerdMet</td>
</tr>
<tr>
<th>Alias</th>
<td>geregistreerd met</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gegevens over de registratie van het object als informatieobject.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/registratiegegevens">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/registratiegegevens</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">
<h5>FunctioneleRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>FunctioneleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Functionele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte met een specifieke functie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Functionele ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/functionele_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/functionele_ruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_functionele_ruimte">StatusFunctioneleRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">
<h5>GeografischeRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>GeografischeRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Geografische ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimte die bekendstaat onder een vanuit de historie of het gebruik bekende benaming of een fysisch-geografische samenhang, al dan niet met zijn omgeving, kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Geografische ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/geografische_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/geografische_ruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_geografische_ruimte">StatusGeografischeRuimte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_altenatieve_naam">altenatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Plaatselijke naam van een geografische ruimte zoals deze is vastgesteld of in het plaatselijk gebruik bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_altenatieve_naam">
<h6>altenatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#altenatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>altenatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>altenatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">
<h5>ReeelObject</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ReeelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>ReeelObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Reëel object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geo-object dat zich geheel materieel manifesteert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Reëel object uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/reeel_object">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/reeel_object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_reeel_object">StatusReeelObject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">
<h6>Constructie</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Constructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebouwd object dat direct of indirect met de bodem is verbonden en bedoeld is om ter plaatse te functioneren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Constructie uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/constructie">https://definities.geostandaarden.nl/ibro/id/begrip/constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie_attribuutsoort_lod_1solid">lod1Solid</a>
</td>
<td>
Relateert een 3D Solid geometrie die een ruimte representeert in Level of Detail 1.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Solid"> GM_Solid</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie_attribuutsoort_lod_2solid">lod2Solid</a>
</td>
<td>
Relateert een 3D Solid geometrie die een ruimte representeert in Level of Detail 2.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Solid"> GM_Solid</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie_attribuutsoort_lod_3solid">lod3Solid</a>
</td>
<td>
Relateert een 3D Solid geometrie die een ruimte representeert in Level of Detail 3.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Solid"> GM_Solid</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_constructie_attribuutsoort_lod_1solid">
<h6>lod1Solid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://www.opengis.net/ont/citygml/core/lod1Solid</td>
</tr>
<tr>
<th>Naam</th>
<td>lod1Solid</td>
</tr>
<tr>
<th>Alias</th>
<td>LOD 1 solid</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relateert een 3D Solid geometrie die een ruimte representeert in Level of Detail 1.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>CityGML 3.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-23</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_constructie_attribuutsoort_lod_2solid">
<h6>lod2Solid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://www.opengis.net/ont/citygml/core/lod2Solid</td>
</tr>
<tr>
<th>Naam</th>
<td>lod2Solid</td>
</tr>
<tr>
<th>Alias</th>
<td>LOD 2 solid</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relateert een 3D Solid geometrie die een ruimte representeert in Level of Detail 2.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>CityGML 3.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-23</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_constructie_attribuutsoort_lod_3solid">
<h6>lod3Solid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://www.opengis.net/ont/citygml/core/lod3Solid</td>
</tr>
<tr>
<th>Naam</th>
<td>lod3Solid</td>
</tr>
<tr>
<th>Alias</th>
<td>LOD 3 solid</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relateert een 3D Solid geometrie die een ruimte representeert in Level of Detail 3.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>CityGML 3.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-23</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_onbepaald_terrein">
<h6>OnbepaaldTerrein</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OnbepaaldTerrein</td>
</tr>
<tr>
<th>Naam</th>
<td>OnbepaaldTerrein</td>
</tr>
<tr>
<th>Alias</th>
<td>Onbepaald terrein</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fysiek begrensd en zichtbaar terrein dat bij een gebouw hoort, dat niet verder wordt gedetailleerd in andere reële objecten en dat bestaat uit een mengvorm van verharding, water, begroeiing en/of constructies.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op definitie van erf in BGT</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In plaats van onbepaald terrein kan ter plaatse ook de reële topografie worden ingewonnen (vrijwillig).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/onbepaald_terrein">https://definities.geostandaarden.nl/ibro/id/begrip/onbepaald_terrein</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie Erf zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_onbepaald_terrein_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_onbepaald_terrein_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">
<h5>RegistratieveRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op basis van wet- of regelgeving afgebakende ruimte die als eenheid geldt van politiek-bestuurlijke verantwoordelijkheid of voor bedrijfsvoering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Registratieve ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/registratieve_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/registratieve_ruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_registratieve_ruimte">StatusRegistratieveRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>



### Keuzen tussen datatypen

#### LijnOfVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__lijn_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#LijnOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>LijnOfVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Lijn of vlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een lijn- of vlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### MultiPuntOfMultiVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__multi_punt_of_multi_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#MultiPuntOfMultiVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>MultiPuntOfMultiVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Multipunt of multivlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een multipunt- of multivlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiPoint"> GM_MultiPoint</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
</tbody>
</table>
</section>

#### PuntLijnOfVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_lijn_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#PuntLijnOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>PuntLijnOfVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Punt, lijn of vlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een punt-, lijn- of vlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### PuntOfVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#PuntOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>PuntOfVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Punt of vlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een punt- of vlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### VlakOfMultiVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VlakOfMultiVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>VlakOfMultiVlak</td>
</tr>
<tr>
<th>Alias</th>
<td>Vlak of multivlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een vlak- of multivlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
</tbody>
</table>
</section>






### Codelijsten

#### StatusReeelObject {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_reeel_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusReeelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusReeelObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Status reëel object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een reëel object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_reele_objecten">https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_reele_objecten</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### StatusFunctioneleRuimte {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_functionele_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusFunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusFunctioneleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status functionele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een functionele ruimte zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_functionele_ruimten">https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_functionele_ruimten</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### StatusRegistratieveRuimte {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_registratieve_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een registratieve ruimte zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_registratieve_ruimten">https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_registratieve_ruimten</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### StatusGeografischeRuimte {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_geografische_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusGeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusGeografischeRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status geografische ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van ontwikkeling waarin een geografische ruimte zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_geografische_ruimten">https://definities.geostandaarden.nl/ibro/id/collectie/statussen_van_geografische_ruimten</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Groen
![Groen](data/media/groen.png "Domein Groen")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_begroeiing">
<h4>Begroeiing</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Begroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>Begroeiing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Planten die op natuurlijke wijze zijn ontstaan of door mensen zijn aangeplant.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Begroeiing uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/begroeiing">https://definities.geostandaarden.nl/ibro/id/begrip/begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_bos">
<h5>Bos</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bos</td>
</tr>
<tr>
<th>Naam</th>
<td>Bos</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing die een dusdanige aantal bomen betreft dat deze een min of meer gesloten geheel vormen of, na volgroeiing van de bomen, zullen vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op de definities van bos in de BGT 1.2 en van Griend en Hakhout uit IMGeo 2.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De definitie van Bos laat voldoende ruimte voor plaatselijke aanwezigheid van struiken.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bos">https://definities.geostandaarden.nl/ibro/id/begrip/bos</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie fysiek voorkomen loofbos, naaldbos en gemengd bos en groenvoorziening van type bosplantsoen van begroeid terreindeel zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_codelijst_type_bos">TypeBos</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bos.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_boom">
<h5>Boom</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boom</td>
</tr>
<tr>
<th>Naam</th>
<td>Boom</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een overblijvende plant met verhoute stam en kroon.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/boom">https://definities.geostandaarden.nl/ibro/id/begrip/boom</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie boom zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_boom_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_boom_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boom.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen">
<h5>FruitOfKweekbomen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FruitOfKweekbomen</td>
</tr>
<tr>
<th>Naam</th>
<td>FruitOfKweekbomen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing die het kweken van meerjarige siergewassen en bomen betreft ten behoeve van een later gebruik elders of voor het kweken van fruit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De hier bedoelde kwekerijen onderscheiden zich van kwekerijen van potplanten door de langdurige stand/teelt van gewassen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/fruit-_of_kweekbomen">https://definities.geostandaarden.nl/ibro/id/begrip/fruit-_of_kweekbomen</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie fysiek voorkomen fruitteelt en boomteelt zoals deze is opgenomen in de basisregistratie grootschalige topografie. En de Boomkwekerij, Fruitkwekerij en Boomgaard zoals deze is opgenomen in de basisregistratie topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_codelijst_type_fruit_of_kweekbomen">TypeFruitOfKweekbomen</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing">
<h5>OverigeBegroeiing</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeBegroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigeBegroeiing</td>
</tr>
<tr>
<th>Alias</th>
<td>Overige begroeiing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begroeiing niet zijnde bos, boom of fruit- of kweekbomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_begroeiing">Begroeiing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_codelijst_type_overige_begroeiing">TypeOverigeBegroeiing</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>








### Codelijsten

#### TypeBos {#informatiemodel_imibro_logisch_domein_groen_codelijst_type_bos}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeBos</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBos</td>
</tr>
<tr>
<th>Alias</th>
<td>Type bos</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een bos.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_bos">https://definities.geostandaarden.nl/ibro/id/collectie/typen_bos</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeFruitOfKweekbomen {#informatiemodel_imibro_logisch_domein_groen_codelijst_type_fruit_of_kweekbomen}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeFruitOfKweekbomen</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeFruitOfKweekbomen</td>
</tr>
<tr>
<th>Alias</th>
<td>Type fruit- of kweekbomen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van fruit- of kweekbomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/fruit-_en_kweekbomen">https://definities.geostandaarden.nl/ibro/id/collectie/fruit-_en_kweekbomen</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOverigeBegroeiing {#informatiemodel_imibro_logisch_domein_groen_codelijst_type_overige_begroeiing}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOverigeBegroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverigeBegroeiing</td>
</tr>
<tr>
<th>Alias</th>
<td>Type overige begroeiing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een overige begroeiing.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_begroeiing">https://definities.geostandaarden.nl/ibro/id/collectie/typen_begroeiing</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Bodem
![Bodem](data/media/bodem.png "Domein Bodem")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_bodem_objecttype_onbegroeide_grond">
<h4>OnbegroeideGrond</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OnbegroeideGrond</td>
</tr>
<tr>
<th>Naam</th>
<td>OnbegroeideGrond</td>
</tr>
<tr>
<th>Alias</th>
<td>Onbegroeide grond</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Oppervlakte die niet bedekt is met enige vorm van begroeiing, water, verharding, gebouwen of andere constructies.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Onbegroeide grond is bewust niet bedekt.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/onbegroeide_grond">https://definities.geostandaarden.nl/ibro/id/begrip/onbegroeide_grond</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier ten opzichte van de bestaande basisregistraties een nieuw objecttype, grotendeels het bestaande fysieke voorkomen type onverhard of zand van terreinen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bodem_objecttype_onbegroeide_grond_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_bodem_objecttype_onbegroeide_grond_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








## Domein Water
![Water](data/media/water.png "Domein Water")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">
<h4>Oppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>Oppervlaktewater</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Massa van water dat de bodem bedekt of in normale omstandigheden kan bedekken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Oppervlaktewater uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/oppervlaktewater">https://definities.geostandaarden.nl/ibro/id/begrip/oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_logisch_domein_water_objecttype_getijdengebied">
<h5>Getijdengebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Getijdengebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Getijdengebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geheel of gedeeltelijk droogvallende gronden die buitendijks gelegen zijn.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/getijdengebied">https://definities.geostandaarden.nl/ibro/id/begrip/getijdengebied</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie ondersteunend waterdeel; Type slik en begroeide terreindelen; Type kwelder zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_getijdengebied_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_codelijst_type_getijdengebied">TypeGetijdengebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_getijdengebied_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_water_objecttype_greppel">
<h5>Greppel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Greppel</td>
</tr>
<tr>
<th>Naam</th>
<td>Greppel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMGEO 1.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een ten behoeve van de waterbeheersing gegraven geul die al dan niet met water bedekt is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMGEO 1.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/greppel">https://definities.geostandaarden.nl/ibro/id/begrip/greppel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie greppel/droge sloot zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_logisch_domein_water_objecttype_watergang">
<h5>Watergang</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watergang</td>
</tr>
<tr>
<th>Naam</th>
<td>Watergang</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Langgerekte verlaging in het aardoppervlak van natuurlijke of kunstmatige oorsprong die permanent of periodiek water bevat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>AQUO lex</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier enkel het aanwezige water bij het voorgeschreven waterpeil. Het bij dit waterpeil droog liggende gedeelte van de oever valt niet binnen de afbakening van dit object.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watergang">https://definities.geostandaarden.nl/ibro/id/begrip/watergang</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie waterloop zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_codelijst_type_watergang">TypeWatergang</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_indicatie_primair">indicatiePrimair</a>
</td>
<td>
Dit object is al dan niet een hoofdverbinding in het watersysteem.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_indicatie_primair">
<h6>indicatiePrimair</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatiePrimair</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatiePrimair</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie primair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dit object is al dan niet een hoofdverbinding in het watersysteem.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte">
<h5>Watervlakte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>Watervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een niet langgerekte verlaging in het aardoppervlak van natuurlijke of kunstmatige oorsprong, die permanent of periodiek water bevat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>gebaseerd op Aquo-standaard</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier enkel het aanwezige water bij het voorgeschreven waterpeil. Het bij dit waterpeil droog liggende gedeelte van de oever valt niet binnen de afbakening van dit object.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/watervlakte">https://definities.geostandaarden.nl/ibro/id/begrip/watervlakte</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie watervlakte en zee zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_codelijst_type_watervlakte">TypeWatervlakte</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_indicatie_primair">indicatiePrimair</a>
</td>
<td>
Dit object is al dan niet een hoofdverbinding in het watersysteem.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_indicatie_primair">
<h6>indicatiePrimair</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatiePrimair</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatiePrimair</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie primair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Dit object is al dan niet een hoofdverbinding in het watersysteem.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>








### Codelijsten

#### TypeGetijdengebied {#informatiemodel_imibro_logisch_domein_water_codelijst_type_getijdengebied}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeGetijdengebied</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeGetijdengebied</td>
</tr>
<tr>
<th>Alias</th>
<td>Type getijdengebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een getijdengebied.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_getijdengebied">https://definities.geostandaarden.nl/ibro/id/collectie/typen_getijdengebied</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWatergang {#informatiemodel_imibro_logisch_domein_water_codelijst_type_watergang}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWatergang</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWatergang</td>
</tr>
<tr>
<th>Alias</th>
<td>Type watergang</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een watergang.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_watergang">https://definities.geostandaarden.nl/ibro/id/collectie/typen_watergang</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWatervlakte {#informatiemodel_imibro_logisch_domein_water_codelijst_type_watervlakte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWatervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWatervlakte</td>
</tr>
<tr>
<th>Alias</th>
<td>Type watervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een watervlakte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_watervlakte">https://definities.geostandaarden.nl/ibro/id/collectie/typen_watervlakte</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Gebouwen
![Gebouwen](data/media/gebouwen.png "Domein Gebouwen")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag">
<h4>Bouwlaag</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bouwlaag</td>
</tr>
<tr>
<th>Naam</th>
<td>Bouwlaag</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Verzameling van ruimten die zijn gelegen op hetzelfde niveau binnen een gebouw</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op de definitie van het begrip Bouwlaag (IfcBuildingStorey) uit de concepten rondom Bouwwerkinformatiemodellen (BIM)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bouwlaag">https://definities.geostandaarden.nl/ibro/id/begrip/bouwlaag</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier ten opzichte van de bestaande basisregistraties een nieuw objecttype.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-26</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-26</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag_attribuutsoort_bouwlaagnummer">bouwlaagnummer</a>
</td>
<td>
Niveau waarop een bouwlaag zich bevindt</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-26</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag_attribuutsoort_bouwlaagnummer">
<h6>bouwlaagnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#bouwlaagnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>bouwlaagnummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Niveau waarop een bouwlaag zich bevindt</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Voor de nummering van de bouwlaag geldt:

* Tweede kelder laag = bouwlaagnummer -2
* Kelder = bouwlaagnummer -1
* Begane grond = bouwlaagnummer 0
* Eerste verdieping = bouwlaagnummer 1
* Tweede verdieping = bouwlaagnummer 2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-26</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-26</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone">
<h4>Functiezone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Functiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Functiezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De grootst mogelijke clustering van (aaneengesloten) ruimten met dezelfde functie en op dezelfde bouwlaag, die volledig binnen de afbakening van een Pand (inclusief Panddelen) ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een Functiezone kan inpandig zijn of gebouwgebonden buitenruimte zijn.
Elke Functiezone wordt geclassificeerd op basis van de hoofdfuncties Verblijven, Verkeer, Opslag of Technisch. De
hoofdfunctie Verblijven wordt nader onderverdeeld in subfuncties conform de gebruiksfuncties uit het Besluit
Bouwwerken Leefomgeving (Bbl). Het betreft hier de vergunde functie.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/functiezone">https://definities.geostandaarden.nl/ibro/id/begrip/functiezone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Dit betreft deels een nieuw begrip, samen met Panddeel en Gebruikszone is dit een vervanging van het begrip EMSO-Gebouwzone als gevolg van een striktere scheiding fysiek - functie - gebruik.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_functiezone">TypeFunctiezone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_bruto_vloeroppervlakte">brutoVloeroppervlakte</a>
</td>
<td>
BrutoVloeroppervlakte als bedoeld in NEN 2580.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag">Bouwlaag</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_bruto_vloeroppervlakte">
<h6>brutoVloeroppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#brutoVloeroppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>brutoVloeroppervlakte</td>
</tr>
<tr>
<th>Alias</th>
<td>bruto vloeroppervlakte (BVO)</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>BrutoVloeroppervlakte als bedoeld in NEN 2580.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit Bouwwerken Leefomgeving</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone">
<h4>Gebruikzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een Gebruikzone is het samenstel van de grootst mogelijke clustering van (aaneengesloten) ruimten op dezelfde bouwlaag binnen een Pand (inclusief Panddelen), waarvoor geldt dat deze deel uit maakt van een zelfstandige eenheid van gebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebruikzone">https://definities.geostandaarden.nl/ibro/id/begrip/gebruikzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_gebruikzone">TypeGebruikzone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_subtype">subtype</a>
</td>
<td>
Subtypeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_gebruikzone">SubtypeGebruikzone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_gebruiksoppervlakte">gebruiksoppervlakte</a>
</td>
<td>
Gebruiksoppervlakte als bedoeld in NEN 2580.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_bouwlaag">Bouwlaag</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subtypeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_gebruiksoppervlakte">
<h6>gebruiksoppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#gebruiksoppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksoppervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksoppervlakte als bedoeld in NEN 2580.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Besluit Bouwwerken Leefomgeving</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">
<h4>Pand</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand</td>
</tr>
<tr>
<th>Naam</th>
<td>Pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een bouwwerk, dat overdekt is en een geheel of grotendeels met wanden omsloten constructief zelfstandige eenheid vormt, bedoeld voor het in een afgeschermde omgeving onderbrengen van mensen, dieren of voorwerpen of voor de productie van goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op definitie “pand” in artikel 1 Wet basisregistratie adressen en gebouwen en de INSPIRE richtlijn</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Er is gekozen voor de naam Pand in plaats van de naam Gebouw zoals in de SOR. De BAG afbakeningscriteria blijven behouden. Dit om de BAG bijhouding niet te verstoren.
Een Pand bestaat uit minimaal 1 Panddeel (Type: basisconstructie).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pand">https://definities.geostandaarden.nl/ibro/id/begrip/pand</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie panden en grotendeels de bestaande populatie open loodsen en overkappingen zoals deze zijn opgenomen in de basisregistratie adressen en gebouwen en de basisregistratie grootschalige topografie. De bestaande definitie van het begrip pand is uitgebreid met een aantal elementen die zijn opgenomen in de INSPIRE richtlijn.

Tot de verzameling Panden horen ook afzonderlijk staande overdekkingen rustend op een constructie met kolommen met
één of meerdere open gevels, zoals loodsen, overkappingen, parkeergarages en uitkijktorens.

Tot de verzameling Panden behoren ook (in theorie) verplaatsbare objecten.

Tot de verzameling Panden behoren geen bouwwerken &lt;5 m2 Bruto grondoppervlakte. Deze worden afgebakend als
Erfconstructies.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_pand">TypePand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_subtype">subtype</a>
</td>
<td>
Subtypeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_pand">SubtypePand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_aard_pand">aardPand</a>
</td>
<td>
Fysieke verschijningsvorm van een pand.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_aard_pand">AardPand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_oorspronkelijk_bouwjaar">oorspronkelijkBouwjaar</a>
</td>
<td>
Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Year</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_indicatie_open_constructie">indicatieOpenConstructie</a>
</td>
<td>
Indicatie dat het pand een open constructie heeft.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De waarde voor deze eigenschap is afleidbaar op basis van de waarde voor de eigenschap &#39;subtype&#39;.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subtypeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_aard_pand">
<h6>aardPand</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#aardPand</td>
</tr>
<tr>
<th>Naam</th>
<td>aardPand</td>
</tr>
<tr>
<th>Alias</th>
<td>aard pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fysieke verschijningsvorm van een pand.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_oorspronkelijk_bouwjaar">
<h6>oorspronkelijkBouwjaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Naam</th>
<td>oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Alias</th>
<td>oorspronkelijk bouwjaar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Deze eigenschap kan worden afgeleid. Dit is gelijk aan het oorspronkelijk bouwjaar van het panddeel van het type basisconstructie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_indicatie_open_constructie">
<h6>indicatieOpenConstructie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenConstructie</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie open constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Indicatie dat het pand een open constructie heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel">
<h4>Panddeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Panddeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een Panddeel is een niet vrijstaand deel van (de constructie) van een Pand dat wordt onderscheiden omdat het op een ander moment onderdeel is geworden van dat Pand dan andere panddelen of omdat de aard van de bouwkundige constructie voldoet aan bepaalde criteria.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een Panddeel kan intern (inpandig) of extern (aan de buitenzijde van een Pand) zijn.
Interne Panddelen zijn later aangebouwde delen (afwijkend bouwjaar) of fysiek onderscheidend.
Een Pand kent altijd een verplicht Panddeel type Basisconstructie (zie bij Pand).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/panddeel">https://definities.geostandaarden.nl/ibro/id/begrip/panddeel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie van gebouwinstallatie zoals deze is opgenomen in de basisregistratie grootschalige topografie, plus delen van panden die apart worden afgebakend omdat ze een later bouwjaar hebben. </td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_panddeel">TypePanddeel</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_oorspronkelijk_bouwjaar">oorspronkelijkBouwjaar</a>
</td>
<td>
Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Year</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_oorspronkelijk_bouwjaar">
<h6>oorspronkelijkBouwjaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Naam</th>
<td>oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Alias</th>
<td>oorspronkelijk bouwjaar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aanduiding van het jaar waarin een constructie oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt">
<h4>Toegangspunt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangspunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangspunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een voorziening die vanaf de openbare weg, een erf of een gedeelde verkeersruimte toegang geeft tot een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/toegangspunt">https://definities.geostandaarden.nl/ibro/id/begrip/toegangspunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_toegangssoort">toegangssoort</a>
</td>
<td>
Plaats waarvan een toegangsdeur toegang geeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_toegangssoort">Toegangssoort</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_gebruiksaard">gebruiksaard</a>
</td>
<td>
Aard van gebruik van een toegangsdeur.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_gebruiksaard_toegangpunt">GebruiksaardToegangpunt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_relatiesoort_hoort_bij">hoortBij</a>
</td>
<td>
Object waar dit object bijhoort.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_keuze_relatiedoel__pand_of_verblijfsobject">PandOfVerblijfsobject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_toegangssoort">
<h6>toegangssoort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#toegangssoort</td>
</tr>
<tr>
<th>Naam</th>
<td>toegangssoort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Plaats waarvan een toegangsdeur toegang geeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_gebruiksaard">
<h6>gebruiksaard</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#gebruiksaard</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksaard</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard van gebruik van een toegangsdeur.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_relatiesoort_hoort_bij">
<h6>hoortBij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hoortBij</td>
</tr>
<tr>
<th>Naam</th>
<td>hoortBij</td>
</tr>
<tr>
<th>Alias</th>
<td>hoort bij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object bijhoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject">
<h4>Verblijfsobject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verblijfsobject</td>
</tr>
<tr>
<th>Naam</th>
<td>Verblijfsobject</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een clustering van gebruikzones die samen een zelfstandige gebruikseenheid vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verblijfsobject">https://definities.geostandaarden.nl/ibro/id/begrip/verblijfsobject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object">AdresseerbaarObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_of_vlak">PuntOfVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_gebruiksoppervlakte">gebruiksoppervlakte</a>
</td>
<td>
Gebruiksoppervlakte van een verblijfsobject.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_omvat">omvat</a>
</td>
<td>
Object dat wordt omvat door dit object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_overlapt_met">overlaptMet</a>
</td>
<td>
Object dat dit object overlapt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_gebruiksoppervlakte">
<h6>gebruiksoppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verblijfsobject.gebruiksoppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksoppervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksoppervlakte van een verblijfsobject.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit is de optelsom van de gebruiksoppervlakte van de door dit verblijfsobject geclusterde gebruikzones.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_omvat">
<h6>omvat</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#omvat</td>
</tr>
<tr>
<th>Naam</th>
<td>omvat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat wordt omvat door dit object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_overlapt_met">
<h6>overlaptMet</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#overlaptMet</td>
</tr>
<tr>
<th>Naam</th>
<td>overlaptMet</td>
</tr>
<tr>
<th>Alias</th>
<td>overlapt met</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat dit object overlapt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>






### Enumeraties

#### AardPand {#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_aard_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#AardPand</td>
</tr>
<tr>
<th>Naam</th>
<td>AardPand</td>
</tr>
<tr>
<th>Alias</th>
<td>Aard pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De aard van een pand.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/aard_pand">https://definities.geostandaarden.nl/ibro/id/begrip/aard_pand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Heterogeen</td>
<td>
Pand dat onderdeel uitmaakt van een reeks aan elkaar verbonden panden die onafhankelijk van elkaar zijn gerealiseerd.</td>
<tr>
<td>
Repeterend</td>
<td>
Pand dat onderdeel uitmaakt van een reeks aan elkaar verbonden panden die als zodanig in één project zijn gerealiseerd.</td>
<tr>
<td>
Vrijstaand</td>
<td>
Pand dat niet is verbonden met een ander pand.</td>
</tbody>
</table>


</section>

#### GebruiksaardToegangpunt {#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_gebruiksaard_toegangpunt}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruiksaardToegangpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>GebruiksaardToegangpunt</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebruiksaard toegangspunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard van gebruik van een toegangspunt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Auto</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door voertuigen.</td>
<tr>
<td>
Personen</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door personen.</td>
<tr>
<td>
Vracht</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door vracht zonder gebruik van een voertuig.</td>
</tbody>
</table>


</section>

#### Toegangssoort {#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_toegangssoort}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangssoort</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangssoort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Plaats waarvan een toegangspunt toegang geeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Directe toegang vanaf eigen terrein</td>
<td>
Toegangspunt bevindt zich op een erf, in een tuin of een andere specifiek terrein dat behoort bij het gebouw.</td>
<tr>
<td>
Directe toegang vanaf openbare weg</td>
<td>
Toegangspunt bevindt zich direct aan een voor iedereen toegankelijke weg.</td>
<tr>
<td>
Toegang vanaf gemeenschappelijke verkeersruimte</td>
<td>
Toegangspunt bevindt zich aan een inpandige ruimte die bedoeld is voor verplaatsingen door een gebouw door de verschillende gebruikers van dit gebouw.</td>
</tbody>
</table>


</section>



### Codelijsten

#### SubtypeGebruikzone {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_gebruikzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypeGebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypeGebruikzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Subtype gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een gebruikzone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_gebruikzone">https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_gebruikzone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### SubtypePand {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypePand</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypePand</td>
</tr>
<tr>
<th>Alias</th>
<td>Subtype pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subcategorisering van een pand op basis van het constructief beoogde gebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_pand">https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_pand</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeFunctiezone {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_functiezone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeFunctiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeFunctiezone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type functiezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een functiezone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_functiezone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_functiezone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeGebruikzone {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_gebruikzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeGebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeGebruikzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een gebruikzone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_gebruikzone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_gebruikzone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypePand {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypePand</td>
</tr>
<tr>
<th>Naam</th>
<td>TypePand</td>
</tr>
<tr>
<th>Alias</th>
<td>Type pand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een pand op basis van het constructief beoogde gebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_pand">https://definities.geostandaarden.nl/ibro/id/collectie/typen_pand</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypePanddeel {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_panddeel}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypePanddeel</td>
</tr>
<tr>
<th>Naam</th>
<td>TypePanddeel</td>
</tr>
<tr>
<th>Alias</th>
<td>Type panddeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een panddeel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_panddeel">https://definities.geostandaarden.nl/ibro/id/collectie/typen_panddeel</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Verhardingen
![Verhardingen](data/media/verhardingen.png "Domein Verhardingen")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding">
<h4>Verharding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Verharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een door egaliseren, verstevigen en/of verruwen voor het beoogde gebruik geschikt gemaakt oppervlak, bestaande uit in een of meer lagen over een bodem of onderliggende constructie aangelegd materiaal.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Verharding uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.
Een verhardingsvlak bestaat uit één Type verharding. Het gaat hierbij over het Type verharding waarmee het vlak overwegend is bedekt.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verharding">https://definities.geostandaarden.nl/ibro/id/begrip/verharding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een selectie van de bestaande populatie fysieke voorkomen van wegdelen, ondersteunende wegdelen en onbegroeide terreindelen zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_verhardingen_codelijst_type_verharding">TypeVerharding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








### Codelijsten

#### TypeVerharding {#informatiemodel_imibro_logisch_domein_verhardingen_codelijst_type_verharding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeVerharding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeVerharding</td>
</tr>
<tr>
<th>Alias</th>
<td>Type verharding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een verharding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_verharding">https://definities.geostandaarden.nl/ibro/id/collectie/typen_verharding</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Kunstwerken
![Kunstwerken](data/media/kunstwerken.png "Domein Kunstwerken")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk">
<h4>Kunstwerk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Civiel-technische constructie voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Kunstwerk uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerk">https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-23</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerk.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een kunstwerk zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">
<h5>Overbrugging</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>Overbrugging</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk dat een beweegbare of vaste verbinding tussen twee punten betreft, die door water, een weg of anderszins gescheiden zijn, bestaande uit een brugdek/-bak met landhoofden en veelal gesteund door pijlers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/overbrugging">https://definities.geostandaarden.nl/ibro/id/begrip/overbrugging</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie overbruggingsdelen; hoort bij Type overbrugging zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_overbrugging">TypeOverbrugging</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_subtype">subtype</a>
</td>
<td>
Subtypeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_subtype_overbrugging">SubtypeOverbrugging</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_indicatie_beweegbaar">indicatieBeweegbaar</a>
</td>
<td>
Deze overbrugging is al dan niet beweegbaar is (kan open en dicht).</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subtypeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_indicatie_beweegbaar">
<h6>indicatieBeweegbaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieBeweegbaar</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieBeweegbaar</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie beweegbaar</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze overbrugging is al dan niet beweegbaar is (kan open en dicht).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling">
<h5>Ondertunneling</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ondertunneling</td>
</tr>
<tr>
<th>Naam</th>
<td>Ondertunneling</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ondergrondse of onder water gelegen verbinding tussen twee punten, aan beide einden voorzien van een open bakconstructie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In een later stadium zullen registratieregels worden opgesteld waarin een nadere invulling wordt gegeven welke typeringen verplicht in de registratie worden opgenomen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/ondertunneling">https://definities.geostandaarden.nl/ibro/id/begrip/ondertunneling</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie tunneldelen zoals deze is opgenomen in de basisregistratie grootschalige topografie. En van kunstwerkdelen van Type duiker indien opgenomen in het IMGeo deel van de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_ondertunneling">TypeOndertunneling</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">
<h5>WaterstaatkundigKunstwerk</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#WaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>WaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Alias</th>
<td>Waterstaatkundig kunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstwerk voor de beheersing van het oppervlaktewater en alles wat daarin voorkomt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De kerende functie kan worden vastgelegd middels de functionele ruimte kering van het type water.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/waterstaatkundig_kunstwerk">https://definities.geostandaarden.nl/ibro/id/begrip/waterstaatkundig_kunstwerk</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie kunstwerkdeel zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerk">Kunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk">
<h6>OverigWaterstaatkundigKunstwerk</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigWaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigWaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Alias</th>
<td>Overig waterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>WaterstaatkundigKunstwerk niet zijnde een sluis.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_waterstaatkundig_kunstwerk">TypeWaterstaatkundigKunstwerk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis">
<h6>Sluis</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluis</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluis</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstmatige, afsluitbare waterkering die een scheepvaartverbinding tussen twee wateren met verschillende waterpeilen mogelijk maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sluis">https://definities.geostandaarden.nl/ibro/id/begrip/sluis</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_waterstaatkundig_kunstwerk">WaterstaatkundigKunstwerk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">
<h4>Kunstwerkdeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerkdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstwerkdeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Onderdeel van een civieltechnisch werk voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>BGT 1.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerkdeel">https://definities.geostandaarden.nl/ibro/id/begrip/kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie overbruggingsdelen, Type overbruggingsdeel zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_dek">
<h5>Dek</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dek</td>
</tr>
<tr>
<th>Naam</th>
<td>Dek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Direct door het verkeer belaste deel van de bovenbouw van de brug.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/dek">https://definities.geostandaarden.nl/ibro/id/begrip/dek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_dek_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_dek_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_landhoofd">
<h5>Landhoofd</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Landhoofd</td>
</tr>
<tr>
<th>Naam</th>
<td>Landhoofd</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ondersteuningsconstructie ter plaatse van een overgang van de aardebaan naar een kunstwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/landhoofd">https://definities.geostandaarden.nl/ibro/id/begrip/landhoofd</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_landhoofd_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_landhoofd_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pijler">
<h5>Pijler</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pijler</td>
</tr>
<tr>
<th>Naam</th>
<td>Pijler</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ondersteuningsconstructie van overbruggingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pijler">https://definities.geostandaarden.nl/ibro/id/begrip/pijler</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pijler_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pijler_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pyloon">
<h5>Pyloon</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pyloon</td>
</tr>
<tr>
<th>Naam</th>
<td>Pyloon</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Boven de bovenbouw uitstekende draagconstructie voor tuien (kabels).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pyloon">https://definities.geostandaarden.nl/ibro/id/begrip/pyloon</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pyloon_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pyloon_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_schutkolk">
<h5>Schutkolk</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schutkolk</td>
</tr>
<tr>
<th>Naam</th>
<td>Schutkolk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deel van de sluis waarin de te schutten schepen afmeren en op een hoger of lager niveau worden gebracht.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/schutkolk">https://definities.geostandaarden.nl/ibro/id/begrip/schutkolk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_schutkolk_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis">Sluis</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_schutkolk_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sloof">
<h5>Sloof</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sloof</td>
</tr>
<tr>
<th>Naam</th>
<td>Sloof</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deel van de pijler voor de overdracht van krachten naar de ondergrond of de fundering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sloof">https://definities.geostandaarden.nl/ibro/id/begrip/sloof</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sloof_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sloof_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluisdeur">
<h5>Sluisdeur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluisdeur</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluisdeur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Beweegbare deur die wordt toegepast bij (hoog)waterkeringen en sluizen om het niveauverschil aan beide zijden in stand te houden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sluisdeur">https://definities.geostandaarden.nl/ibro/id/begrip/sluisdeur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluisdeur_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis">Sluis</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluisdeur_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
</section>








### Codelijsten

#### SubtypeOverbrugging {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_subtype_overbrugging}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypeOverbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypeOverbrugging</td>
</tr>
<tr>
<th>Alias</th>
<td>Subtype overbrugging</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subategorisering van een overbrugging.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_overbrugging">https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_overbrugging</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOndertunneling {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_ondertunneling}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOndertunneling</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOndertunneling</td>
</tr>
<tr>
<th>Alias</th>
<td>Type ondertunneling</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een ondertunneling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_ondertunneling">https://definities.geostandaarden.nl/ibro/id/collectie/typen_ondertunneling</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOverbrugging {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_overbrugging}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOverbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverbrugging</td>
</tr>
<tr>
<th>Alias</th>
<td>Type overbrugging</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een overbrugging.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_overbrugging">https://definities.geostandaarden.nl/ibro/id/collectie/typen_overbrugging</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWaterstaatkundigKunstwerk {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_waterstaatkundig_kunstwerk}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Alias</th>
<td>Type waterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een waterstaatundig kunstwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_waterstaatkundig_kunstwerk">https://definities.geostandaarden.nl/ibro/id/collectie/typen_waterstaatkundig_kunstwerk</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Overige constructies
![Overige constructies](data/media/overige_constructies.png "Domein Overige constructies")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">
<h4>Installatie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Installatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Installatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie die een technisch samenhangend systeem betreft dat een bepaald doel dient.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op installatie in IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/installatie">https://definities.geostandaarden.nl/ibro/id/begrip/installatie</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie installatie en onderdelen van de bestaande populaties paal, kast en overig bouwwerk zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie_relatiesoort_hoort_bij">hoortBij</a>
</td>
<td>
Object waar dit object bijhoort.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie_relatiesoort_hoort_bij">
<h6>hoortBij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hoortBij</td>
</tr>
<tr>
<th>Naam</th>
<td>hoortBij</td>
</tr>
<tr>
<th>Alias</th>
<td>hoort bij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object bijhoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_kast">
<h5>Kast</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kast</td>
</tr>
<tr>
<th>Naam</th>
<td>Kast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie met een permanent karakter dat dient om iets in te bergen en te beschermen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/kast">https://definities.geostandaarden.nl/ibro/id/begrip/kast</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_kast_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_kast_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_lift">
<h5>Lift</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Lift</td>
</tr>
<tr>
<th>Naam</th>
<td>Lift</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie gericht op het verticaal vervoeren van personen en goederen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/lift">https://definities.geostandaarden.nl/ibro/id/begrip/lift</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_lift_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_lift_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_oplaadpunt">
<h5>Oplaadpunt</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oplaadpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Oplaadpunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Systeem voor opladen van elektrische auto&#39;s.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/oplaadpunt">https://definities.geostandaarden.nl/ibro/id/begrip/oplaadpunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_oplaadpunt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_oplaadpunt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_pomp">
<h5>Pomp</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pomp</td>
</tr>
<tr>
<th>Naam</th>
<td>Pomp</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Technische inrichting om vloeistoffen en/of gassen te verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Als het een werkende pomp is, wordt deze als Pomp opgenomen; in andere gevallen (bv historische, niet-werkende pomp) als straatmeubilair zijnde kunstobject.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/pomp">https://definities.geostandaarden.nl/ibro/id/begrip/pomp</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_pomp_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_pomp_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_sirene">
<h5>Sirene</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sirene</td>
</tr>
<tr>
<th>Naam</th>
<td>Sirene</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie welke geluiden van variabele toonhoogte kan voortbrengen om de bevolking te waarschuwen voor gevaarlijke situaties.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/sirene">https://definities.geostandaarden.nl/ibro/id/begrip/sirene</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_sirene_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_sirene_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_transformator">
<h5>Transformator</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transformator</td>
</tr>
<tr>
<th>Naam</th>
<td>Transformator</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie voor het transformeren van elektrische wisselspanning van hoge naar lage spanning en andersom.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMBOR</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transformator">https://definities.geostandaarden.nl/ibro/id/begrip/transformator</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_transformator_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_transformator_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_verlichtingsarmatuur">
<h5>Verlichtingsarmatuur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verlichtingsarmatuur</td>
</tr>
<tr>
<th>Naam</th>
<td>Verlichtingsarmatuur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie bedoeld voor verlichten van de openbare ruimte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verlichtingsarmatuur">https://definities.geostandaarden.nl/ibro/id/begrip/verlichtingsarmatuur</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_verlichtingsarmatuur_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_verlichtingsarmatuur_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_windturbine">
<h5>Windturbine</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Windturbine</td>
</tr>
<tr>
<th>Naam</th>
<td>Windturbine</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Turbine waarin winddruk omgezet wordt in mechanische energie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/windturbine">https://definities.geostandaarden.nl/ibro/id/begrip/windturbine</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_windturbine_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_windturbine_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_zonnepanelen">
<h5>Zonnepanelen</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Zonnepanelen</td>
</tr>
<tr>
<th>Naam</th>
<td>Zonnepanelen</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Installatie om zonne-energie om te zetten in energie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/zonnepanelen">https://definities.geostandaarden.nl/ibro/id/begrip/zonnepanelen</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">Installatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_zonnepanelen_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_of_vlak">PuntOfVlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_zonnepanelen_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast">
<h4>Mast</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Mast</td>
</tr>
<tr>
<th>Naam</th>
<td>Mast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Hoge draagconstructie voor een installatie of het transport van energie en elektromagnetische straling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/mast">https://definities.geostandaarden.nl/ibro/id/begrip/mast</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier een samenvoeging van een subset van de bestaande populaties overig bouwwerk, kunstwerkdeel en mast zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__multi_punt_of_multi_vlak">MultiPuntOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_mast">TypeMast</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast_attribuutsoort_indicatie_open_mast">indicatieOpenMast</a>
</td>
<td>
Geeft aan of een mast al dan niet open is.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_mast_attribuutsoort_indicatie_open_mast">
<h6>indicatieOpenMast</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenMast</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenMast</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie open mast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geeft aan of een mast al dan niet open is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur">
<h4>Muur</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Muur</td>
</tr>
<tr>
<th>Naam</th>
<td>Muur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie die een relatief smal, rechtopstaand bouwwerk betreft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/muur">https://definities.geostandaarden.nl/ibro/id/begrip/muur</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie scheidingen, type muur en type kademuur, en kunstwerkdeel, type keermuur zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_lijngeometrie">lijngeometrie</a>
</td>
<td>
Lineaire geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_vlakgeometrie">vlakgeometrie</a>
</td>
<td>
Vlakgeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_muur">TypeMuur</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_indicatie_valbescherming">indicatieValbescherming</a>
</td>
<td>
Muur die al dan niet bedoeld is om vallen te voorkomen.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_keuze_relatiedoel__kering_of_afscheiding">KeringOfAfscheiding</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_lijngeometrie">
<h6>lijngeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#lijngeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>lijngeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Lineaire geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_vlakgeometrie">
<h6>vlakgeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vlakgeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>vlakgeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vlakgeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_indicatie_valbescherming">
<h6>indicatieValbescherming</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieValbescherming</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieValbescherming</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie valbescherming</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Muur die al dan niet bedoeld is om vallen te voorkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining">
<h4>Omheining</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Omheining</td>
</tr>
<tr>
<th>Naam</th>
<td>Omheining</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Kunstmatige verticale constructie die bedoeld is om de toegang tot een gebied te weren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/omheining">https://definities.geostandaarden.nl/ibro/id/begrip/omheining</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding">Afscheiding</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie">
<h4>OverigeConstructie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigeConstructie</td>
</tr>
<tr>
<th>Alias</th>
<td>Overige constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Constructie niet zijnde installatie, mast, muur, omheining, of scherm.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_lijn_of_vlak">PuntLijnOfVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_overige_constructie">TypeOverigeConstructie</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_subtype">subtype</a>
</td>
<td>
Subtypeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_subtype_overige_constructie">SubtypeOverigeConstructie</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subtypeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm">
<h4>Scherm</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Scherm</td>
</tr>
<tr>
<th>Naam</th>
<td>Scherm</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Lineaire constructie specifiek bedoeld om te reduceren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/scherm">https://definities.geostandaarden.nl/ibro/id/begrip/scherm</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier grotendeels de bestaande populatie scheidingen, Type geluidscherm zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_constructie">Constructie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering">Reducering</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>








### Codelijsten

#### SubtypeOverigeConstructie {#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_subtype_overige_constructie}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypeOverigeConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypeOverigeConstructie</td>
</tr>
<tr>
<th>Alias</th>
<td>Subtype overige constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subategorisering van een overige constructie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_overige_constructie">https://definities.geostandaarden.nl/ibro/id/collectie/subtypen_overige_constructie</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeMast {#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_mast}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeMast</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeMast</td>
</tr>
<tr>
<th>Alias</th>
<td>Type mast</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een mast.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_mast">https://definities.geostandaarden.nl/ibro/id/collectie/typen_mast</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeMuur {#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_muur}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeMuur</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeMuur</td>
</tr>
<tr>
<th>Alias</th>
<td>Type muur</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een muur.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_muur">https://definities.geostandaarden.nl/ibro/id/collectie/typen_muur</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOverigeConstructie {#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_overige_constructie}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOverigeConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverigeConstructie</td>
</tr>
<tr>
<th>Alias</th>
<td>Type overige constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een overige constructie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_overige_constructie">https://definities.geostandaarden.nl/ibro/id/collectie/typen_overige_constructie</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Transportnetwerk
![Transportnetwerk](data/media/transportnetwerk.png "Domein Transportnetwerk")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_netwerkeigenschap">
<h4>Netwerkeigenschap</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Netwerkeigenschap</td>
</tr>
<tr>
<th>Naam</th>
<td>Netwerkeigenschap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Type dat verschijnselen voorstelt die zich op of langs een netwerkelement bevinden. Dit type verschaft algemene eigenschappen om netwerkgerelateerde verschijnselen (netwerkeigenschappen) te associëren met de netwerkelementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/netwerkeigenschap">https://definities.geostandaarden.nl/ibro/id/begrip/netwerkeigenschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_netwerkeigenschap_relatiesoort_netwerkverwijzing">netwerkverwijzing</a>
</td>
<td>
Ruimtelijke verwijzing van de netwerkgerelateerde eigenschap.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing">Verbindingsverwijzing</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_netwerkeigenschap_relatiesoort_netwerkverwijzing">
<h6>netwerkverwijzing</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#netwerkverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>netwerkverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Ruimtelijke verwijzing van de netwerkgerelateerde eigenschap.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte">
<h4>Transportruimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transportruimte</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Natuurlijke of aangelegde transportlijnen of verbindingen met knooppunten waarlangs stromen zich kunnen verplaatsen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transportruimte">https://definities.geostandaarden.nl/ibro/id/begrip/transportruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_hyperverbinding">hyperverbinding</a>
</td>
<td>
Een relatie vanuit een netwerk naar een functionele ruimte waarmee functionele samenhang bestaat.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_ligt_op">ligtOp</a>
</td>
<td>
Object waar dit object op ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_hyperverbinding">
<h6>hyperverbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hyperverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>hyperverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een relatie vanuit een netwerk naar een functionele ruimte waarmee functionele samenhang bestaat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Conceptueel model netwerken - Ministerie van Infrastructuur enWaterstaat</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Bijvoorbeeld een voetpad en een fietspad die parallel aan elkaar liggen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte_relatiesoort_ligt_op">
<h6>ligtOp</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtOp</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtOp</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt op</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object op ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportverbinding">
<h5>Transportverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transportverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportruimte die twee knopen met elkaar verbindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transportverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/transportverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte">Transportruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportverbinding_attribuutsoort_krommegeometrie">krommegeometrie</a>
</td>
<td>
Krommegeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportverbinding_attribuutsoort_krommegeometrie">
<h6>krommegeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#krommegeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>krommegeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Krommegeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop">
<h5>Transportknoop</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Transportknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Transportknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportruimte die een begin-, eind- of keuzepunt voor de gebruiker is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/transportknoop">https://definities.geostandaarden.nl/ibro/id/begrip/transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportruimte">Transportruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop_attribuutsoort_puntgeometrie">puntgeometrie</a>
</td>
<td>
Puntgeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop_attribuutsoort_puntgeometrie">
<h6>puntgeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#puntgeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>puntgeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Puntgeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing">
<h4>Verbindingsverwijzing</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verbindingsverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>Verbindingsverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verwijzing naar een verbinding in een netwerk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsverwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing_attribuutsoort_betreft_richting">betreftRichting</a>
</td>
<td>
De richtingen van de gegeneraliseerde link waarop de verwijzing van toepassing is.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_enumeratie_verbindingsrichting">Verbindingsrichting</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing_relatiesoort_netwerkelement">netwerkelement</a>
</td>
<td>
Het netwerkelement waarnaar verwezen wordt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportverbinding">Transportverbinding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing_attribuutsoort_betreft_richting">
<h6>betreftRichting</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#betreftRichting</td>
</tr>
<tr>
<th>Naam</th>
<td>betreftRichting</td>
</tr>
<tr>
<th>Alias</th>
<td>betreft richting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De richtingen van de gegeneraliseerde link waarop de verwijzing van toepassing is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Toelichting</th>
<td>In gevallen waar een eigenschap niet van toepassing is op een richting langs een verbinding, maar een fenomeen langs een verbinding vertegenwoordigt, verwijst &quot;inRichting&quot; naar de rechterkant in de richting van de verbinding.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing_relatiesoort_netwerkelement">
<h6>netwerkelement</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#netwerkelement</td>
</tr>
<tr>
<th>Naam</th>
<td>netwerkelement</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het netwerkelement waarnaar verwezen wordt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing">
<h5>SimpeleLineaireVerwijzing</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SimpeleLineaireVerwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>SimpeleLineaireVerwijzing</td>
</tr>
<tr>
<th>Alias</th>
<td>Simpele lineaire verwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een netwerkverwijzing die beperkt is tot een deel van een verbinding. Het deel is het deel van de verbinding tussen &#39;vanaf positie&#39; en &#39;tot positie&#39; met een eventuele &#39;offset&#39;.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/simpele_lineaire_verwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/simpele_lineaire_verwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing">Verbindingsverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_vanaf_positie">vanafPositie</a>
</td>
<td>
De startpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van verbinding langs diens curvegeometrie.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_tot_positie">totPositie</a>
</td>
<td>
De eindpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_offset">offset</a>
</td>
<td>
Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_vanaf_positie">
<h6>vanafPositie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vanafPositie</td>
</tr>
<tr>
<th>Naam</th>
<td>vanafPositie</td>
</tr>
<tr>
<th>Alias</th>
<td>vanaf positie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van verbinding langs diens curvegeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_tot_positie">
<h6>totPositie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#totPositie</td>
</tr>
<tr>
<th>Naam</th>
<td>totPositie</td>
</tr>
<tr>
<th>Alias</th>
<td>tot positie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindpositie van de verbinding, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_lineaire_verwijzing_attribuutsoort_offset">
<h6>offset</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#offset</td>
</tr>
<tr>
<th>Naam</th>
<td>offset</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_puntverwijzing">
<h5>SimpelePuntverwijzing</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SimpelePuntverwijzing</td>
</tr>
<tr>
<th>Naam</th>
<td>SimpelePuntverwijzing</td>
</tr>
<tr>
<th>Alias</th>
<td>Simpele puntverwijzing</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een netwerkreferentie die beperkt is tot een punt op een verbinding. Het punt is de locatie op het netwerkelement op de positie &#39;op positie&#39; langs het netwerk, met een eventuele offset.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/simpele_puntverwijzing">https://definities.geostandaarden.nl/ibro/id/begrip/simpele_puntverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_verbindingsverwijzing">Verbindingsverwijzing</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_puntverwijzing_attribuutsoort_op_positie">opPositie</a>
</td>
<td>
Positie van het punt, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_puntverwijzing_attribuutsoort_offset">offset</a>
</td>
<td>
Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_primitief_datatype_lengte">Lengte</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_puntverwijzing_attribuutsoort_op_positie">
<h6>opPositie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#opPositie</td>
</tr>
<tr>
<th>Naam</th>
<td>opPositie</td>
</tr>
<tr>
<th>Alias</th>
<td>op positie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model </td>
</tr>
<tr>
<th>Definitie</th>
<td>Positie van het punt, uitgedrukt als de afstand vanaf het begin van de verbinding langs diens curvegeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_simpele_puntverwijzing_attribuutsoort_offset">
<h6>offset</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#offset</td>
</tr>
<tr>
<th>Naam</th>
<td>offset</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verschuiving ten opzichte van de middellijngeometrie van de verbinding, indien van toepassing. Een positieve offset is een verschuiving naar rechts in de richting van de verbinding, een negatieve offset is een verschuiving naar links.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>





### Primitieve datatypen

#### Lengte {#informatiemodel_imibro_logisch_domein_transportnetwerk_primitief_datatype_lengte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Lengte</td>
</tr>
<tr>
<th>Naam</th>
<td>Lengte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De afstandsmaat als integraal, d.w.z. de limiet van een oneindige som van afstanden tussen punten op een kromme.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Bijvoorbeeld de lengte van een kromme, de omtrek van een veelhoek als de lengte van de grens.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Decimal</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>


### Enumeraties

#### Verbindingsrichting {#informatiemodel_imibro_logisch_domein_transportnetwerk_enumeratie_verbindingsrichting}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verbindingsrichting</td>
</tr>
<tr>
<th>Naam</th>
<td>Verbindingsrichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De richtingen van de verbinding waarop de verwijzing van toepassing is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsrichting">https://definities.geostandaarden.nl/ibro/id/begrip/verbindingsrichting</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
BeideRichtingen</td>
<td>
</td>
<tr>
<td>
InRichting</td>
<td>
</td>
<tr>
<td>
InTegenovergesteldeRichting</td>
<td>
</td>
</tbody>
</table>


</section>



## Domein Wegennetwerk
![Wegennetwerk](data/media/wegennetwerk.png "Domein Wegennetwerk")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop">
<h4>Baanknoop</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Baanknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Baanknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportknoop die een begin- of eindpunt is van een baanverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/baanknoop">https://definities.geostandaarden.nl/ibro/id/begrip/baanknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop">Transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop_relatiesoort_inkomende_verbinding">inkomendeVerbinding</a>
</td>
<td>
De verbindingen die de knoop binnenkomen.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop_relatiesoort_uitgaande_verbinding">uitgaandeVerbinding</a>
</td>
<td>
De verbindingen die de knoop verlaten.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop_relatiesoort_inkomende_verbinding">
<h6>inkomendeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#inkomendeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>inkomendeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>inkomende verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop binnenkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop_relatiesoort_uitgaande_verbinding">
<h6>uitgaandeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#uitgaandeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>uitgaandeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>uitgaande verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop verlaten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_hectometerpunt">
<h4>Hectometerpunt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hectometerpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Hectometerpunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Locatieaanduiding op regelmatige afstand langs de wegverbinding</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/hectormeterpunt">https://definities.geostandaarden.nl/ibro/id/begrip/hectormeterpunt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_netwerkeigenschap">Netwerkeigenschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>

<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop">
<h4>Strookknoop</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strookknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Strookknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportknoop die een begin- of eindpunt is van een strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strookknoop">https://definities.geostandaarden.nl/ibro/id/begrip/strookknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop">Transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop_relatiesoort_inkomende_verbinding">inkomendeVerbinding</a>
</td>
<td>
De verbindingen die de knoop binnenkomen.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop_relatiesoort_uitgaande_verbinding">uitgaandeVerbinding</a>
</td>
<td>
De verbindingen die de knoop verlaten.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding">Strookverbinding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop_relatiesoort_inkomende_verbinding">
<h6>inkomendeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#inkomendeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>inkomendeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>inkomende verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop binnenkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop_relatiesoort_uitgaande_verbinding">
<h6>uitgaandeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#uitgaandeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>uitgaandeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>uitgaande verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop verlaten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop">
<h4>Wegknoop</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Wegverkeerruimte die een begin-, eind- of keuzepunt is voor de weggebruiker/voertuig.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegknoop">https://definities.geostandaarden.nl/ibro/id/begrip/wegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop">Transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_attribuutsoort_vlakgeometrie">vlakgeometrie</a>
</td>
<td>
Vlakgeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_wegknoop">TypeWegknoop</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_heeft_openbare_ruimte">heeftOpenbareRuimte</a>
</td>
<td>
De openbare ruimte dit object heeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_inkomende_verbinding">inkomendeVerbinding</a>
</td>
<td>
De verbindingen die de knoop binnenkomen.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_uitgaande_verbinding">uitgaandeVerbinding</a>
</td>
<td>
De verbindingen die de knoop verlaten.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_attribuutsoort_vlakgeometrie">
<h6>vlakgeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vlakgeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>vlakgeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vlakgeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegknoop.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_heeft_openbare_ruimte">
<h6>heeftOpenbareRuimte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft openbare ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De openbare ruimte dit object heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_inkomende_verbinding">
<h6>inkomendeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#inkomendeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>inkomendeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>inkomende verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop binnenkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop_relatiesoort_uitgaande_verbinding">
<h6>uitgaandeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#uitgaandeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>uitgaandeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>uitgaande verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop verlaten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">
<h4>Wegverkeerruimteverbinding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegverkeerruimteverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegverkeerruimteverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Transportverbinding ten behoeve van wegverkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegverkeerruimteverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportverbinding">Transportverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_rijrichting">rijrichting</a>
</td>
<td>
De toegestane beweegrichting van de hoofdverkeersgebruiker op een weg/baan/strookverbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_enumeratie_rijrichting">Rijrichting</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_vlakgeometrie">vlakgeometrie</a>
</td>
<td>
Vlakgeometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_rijrichting">
<h6>rijrichting</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#rijrichting</td>
</tr>
<tr>
<th>Naam</th>
<td>rijrichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De toegestane beweegrichting van de hoofdverkeersgebruiker op een weg/baan/strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding_attribuutsoort_vlakgeometrie">
<h6>vlakgeometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#vlakgeometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>vlakgeometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vlakgeometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding">
<h5>Baanverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Baanverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Baanverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten deel van een weg dat bedoeld is voor bepaalde groepen verkeersgebruikers.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/baan">https://definities.geostandaarden.nl/ibro/id/begrip/baan</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">Wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_baanverbinding">TypeBaanverbinding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_startknoop">startknoop</a>
</td>
<td>
De startknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop">Baanknoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_eindknoop">eindknoop</a>
</td>
<td>
De eindknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanknoop">Baanknoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding">Wegverbinding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Baanverbinding.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_startknoop">
<h6>startknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#startknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>startknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_eindknoop">
<h6>eindknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#eindknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>eindknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding">
<h5>Strookverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strookverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Strookverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de baan.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/strook">https://definities.geostandaarden.nl/ibro/id/begrip/strook</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">Wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_strookverbinding">TypeStrookverbinding</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_startknoop">startknoop</a>
</td>
<td>
De startknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop">Strookknoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_eindknoop">eindknoop</a>
</td>
<td>
De eindknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookknoop">Strookknoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_baanverbinding">Baanverbinding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Strookverbinding.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_startknoop">
<h6>startknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#startknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>startknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_eindknoop">
<h6>eindknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#eindknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>eindknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_strookverbinding_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding">
<h5>Wegverbinding</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een (onverharde/verharde) voorziening die bedoeld is voor het afwikkelen van het verkeer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegverbinding_-_wegverkeerruimte">https://definities.geostandaarden.nl/ibro/id/begrip/wegverbinding_-_wegverkeerruimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverkeerruimteverbinding">Wegverkeerruimteverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_wegverbinding">TypeWegverbinding</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_routenummer">routenummer</a>
</td>
<td>
Routenummer die over de wegverbinding loopt. Er zijn meerdere routenummers op een wegverbinding mogelijk.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_indicatie_openbare_weg">indicatieOpenbareWeg</a>
</td>
<td>
Deze wegverbinding is al dan niet een openbare weg.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_heeft_openbare_ruimte">heeftOpenbareRuimte</a>
</td>
<td>
De openbare ruimte dit object heeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_startknoop">startknoop</a>
</td>
<td>
De startknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_eindknoop">eindknoop</a>
</td>
<td>
De eindknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegknoop">Wegknoop</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegverbinding.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_routenummer">
<h6>routenummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#routenummer</td>
</tr>
<tr>
<th>Naam</th>
<td>routenummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Routenummer die over de wegverbinding loopt. Er zijn meerdere routenummers op een wegverbinding mogelijk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_attribuutsoort_indicatie_openbare_weg">
<h6>indicatieOpenbareWeg</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenbareWeg</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenbareWeg</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie openbare weg</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze wegverbinding is al dan niet een openbare weg.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_heeft_openbare_ruimte">
<h6>heeftOpenbareRuimte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftOpenbareRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft openbare ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De openbare ruimte dit object heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_startknoop">
<h6>startknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#startknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>startknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_wegennetwerk_objecttype_wegverbinding_relatiesoort_eindknoop">
<h6>eindknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#eindknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>eindknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
</section>






### Enumeraties

#### Rijrichting {#informatiemodel_imibro_logisch_domein_wegennetwerk_enumeratie_rijrichting}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Rijrichting</td>
</tr>
<tr>
<th>Naam</th>
<td>Rijrichting</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De toegestane beweegrichting van de hoofdverkeersgebruiker op een weg/baan/strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/rijrichting">https://definities.geostandaarden.nl/ibro/id/begrip/rijrichting</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Beide</td>
<td>
Beide rijrichtingen zijn op de verbinding toegestaan.</td>
<tr>
<td>
Eenrichting</td>
<td>
Eén rijrichting is toegestaan in de richting van de verbinding.</td>
<tr>
<td>
Tegenovergesteld eenrichting</td>
<td>
Eén rijrichting is toegestaan in de tegenovergestelde richting van de verbinding.</td>
</tbody>
</table>


</section>



### Codelijsten

#### TypeBaanverbinding {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_baanverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeBaanverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBaanverbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>Type baanverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een baanverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_baanverbinding">https://definities.geostandaarden.nl/ibro/id/collectie/typen_baanverbinding</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeStrookverbinding {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_strookverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeStrookverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeStrookverbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>Type strookverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een strookverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_strookverbinding">https://definities.geostandaarden.nl/ibro/id/collectie/typen_strookverbinding</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWegverbinding {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_wegverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWegverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWegverbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>Type wegverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een wegverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_wegverbinding">https://definities.geostandaarden.nl/ibro/id/collectie/typen_wegverbinding</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWegknoop {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_wegknoop}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWegknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWegknoop</td>
</tr>
<tr>
<th>Alias</th>
<td>Type wegknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een wegknoop.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_wegknoop">https://definities.geostandaarden.nl/ibro/id/collectie/typen_wegknoop</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Spoorwegennetwerk
![Spoorwegennetwerk](data/media/spoorwegennetwerk.png "Domein Spoorwegennetwerk")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding">
<h4>Spoorverbinding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Gebaseerd op conceptueel model netwerken</td>
</tr>
<tr>
<th>Definitie</th>
<td>Spoorverkeerruimte die de verkeerskundige inrichting van een spoor tussen twee knopen betreft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorverbinding">https://definities.geostandaarden.nl/ibro/id/begrip/spoorverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportverbinding">Transportverbinding</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_codelijst_type_spoorverbinding">TypeSpoorverbinding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding_relatiesoort_startknoop">startknoop</a>
</td>
<td>
De startknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop">Spoorwegknoop</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding_relatiesoort_eindknoop">eindknoop</a>
</td>
<td>
De eindknoop van de verbinding.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop">Spoorwegknoop</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding_relatiesoort_startknoop">
<h6>startknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#startknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>startknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De startknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding_relatiesoort_eindknoop">
<h6>eindknoop</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#eindknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>eindknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De eindknoop van de verbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop">
<h4>Spoorwegknoop</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorwegknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorwegknoop</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Gebaseerd op conceptueel model netwerken.</td>
</tr>
<tr>
<th>Definitie</th>
<td>Spoorverkeerruimte die een begin-, eind- of keuzepunt voor de spoorgebruiker is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorwegknoop">https://definities.geostandaarden.nl/ibro/id/begrip/spoorwegknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_transportnetwerk_objecttype_transportknoop">Transportknoop</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop_relatiesoort_inkomende_verbinding">inkomendeVerbinding</a>
</td>
<td>
De verbindingen die de knoop binnenkomen.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding">Spoorverbinding</a>
</td>
<td>
0..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop_relatiesoort_uitgaande_verbinding">uitgaandeVerbinding</a>
</td>
<td>
De verbindingen die de knoop verlaten.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorverbinding">Spoorverbinding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop_relatiesoort_inkomende_verbinding">
<h6>inkomendeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#inkomendeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>inkomendeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>inkomende verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop binnenkomen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_spoorwegennetwerk_objecttype_spoorwegknoop_relatiesoort_uitgaande_verbinding">
<h6>uitgaandeVerbinding</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#uitgaandeVerbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>uitgaandeVerbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>uitgaande verbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Definitie</th>
<td>De verbindingen die de knoop verlaten.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>D2.10.1 INSPIRE Data Specifications – Base Models – Generic Network Model</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>








### Codelijsten

#### TypeSpoorverbinding {#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_codelijst_type_spoorverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeSpoorverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeSpoorverbinding</td>
</tr>
<tr>
<th>Alias</th>
<td>Type spoorverbinding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een spoorverbinding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_spoorverbinding">https://definities.geostandaarden.nl/ibro/id/collectie/typen_spoorverbinding</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Functionele ruimten
![Functionele ruimten](data/media/functionele_ruimten.png "Domein Functionele ruimten")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding">
<h4>Afscheiding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afscheiding</td>
</tr>
<tr>
<th>Naam</th>
<td>Afscheiding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die een voorziening betreft om terrein af te scheiden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/afscheiding">https://definities.geostandaarden.nl/ibro/id/begrip/afscheiding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de functionele vertaling van de bestaande populatie scheiding type muur, hek en raster zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex">
<h4>Complex</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Complex</td>
</tr>
<tr>
<th>Naam</th>
<td>Complex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die een verzameling van één of meer gebouwen, constructies, verharding, water en begroeiing betreft die samen een eenheid vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/complex">https://definities.geostandaarden.nl/ibro/id/begrip/complex</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_complex">TypeComplex</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een complex zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater">
<h4>GebruikszoneOppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>GebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebruikszone oppervlaktewater</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Begrensd oppervlaktewatergebied dat een bepaald gebruik kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebruikszone_oppervlaktewater">https://definities.geostandaarden.nl/ibro/id/begrip/gebruikszone_oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_gebruikszone_oppervlaktewater">TypeGebruikszoneOppervlaktewater</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">
<h4>Kering</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kering</td>
</tr>
<tr>
<th>Naam</th>
<td>Kering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening met een kerende functie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een waterkerende en/of scheidende, kunstmatige of natuurlijke hoogte of hooggelegen gronden inclusief de daarin aanwezige waterkerende elementen.</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie functioneel gebied type kering zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_grondkering">
<h5>Grondkering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Grondkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Grondkering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om grond te keren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/grondkering">https://definities.geostandaarden.nl/ibro/id/begrip/grondkering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_grondkering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_grondkering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterkering">
<h5>Waterkering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterkering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om water te keren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/waterkering">https://definities.geostandaarden.nl/ibro/id/begrip/waterkering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterkering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterkering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone">
<h4>Luchtvaartzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchtvaartzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Luchtvaartzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor luchtvaart.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/luchtvaartzone">https://definities.geostandaarden.nl/ibro/id/begrip/luchtvaartzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populaties van de verschillende type luchtvaartzones zoals deze zijn opgenomen in de basisregistratie (grootschalige) topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_luchtvaartzone">TypeLuchtvaartzone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een zone zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone">
<h4>Oeverzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oeverzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Oeverzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied op de grens van water en land waar het dynamisch samenspel van land en water plaatsvindt, lopend van waterpeil tot insteek.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het is niet de bedoeling om alle waterkanten verplicht te voorzien van een oeverzone. Het betreft het gedeelte van de oever dat bij het voorgeschreven waterpeil droog ligt.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/oeverzone">https://definities.geostandaarden.nl/ibro/id/begrip/oeverzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie ondersteunend waterdeel, type oever, slootkant zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_indicatie_natuurvriendelijke_oever">indicatieNatuurvriendelijkeOever</a>
</td>
<td>
Deze oeverzone is al dan niet een door de mens ingericht gebied langs oppervlaktewater waarbij de ontwikkeling van natuur, landschap en ecologie expliciet wordt gestimuleerd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_indicatie_natuurvriendelijke_oever">
<h6>indicatieNatuurvriendelijkeOever</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieNatuurvriendelijkeOever</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieNatuurvriendelijkeOever</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie natuurvriendelijke oever</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze oeverzone is al dan niet een door de mens ingericht gebied langs oppervlaktewater waarbij de ontwikkeling van natuur, landschap en ecologie expliciet wordt gestimuleerd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone">
<h4>Recreatiezone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Recreatiezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor openlucht recreatie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMGeo 2.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/recreatiezone">https://definities.geostandaarden.nl/ibro/id/begrip/recreatiezone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier deels de bestaande populatie typen recreatie zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_recreatiezone">TypeRecreatiezone</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een zone zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering">
<h4>Reducering</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reducering</td>
</tr>
<tr>
<th>Naam</th>
<td>Reducering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening om bepaalde effecten van omgevingsfactoren te verminderen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/reducering">https://definities.geostandaarden.nl/ibro/id/begrip/reducering</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de functionele vertaling van de bestaande populatie scheiding type geluidscherm zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_reducering">TypeReducering</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone">
<h4>Spoorzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor spoorwegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/spoorzone">https://definities.geostandaarden.nl/ibro/id/begrip/spoorzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populaties van de verschillende type spoorzones zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_spoorzone">TypeSpoorzone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">
<h4>VerkeerskundigFunctioneleZone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Naam</th>
<td>VerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die een verkeerskundige functie kent.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verkeerskundige_functionele_zone">https://definities.geostandaarden.nl/ibro/id/begrip/verkeerskundige_functionele_zone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier deels de bestaande populaties van de verschillende typeringen zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_verkeerskundig_functionele_zone">TypeVerkeerskundigFunctioneleZone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een zone zoals deze door de eigenaar is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterbergingsgebied">
<h4>Waterbergingsgebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterbergingsgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterbergingsgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Waterwet</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebied, niet zijnde een oppervlaktewaterlichaam of onderdeel daarvan, dat dient ter verruiming van de bergingscapaciteit van een of meer watersystemen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Waterwet</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een wadi is een voorbeeld van een waterbergingsgebied.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/waterbergingsgebied">https://definities.geostandaarden.nl/ibro/id/begrip/waterbergingsgebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterbergingsgebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterbergingsgebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone">
<h4>Wegzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functionele ruimte die in gebruik is voor weginrichting.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wegzone">https://definities.geostandaarden.nl/ibro/id/begrip/wegzone</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populaties van de verschillende type wegzones zoals deze zijn opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_wegzone">TypeWegzone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








### Codelijsten

#### TypeComplex {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_complex}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeComplex</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeComplex</td>
</tr>
<tr>
<th>Alias</th>
<td>Type complex</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een complex.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_complex">https://definities.geostandaarden.nl/ibro/id/collectie/typen_complex</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeGebruikszoneOppervlaktewater {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_gebruikszone_oppervlaktewater}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeGebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeGebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Alias</th>
<td>Type gebruikszone oppervlaktewater</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een gebruikszone oppervlaktewater.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_gebruikszone_oppervlaktewater">https://definities.geostandaarden.nl/ibro/id/collectie/typen_gebruikszone_oppervlaktewater</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeLuchtvaartzone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_luchtvaartzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeLuchtvaartzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeLuchtvaartzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type luchtvaartzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een luchtvaartzone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_luchtvaartzone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_luchtvaartzone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeRecreatiezone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_recreatiezone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeRecreatiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeRecreatiezone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type recreatiezone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een recreatiezone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_recreatiezone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_recreatiezone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeReducering {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_reducering}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeReducering</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeReducering</td>
</tr>
<tr>
<th>Alias</th>
<td>Type reducering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een reducering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_reducering">https://definities.geostandaarden.nl/ibro/id/collectie/typen_reducering</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeSpoorzone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_spoorzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeSpoorzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeSpoorzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type spoorzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een spoorzone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_spoorzone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_spoorzone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeVerkeerskundigFunctioneleZone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_verkeerskundig_functionele_zone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeVerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeVerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type verkeerskundig functionele zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een verkeerskundig functionele zone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_verkeerskundig_functionele_zone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_verkeerskundig_functionele_zone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWegzone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_wegzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWegzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWegzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type wegzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een wegzone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_wegzone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_wegzone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Bestuurlijke gebieden
![Bestuurlijke gebieden](data/media/bestuurlijke_gebieden.png "Domein Bestuurlijke gebieden")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">
<h4>Gemeentegebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gemeentegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemeentegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een openbaar lichaam met diverse bestuurlijke taken, ingesteld op basis van artikel 123 en 124 van de Grondwet, artikel 2:1 Burgerlijk Wetboek en artikel 3 van de Wet algemene regels herindeling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondwet en Gemeentewet</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/bg/id/begrip/gemeentegebied">http://begrippen.geostandaarden.nl/bg/id/begrip/gemeentegebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Registratieve ruimten
![Registratieve ruimten](data/media/registratieve_ruimten.png "Domein Registratieve ruimten")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object">
<h4>AdresseerbaarObject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#AdresseerbaarObject</td>
</tr>
<tr>
<th>Naam</th>
<td>AdresseerbaarObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Adresseerbaar object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een adresseerbaar object is een object waaraan formeel adressen kunnen en moeten worden toegekend.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/adresseerbaar_object">https://definities.geostandaarden.nl/ibro/id/begrip/adresseerbaar_object</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_hoofdadres">heeftAlsHoofdadres</a>
</td>
<td>
Een hoofdadres is het primaire adres van een adresseerbaar object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding">Nummeraanduiding</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_nevenadres">heeftAlsNevenadres</a>
</td>
<td>
Een nevenadres is een aanvullend adres voor een adresseerbaar object. Een nevenadres mag alleen worden toegekend wanneer er meerdere relevante toegangen zijn en een toegang een wezenlijke betekenis heeft bij het aanduiden van het object, zoals een leveranciersingang. Met het nevenadres wordt expliciet niet een bepaald gedeelte van een adresseerbaar object aangeduid.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding">Nummeraanduiding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_hoofdadres">
<h6>heeftAlsHoofdadres</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftAlsHoofdadres</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAlsHoofdadres</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft als hoofdadres</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een hoofdadres is het primaire adres van een adresseerbaar object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_nevenadres">
<h6>heeftAlsNevenadres</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftAlsNevenadres</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAlsNevenadres</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft als nevenadres</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een nevenadres is een aanvullend adres voor een adresseerbaar object. Een nevenadres mag alleen worden toegekend wanneer er meerdere relevante toegangen zijn en een toegang een wezenlijke betekenis heeft bij het aanduiden van het object, zoals een leveranciersingang. Met het nevenadres wordt expliciet niet een bepaald gedeelte van een adresseerbaar object aangeduid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een extra adres. Een nevenadres mag alleen worden gegeven als er meer belangrijke toegangen zijn en een toegang een echte betekenis heeft, zoals een leveranciersingang. Een nevenadres is een eigenschap van het hele adresseerbare object en niet van alleen een deel hiervan. Een nevenadres is dus op dezelfde plek als het hoofdadres. Meestal wordt aan elk adresseerbaar object maar 1 adres gegeven.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats">
<h5>BenoemdePlaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#BenoemdePlaats</td>
</tr>
<tr>
<th>Naam</th>
<td>BenoemdePlaats</td>
</tr>
<tr>
<th>Alias</th>
<td>Benoemde plaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijk orgaan als zodanig aangewezen delen van een terrein en/of water waarvan het belang is daaraan een adres toe te kennen en dat bedoeld is voor het permanent plaatsen van een niet direct en niet duurzaam met de aarde verbonden object, het permanent afmeren van een drijvend object of het permanent aanwezig zijn van publiek toegankelijke technische voorzieningen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Door het hanteren van een generiek begrip benoemde plaats in plaats van standplaats en ligplaats, wordt het mogelijk ook andere objecten onder dit begrip te laten vallen. Van deze mogelijkheid is in eerste instantie gebruik gemaakt om ook onbemenste tankstations van een adres te kunnen voorzien. Door de wijziging van Benaming wordt ook de in de uitvoeringspraktijk bestaande verwarring met vergelijkbare begrippen in het kader van onder meer de Omgevingswet tegengegaan.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/benoemde_plaats">https://definities.geostandaarden.nl/ibro/id/begrip/benoemde_plaats</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>De populatie van standplaatsen en ligplaatsen, zoals deze momenteel is opgenomen in de basisregistratie adressen en gebouwen, wordt met de juiste typering opgenomen als benoemde plaats.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object">AdresseerbaarObject</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_type_te_plaatsen_object">typeTePlaatsenObject</a>
</td>
<td>
Type van het object dat op de benoemde plaats is of kan worden geplaatst.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_codelijst_type_te_plaatsen_object">TypeTePlaatsenObject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_type_te_plaatsen_object">
<h6>typeTePlaatsenObject</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#typeTePlaatsenObject</td>
</tr>
<tr>
<th>Naam</th>
<td>typeTePlaatsenObject</td>
</tr>
<tr>
<th>Alias</th>
<td>type te plaatsen object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Type van het object dat op de benoemde plaats is of kan worden geplaatst.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt">
<h4>Buurt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Buurt</td>
</tr>
<tr>
<th>Naam</th>
<td>Buurt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten gedeelte van een wijk, waarvan de grenzen zo veel mogelijk gebaseerd zijn op topografische elementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>GFO Basisgegevens</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een buurt valt altijd volledig binnen een wijk. De geometrie van alle buurten moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Buurten mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/buurt">https://definities.geostandaarden.nl/ibro/id/begrip/buurt</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Buurten zijn op dit moment nog geen onderdeel van een basisregistratie. Wel hebben alle gemeenten (in overleg met het CBS) buurten vastgesteld. Deze zijn landelijk opgenomen in de WBI (wijk- en buurtindeling) die momenteel wordt beheerd door het CBS. Door de opname van buurten in de objectenregistratie ontstaat een formele vastlegging van buurten.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtcode">buurtcode</a>
</td>
<td>
Codering van een buurt zoals deze door het CBS wordt gebruikt.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtnaam">buurtnaam</a>
</td>
<td>
Naam die aan een buurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk">Wijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtcode">
<h6>buurtcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#buurtcode</td>
</tr>
<tr>
<th>Naam</th>
<td>buurtcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een buurt zoals deze door het CBS wordt gebruikt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtnaam">
<h6>buurtnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#buurtnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>buurtnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een buurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding">
<h4>Nummeraanduiding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Nummeraanduiding</td>
</tr>
<tr>
<th>Naam</th>
<td>Nummeraanduiding</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijke orgaan als zodanig toegekende aanduiding van een verblijfsobject of een benoemde plaats.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Artikel 1 Wet basisregistraties adressen en gebouwen, Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Nummeraanduiding maakt samen met woonplaats en openbare ruimte het officiële adres. Een nummeraanduiding is gelegen aan een openbare ruimte en heeft daartoe een verwijzing naar deze gerelateerde openbare ruimte.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/nummeraanduiding">https://definities.geostandaarden.nl/ibro/id/begrip/nummeraanduiding</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie zoals opgenomen in de basisregistratie adressen en gebouwen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummer">huisnummer</a>
</td>
<td>
Een huisnummer is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nummering.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Integer</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisletter">huisletter</a>
</td>
<td>
Een huisletter is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummertoevoeging">huisnummertoevoeging</a>
</td>
<td>
Een huisnummertoevoeging is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_postcode">postcode</a>
</td>
<td>
De postcode is een door PostNL vastgestelde code behorende bij een bepaalde combinatie van een straatnaam en een huisnummer.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats">Woonplaats</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_aan">ligtAan</a>
</td>
<td>
Object waaraan dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummer">
<h6>huisnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#huisnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>huisnummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een huisnummer is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nummering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De gemeente voegt een huisnummer toe aan een adresseerbaar object. Een huisnummer is altijd een getal tussen 1 en 99999.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisletter">
<h6>huisletter</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#huisletter</td>
</tr>
<tr>
<th>Naam</th>
<td>huisletter</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een huisletter is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De gemeente kan een huisletter toevoegen aan een huisnummer. Een huisletter mag een hoofdletter of een kleine letter zijn.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummertoevoeging">
<h6>huisnummertoevoeging</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#huisnummertoevoeging</td>
</tr>
<tr>
<th>Naam</th>
<td>huisnummertoevoeging</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een huisnummertoevoeging is een door of namens het gemeentebestuur ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De gemeente kan een huisnummertoevoeging toevoegen aan een huisnummer en een eventuele huisletter. Een huisnummertoevoeging bestaat uit 4 tekens en kan een combinatie zijn van hoofdletters, kleine letters en/of cijfers.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_postcode">
<h6>postcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#postcode</td>
</tr>
<tr>
<th>Naam</th>
<td>postcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De postcode is een door PostNL vastgestelde code behorende bij een bepaalde combinatie van een straatnaam en een huisnummer.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De postcode is een door PostNL bepaalde code, die hoort bij een combinatie van een straatnaam en een huisnummer. Een postcode bestaat uit 4 cijfers en 2 letters. </td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_aan">
<h6>ligtAan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtAan</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtAan</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt aan</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waaraan dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte">
<h4>OpenbareRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>OpenbareRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Openbare ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijke orgaan als zodanig aangewezen en van een naam voorziene buitenruimte die binnen één woonplaats is gelegen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Openbare ruimten worden uitsluitend gekoppeld aan wegverbindingen en waterverbindingen door het bij deze verbindingen opnemen van een verwijzing naar de identificatiecode van de openbare ruimte waarbinnen deze verbinding is gelegen. De naamgeving van de andere objecttypen die momenteel nog van een formele openbare ruimte naam kunnen worden voorzien, wordt geregistreerd door het op vrijwillige basis bij deze objecttypen opnemen van een eigenschap “naam”. Het gaat daarbij om spoorverbindingen, kunstwerken, geografische gebieden en functionele gebieden. Door deze wijze van koppeling aan wegverbindingen en waterverbindingen worden openbare ruimten ook geometrisch vindbaar. Naam van een openbare ruimte wordt in de dagelijkse praktijk vaak straatnaam genoemd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/openbare_ruimte">https://definities.geostandaarden.nl/ibro/id/begrip/openbare_ruimte</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>De populatie van openbare ruimten, zoals deze momenteel is opgenomen in de basisregistratie adressen en gebouwen, wijzigt als gevolg van de inperking van het aantal typen objecten waaraan een formele benaming van een openbare ruimte kan worden gekoppeld.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_formele_naam">formeleNaam</a>
</td>
<td>
Naam van een object zoals formeel benoemd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats">Woonplaats</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_formele_naam">
<h6>formeleNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#formeleNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>formeleNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>formele naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object zoals formeel benoemd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een openbare ruimte zoals deze breed is geaccepteerd in de volksmond of zoals deze bekend staat in het Fries (bij een formele benaming in het Nederlands) of in het Nederlands (bij een formele benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt">
<h4>Subbuurt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Subbuurt</td>
</tr>
<tr>
<th>Naam</th>
<td>Subbuurt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een subbuurt is, zo mogelijk, een samenhangend sociaal geheel, omsloten door natuurlijke grenzen (zoals brede wegen en waterlopen). Samen vormen zij een Buurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/subbuurt">https://definities.geostandaarden.nl/ibro/id/begrip/subbuurt</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtcode">subbuurtcode</a>
</td>
<td>
Codering van een subbuurt.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtnaam">subbuurtnaam</a>
</td>
<td>
Naam die aan een subbuurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt">Buurt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtcode">
<h6>subbuurtcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtcode</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een subbuurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtnaam">
<h6>subbuurtnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een subbuurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel">
<h4>Subbuurtdeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Subbuurtdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Subbuurtdeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subbuurtdeel ontstaat als subbuurten te groot zijn voor technisch en administratief beheer. Een subbuurtdeel is, zo mogelijk, een samenhangend sociaal geheel, omsloten door natuurlijke grenzen (zoals brede wegen en waterlopen). Samen vormen zij een Subbuurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/subbuurtdeel">https://definities.geostandaarden.nl/ibro/id/begrip/subbuurtdeel</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelcode">subbuurtdeelcode</a>
</td>
<td>
Codering van een subbuurtdeel.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelnaam">subbuurtdeelnaam</a>
</td>
<td>
Naam die aan een subbuurtdeel is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt">Subbuurt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelcode">
<h6>subbuurtdeelcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtdeelcode</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtdeelcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een subbuurtdeel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelnaam">
<h6>subbuurtdeelnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtdeelnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtdeelnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een subbuurtdeel is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk">
<h4>Wijk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wijk</td>
</tr>
<tr>
<th>Naam</th>
<td>Wijk</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten gedeelte van het grondgebied van een gemeente, waarvan de grenzen zo veel mogelijk zijn gebaseerd op sociaalgeografische kenmerken.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>GFO Basisgegevens</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een wijk valt altijd volledig binnen een gemeente. De geometrie van alle wijken moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Wijken mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/wijk">https://definities.geostandaarden.nl/ibro/id/begrip/wijk</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Wijken zijn op dit moment nog geen onderdeel van een basisregistratie. Wel hebben alle gemeenten (in overleg met het CBS) wijken vastgesteld. Deze zijn landelijk opgenomen in de WBI (wijk- en buurtindeling) die momenteel wordt beheerd door het CBS. Door de opname van wijken in de objectenregistratie ontstaat een formele vastlegging van wijken.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijkcode">wijkcode</a>
</td>
<td>
Codering van een wijk zoals deze door het CBS wordt gebruikt.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijknaam">wijknaam</a>
</td>
<td>
Naam die aan een wijk is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijkcode">
<h6>wijkcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#wijkcode</td>
</tr>
<tr>
<th>Naam</th>
<td>wijkcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een wijk zoals deze door het CBS wordt gebruikt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijknaam">
<h6>wijknaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#wijknaam</td>
</tr>
<tr>
<th>Naam</th>
<td>wijknaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een wijk is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats">
<h4>Woonplaats</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Woonplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Woonplaats</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Door het bevoegde gemeentelijke orgaan als zodanig aangewezen en van een naam voorzien gedeelte van het grondgebied van de gemeente.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Artikel 1 Wet basisregistratie adressen en gebouwen</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een woonplaats valt altijd volledig binnen een gemeente. De geometrie van alle woonplaatsen moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Woonplaatsen mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/woonplaats">https://definities.geostandaarden.nl/ibro/id/begrip/woonplaats</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie zoals opgenomen in de basisregistratie adressen en gebouwen.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_formele_naam">formeleNaam</a>
</td>
<td>
Naam van een object zoals formeel benoemd.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
Alternatieve benaming van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_formele_naam">
<h6>formeleNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#formeleNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>formeleNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>formele naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object zoals formeel benoemd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Alias</th>
<td>alternatieve naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Alternatieve benaming van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Alternatieve benaming van een woonplaats zoals deze bekend staat in het Fries (bij een formele benaming in het Nederlands) of in het Nederlands (bij een formele benaming in het Fries).</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>








### Codelijsten

#### TypeTePlaatsenObject {#informatiemodel_imibro_logisch_domein_registratieve_ruimten_codelijst_type_te_plaatsen_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeTePlaatsenObject</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeTePlaatsenObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Type te plaatsen object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Objecttypes waarvan plaatsing op een benoemde plaats bestemd kan worden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_te_plaatsen_object">https://definities.geostandaarden.nl/ibro/id/collectie/typen_te_plaatsen_object</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Geografische ruimten
![Geografische ruimten](data/media/geografische_ruimten.png "Domein Geografische ruimten")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern">
<h4>Bebouwingskern</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bebouwingskern</td>
</tr>
<tr>
<th>Naam</th>
<td>Bebouwingskern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte die gekenmerkt wordt door een concentratie van gebouwen en die vanuit besluitvorming, historie of in de volksmond bekend staat onder een bepaalde naam.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op definitie Plaats in BRT</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/bebouwingskern">https://definities.geostandaarden.nl/ibro/id/begrip/bebouwingskern</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_bebouwingskern">TypeBebouwingskern</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bebouwingskern.ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>

<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied">
<h4>LandschappelijkGebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#LandschappelijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>LandschappelijkGebied</td>
</tr>
<tr>
<th>Alias</th>
<td>Landschappelijk gebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte die een fysisch-geografische samenhang vertoont.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het landschappelijk gebied is al dan niet begroeid, bebouwd of bedekt door water of wegen, waarbij de typering leidend is.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/landschappelijk_gebied">https://definities.geostandaarden.nl/ibro/id/begrip/landschappelijk_gebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_landschappelijk_gebied">TypeLandschappelijkGebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone">
<h4>Reliefzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Reliefzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Reliëfzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte die een hoogteverschil in het landschap aanduidt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/reliefzone">https://definities.geostandaarden.nl/ibro/id/begrip/reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone">
<h5>OverigeReliefzone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeReliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigeReliefzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Overige reliëfzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Reliëfzone niet zijnde een steilrand.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_type">type</a>
</td>
<td>
Typeclassificatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_overige_reliefzone">TypeOverigeReliefzone</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Typeclassificatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>

<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_steilrand">
<h5>Steilrand</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Steilrand</td>
</tr>
<tr>
<th>Naam</th>
<td>Steilrand</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Abrupte scheiding tussen een hooggelegen en laaggelegen gebied in het landschap, al dan niet begroeid, gevormd door diverse geologische en antropogene processen zoals riviererosie, afzettingen, vergraving en bodembewegingen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/steilrand">https://definities.geostandaarden.nl/ibro/id/begrip/steilrand</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_steilrand_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Curve"> GM_Curve</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_steilrand_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek">
<h4>Streek</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Streek</td>
</tr>
<tr>
<th>Naam</th>
<td>Streek</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geografische ruimte met een culturele samenhang die vanuit de historie of in de volksmond bekend staat onder een bepaalde naam.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Gebaseerd op Basisregistratie Topografie: Catalogus en Productspecificaties (versie 1.2.0.1)</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/streek">https://definities.geostandaarden.nl/ibro/id/begrip/streek</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Ja</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








### Codelijsten

#### TypeBebouwingskern {#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_bebouwingskern}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeBebouwingskern</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBebouwingskern</td>
</tr>
<tr>
<th>Alias</th>
<td>Type bebouwingskern</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een bebouwingskern.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_bebouwingskern">https://definities.geostandaarden.nl/ibro/id/collectie/typen_bebouwingskern</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeLandschappelijkGebied {#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_landschappelijk_gebied}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeLandschappelijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeLandschappelijkGebied</td>
</tr>
<tr>
<th>Alias</th>
<td>Type landschappelijk gebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een landschappelijk gebied.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_landschappelijk_gebied">https://definities.geostandaarden.nl/ibro/id/collectie/typen_landschappelijk_gebied</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOverigeReliefzone {#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_overige_reliefzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOverigeReliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverigeReliefzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type overige reliëfzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een overige reliëfzone.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Locatie</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/collectie/typen_overige_reliefzone">https://definities.geostandaarden.nl/ibro/id/collectie/typen_overige_reliefzone</a>
</td>
</tr>
<tr>
<th>Doelformaat</th>
<td>SKOS</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Registratiegegevens
![Registratiegegevens](data/media/registratiegegevens.png "Domein Registratiegegevens")

### Objecttypen


<section id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_actor">
<h4>Actor</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://www.w3.org/ns/prov#Agent</td>
</tr>
<tr>
<th>Naam</th>
<td>Actor</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een actor is een entiteit die verantwoordelijk is voor het plaatsvinden van een activiteit, het bestaan van een entiteit, of voor de activiteit van een andere actor.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>PROV</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>









<section id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_organisatie">
<h5>Organisatie</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://www.w3.org/ns/prov#Organization</td>
</tr>
<tr>
<th>Naam</th>
<td>Organisatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een organisatie is een actor in de vorm van een sociaal of legaal samenwerkingsverband.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>PROV</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_actor">Actor</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>








<section id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie">
<h6>Overheidsorganisatie</h6>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Overheidsorganisatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Overheidsorganisatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een organisatie die namens de overheid taken uitvoert en onder het gezag en toezicht van de overheid valt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_organisatie">Organisatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie_attribuutsoort_naam">naam</a>
</td>
<td>
De voorkeursnaam van de organisatie</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie_attribuutsoort_officiele_naam_incl_soort">officieleNaamInclSoort</a>
</td>
<td>
De officiële naam van de organisatie met soortaanduiding, bijvoorbeeld &#39;gemeente &#39;s-Gravenhage&#39;</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie_attribuutsoort_organisatiecode">organisatiecode</a>
</td>
<td>
De organisatiecode</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://www.w3.org/2000/01/rdf-schema#label</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>De voorkeursnaam van de organisatie</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie_attribuutsoort_officiele_naam_incl_soort">
<h6>officieleNaamInclSoort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/officieleNaamInclSoort</td>
</tr>
<tr>
<th>Naam</th>
<td>officieleNaamInclSoort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>De officiële naam van de organisatie met soortaanduiding, bijvoorbeeld &#39;gemeente &#39;s-Gravenhage&#39;</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_overheidsorganisatie_attribuutsoort_organisatiecode">
<h6>organisatiecode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/organisatiecode</td>
</tr>
<tr>
<th>Naam</th>
<td>organisatiecode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>De organisatiecode</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Deze is uniek voor elke organisatie en fungeert bovendien als local name (gegeven de namespace-conventies binnen de registers)</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_bronentiteit">
<h4>Bronentiteit</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bronentiteit</td>
</tr>
<tr>
<th>Naam</th>
<td>Bronentiteit</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een bronentiteit is een entiteit waaraan een ander object ter herleiden is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Ja</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_bronentiteit_attribuutsoort_identificatie">identificatie</a>
</td>
<td>
Unieke identificatiecode van een informatieobject binnen de context van een registratie.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_bronentiteit_attribuutsoort_identificatie">
<h6>identificatie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#identificatie</td>
</tr>
<tr>
<th>Naam</th>
<td>identificatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Unieke identificatiecode van een informatieobject binnen de context van een registratie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>



<section id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_brondocument">
<h5>Brondocument</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Brondocument</td>
</tr>
<tr>
<th>Naam</th>
<td>Brondocument</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een brondocument is een bronentiteit in de vorm van een document.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_bronentiteit">Bronentiteit</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_brondocument_attribuutsoort_documentnummer">documentnummer</a>
</td>
<td>
De unieke aanduiding van het brondocument.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_brondocument_attribuutsoort_documentdatum">documentdatum</a>
</td>
<td>
De documentdatum is de datum waarop het brondocument is vastgesteld, op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een object heeft plaatsgevonden.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Date</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_brondocument_attribuutsoort_documentnummer">
<h6>documentnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#documentnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>documentnummer</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>De unieke aanduiding van het brondocument.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_brondocument_attribuutsoort_documentdatum">
<h6>documentdatum</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#documentdatum</td>
</tr>
<tr>
<th>Naam</th>
<td>documentdatum</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>De documentdatum is de datum waarop het brondocument is vastgesteld, op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een object heeft plaatsgevonden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie">
<h4>Registratie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#Registratie</td>
</tr>
<tr>
<th>Naam</th>
<td>Registratie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Vastlegging van een versie van een set gegevens.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/objectregistratie ">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/objectregistratie </a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Indicatie abstract object</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_versie">versie</a>
</td>
<td>
Versieaanduiding van een informatieobject.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een object zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_enumeratie_status_registratie">StatusRegistratie</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_begin_geldigheid">beginGeldigheid</a>
</td>
<td>
Start van de periode waarop deze versie van het informatieobject geldig is.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Date</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_eind_geldigheid">eindGeldigheid</a>
</td>
<td>
Eind van de periode waarop deze versie van het informatieobject geldig is. De periode is tot aan deze tijdsaanduiding. Wanneer deze waarde niet is ingevuld, is de versie nog geldig.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Date</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_tijdstip_registratie">tijdstipRegistratie</a>
</td>
<td>
Tijdsaanduiding van het moment waarop deze versie van het informatieobject is opgenomen in de registratie.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> DateTime</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_eind_registratie">eindRegistratie</a>
</td>
<td>
Eind van de periode dat deze versie van het informatieobject actueel is in de registratie. De periode is tot aan deze tijdsaanduiding. Wanneer deze waarde niet is ingevuld, is de versie nog actueel.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> DateTime</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_indicatie_object_geconstateerd">indicatieObjectGeconstateerd</a>
</td>
<td>
Een aanduiding waarmee kan worden aangegeven dat het object in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_relatiesoort_primaire_bron">primaireBron</a>
</td>
<td>
Een primaire bron voor een object is een entiteit op basis waarvan de totstandkoming van het object direct gebaseerd is.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_bronentiteit">Bronentiteit</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_relatiesoort_verantwoordelijke_partij">verantwoordelijkePartij</a>
</td>
<td>
Een verantwoordelijke partij is een actor die verantwoordelijk is voor het object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_actor">Actor</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_versie">
<h6>versie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#versie</td>
</tr>
<tr>
<th>Naam</th>
<td>versie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Versieaanduiding van een informatieobject.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/versie">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/versie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tr>
<th>Lengte</th>
<td>1..50</td>
</tr>
<tr>
<th>Patroon</th>
<td>Waarde van attribuut versie mag maximaal 50 karakters bevatten.</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een object zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_begin_geldigheid">
<h6>beginGeldigheid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#beginGeldigheid</td>
</tr>
<tr>
<th>Naam</th>
<td>beginGeldigheid</td>
</tr>
<tr>
<th>Alias</th>
<td>begin geldigheid</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Start van de periode waarop deze versie van het informatieobject geldig is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/begin_geldigheid">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/begin_geldigheid</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_eind_geldigheid">
<h6>eindGeldigheid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#eindGeldigheid</td>
</tr>
<tr>
<th>Naam</th>
<td>eindGeldigheid</td>
</tr>
<tr>
<th>Alias</th>
<td>eind geldigheid</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eind van de periode waarop deze versie van het informatieobject geldig is. De periode is tot aan deze tijdsaanduiding. Wanneer deze waarde niet is ingevuld, is de versie nog geldig.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/eind_geldigheid">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/eind_geldigheid</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_tijdstip_registratie">
<h6>tijdstipRegistratie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#tijdstipRegistratie</td>
</tr>
<tr>
<th>Naam</th>
<td>tijdstipRegistratie</td>
</tr>
<tr>
<th>Alias</th>
<td>tijdstip registratie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Tijdsaanduiding van het moment waarop deze versie van het informatieobject is opgenomen in de registratie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/tijdstip_registratie">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/tijdstip_registratie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_eind_registratie">
<h6>eindRegistratie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#eindRegistratie</td>
</tr>
<tr>
<th>Naam</th>
<td>eindRegistratie</td>
</tr>
<tr>
<th>Alias</th>
<td>eind registratie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Definitie</th>
<td>Eind van de periode dat deze versie van het informatieobject actueel is in de registratie. De periode is tot aan deze tijdsaanduiding. Wanneer deze waarde niet is ingevuld, is de versie nog actueel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://definities.geostandaarden.nl/nen3610-2022/id/begrip/eind_registratie">http://definities.geostandaarden.nl/nen3610-2022/id/begrip/eind_registratie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_indicatie_object_geconstateerd">
<h6>indicatieObjectGeconstateerd</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieObjectGeconstateerd</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieObjectGeconstateerd</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie object geconstateerd</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een aanduiding waarmee kan worden aangegeven dat het object in de registratie is opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument voor deze opname.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondslagen Basis Registratie Adressen versie 4.0BAG</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_relatiesoort_primaire_bron">
<h6>primaireBron</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://www.w3.org/ns/prov#hadPrimarySource</td>
</tr>
<tr>
<th>Naam</th>
<td>primaireBron</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een primaire bron voor een object is een entiteit op basis waarvan de totstandkoming van het object direct gebaseerd is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>PROV</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_relatiesoort_verantwoordelijke_partij">
<h6>verantwoordelijkePartij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://www.w3.org/ns/prov#wasAttributedTo</td>
</tr>
<tr>
<th>Naam</th>
<td>verantwoordelijkePartij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een verantwoordelijke partij is een actor die verantwoordelijk is voor het object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn geldigheid</th>
<td>Nee</td>
</tr>
<tr>
<th>heeft tijdlijn registratie</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Authentiek</th>
<td>Overig</td>
</tr>
<tr>
<th>Indicatie afleidbaar</th>
<td>Nee</td>
</tr>
<tr>
<th>Mogelijk geen waarde</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>






### Enumeraties

#### StatusRegistratie {#informatiemodel_imibro_logisch_domein_registratiegegevens_enumeratie_status_registratie}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusRegistratie</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusRegistratie</td>
</tr>
<tr>
<th>Alias</th>
<td>Status registratie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Definitie</th>
<td>De status van de registratie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IBRO-LM</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Objectregistraties met status &#39;Afgevoerd&#39; zijn alleen vindbaar via de tijdlijn registratie.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-09</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Actief</td>
<td>
Indicatie dat de objectregistratie actief is in de registratie.</td>
<tr>
<td>
Afgevoerd</td>
<td>
Indicatie dat het informatieobject uit de registratie is afgevoerd.</td>
</tbody>
</table>


</section>
