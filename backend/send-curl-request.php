<?php

function sendCurlRequest($url, $header) {
	//Initialize
	$curl = curl_init();
	
	//Set url and authorization header
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	
	//Execute
	$response = curl_exec($curl);
	
	//Optional formatted response data for debugging
	$response_pretty = json_decode($response);
	$response_pretty = json_encode($response_pretty, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	$response_pretty = "<pre>$response_pretty</pre>";
	
	//Send output
	echo $response;
}