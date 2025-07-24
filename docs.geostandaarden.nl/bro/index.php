<!DOCTYPE html>

<?php if (isset($_GET['browse']) && $_GET['browse']==true) { ?>
<ul>
<?php $files= scandir('.'); ?>
<?php foreach ($files as $file) {	?>

<li><a href="<?php echo $file;?>"><?php echo $file; ?></a></li>


<?php } ?>
</ul>
<?php exit;}  ?>


<?php 

$config = array('Domein Bodem- en grondonderzoek' => array('bhr-g' => 'Booronderzoek',
														   'BHR-GT' => 'Booronderzoek: Geotechnische boormonsterbeschrijving en boormonsteranalyse',
														   'bhr-p' => 'Bodemkundig Booronderzoek',
														   'CPT' => 'Geotechnisch sondeeronderzoek',
														   'sfr' => 'Wandonderzoek - bodemkunde',														   
														   ),
				'Domein Grondwatergebruik' => array( 'guf' => 'Grondwatergebruiksysteem',
													 'gpd' => 'Grondwaterproductiedossier',
													 
													),
				'Domein Grondwatermonitoring' => array('FRD' => 'Formatieweerstand onderzoek',
													   'gmn' => 'Grondwatermonitoringnet',
													   'gmw' => 'Grondwatermonitoringput',
													   'gar' => 'Grondwatersamenstellingsonderzoek',
													   'gld' => 'Grondwaterstandonderzoek',
													   
													   ),
				'Domein Mijnbouwwet' => array('EPC' => 'Mijnbouwconstructie',
											  'EPL' => 'Mijnbouwwetvergunning',
											  ),
				'Modellen' => array(
								'SGM' => 'Bodemkaart',
								'DGM' => 'Digitaal Geologisch Model', 
								'GMM' => 'Geomorfologische kaart',
								'GTM' => 'GeoTOP',
								'wdm' => 'Model Grondwaterspiegeldiepte',
								'HGM' => 'REGIS II',				
								
							 ),
				'Milieukwaliteit' => array(
								'sad' => 'Milieuhygiënisch bodemonderzoek',			
								'sld' => 'Overheidsbesluit bodemverontreiniging',	
								
							 ),			 
				);

?>
<html lang="nl">
<head>
   <meta content="text/html; charset=utf-8" http-equiv="content-type">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <title>Geonovum specificaties</title>
   <link rel='shortcut icon' type='image/x-icon' href='https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico'/>
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
		width: 36rem;
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
      <h1>Basisregistratie Ondergrond (BRO): standaarden en technische documentatie</h1>
      <p>Op <a href="https://docs.geostandaarden.nl/bro">https://docs.geostandaarden.nl/bro</a> publiceert Geonovum de standaarden en technische documenten voor de Basisregistratie Ondergrond (BRO).</p>
      <p class="warning">Deze pagina is slechts een inhoudsopgave van documentatie die wij beheren. Ga naar de <a href="https://www.bro-productomgeving.nl/bpo/latest/">BRO Productomgeving</a> voor toelichting op de documentatie.</p>
      <p>Onderstaande documenten zijn op dit moment beschikbaar:</p>
     
	  

<?php 

foreach ($config as $domein => $registratieobjecten) { 	
	
	echo '<div class="pubDomain">';	
	
	echo '<h2><a href="bro">' . $domein . '</a></h2>';
	
	if (count($registratieobjecten) == 0) {
		echo '<i>Geen publicaties</i>';
	}
	foreach ($registratieobjecten as $mnemonic=>$naam) {
		echo '<h3><a href="./' . $mnemonic . '">'.$naam . ' ('.strtoupper($mnemonic) . ')</a></h3>';
	}
	echo '</div>';
}
	
	/* echo '<ul class="docs">';
	foreach ($registratieobjecten as $mnemonic=>$naam) {
		echo ' <li>';
		echo '  <span class="final">';
		echo '   <a href="./' . strtolower($mnemonic) . '">'.$naam . ' ('.$mnemonic . ')</a>';
		echo '  </span>';
		echo ' </li>';
	}
	echo '</ul>'; 
}*/
?>			 
   
   </div>
</body>
