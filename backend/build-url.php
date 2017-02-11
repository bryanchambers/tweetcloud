<?php 

function buildURL($type, $base_url, $params) {
	$url  = $base_url;
	
	if($type == 'search') {
		$url .= '?';
		foreach($params as $key=>$value) {
			$url .= rawurlencode($key);
			$url .= '=';
			$url .= rawurlencode($value);
			$url .= '&';
		}
		$url = substr($url, 0, -1);
	}
	return $url;
}
