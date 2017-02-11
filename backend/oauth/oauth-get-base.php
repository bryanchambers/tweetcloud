<?php

function oauthGetBase($oauth, $method, $url) {
	ksort($oauth);

	foreach($oauth as $key=>$value) {
		if($key != 'oauth_signature') {
			$params .= rawurlencode($key);
			$params .= '=';
			$params .= rawurlencode($value);
			$params .= '&';
		}
	}
	$params = substr($params, 0, -1);

	$base = $method . '&' . rawurlencode($url) . '&' . rawurlencode($params);
	return $base;
}