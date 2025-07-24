<?php

if (isset ($_GET['url'])){
	
	$url = $_GET['url'];			
	if (strpos($url, 'https://docs.geostandaarden.nl/bro/gen/') > -1) {
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
	echo file_get_contents ($url);
	exit;	
	} 	
}
?>