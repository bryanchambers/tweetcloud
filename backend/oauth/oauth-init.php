<?php 

function oauthInit($type, $secrets, $params) {
	$oauth = [
		'oauth_consumer_key'     => $secrets['consumer_key'],
		'oauth_token'            => $secrets['token'],
		'oauth_signature_method' => 'HMAC-SHA1',
		'oauth_timestamp'        => time(),
		'oauth_nonce'            => time(),
		'oauth_version'          => '1.0',
		'oauth_signature'        => 'TEMP'
	];

	if($type == 'search') {
		foreach($params as $key=>$value) {
			$oauth[$key] = $value;
		}
	}

	return $oauth;
}