<?php

function oauthCreateSig($oauth, $base, $secrets) {
	$key = rawurlencode($secrets['consumer_secret']) . '&' . rawurlencode($secrets['token_secret']);
	$oauth['oauth_signature'] = base64_encode(hash_hmac('sha1', $base, $key, true));
	return $oauth;
}