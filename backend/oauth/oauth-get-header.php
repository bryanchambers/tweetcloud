<?php

function oauthGetHeader($oauth) {
	foreach($oauth as $key=>$value) {
		if($key != "q") {
			$header .= rawurlencode($key);
			$header .= '="';
			$header .= rawurlencode($value);
			$header .= '",';
		}
	}
	
	$header = substr($header, 0, -1);
	$header = 'OAuth ' . $header;

	return 'Authorization: ' . $header;
}