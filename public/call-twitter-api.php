<?php

//Include OAuth files
$path = '../backend/';
//$path = '/home/bgc_root/tweetcloud/';
include $path . 'oauth/oauth-create-sig.php';
include $path . 'oauth/oauth-get-base.php';
include $path . 'oauth/oauth-get-header.php';
include $path . 'oauth/oauth-get-secrets.php';
include $path . 'oauth/oauth-init.php';



//Include other files
include $path . 'build-url.php';
include $path . 'send-curl-request.php';



//Get request parameters
$type   = $_GET['type'];

$params = array(
	'q'      => $_GET['query'],
	'count'  => $_GET['qty'],
	'max_id' => $_GET['id']
);
if($params['max_id'] == 0) { unset($params['max_id']); }



//URLs
$base_url_list = array(
	'search' => 'https://api.twitter.com/1.1/search/tweets.json',
	'status' => 'https://api.twitter.com/1.1/application/rate_limit_status.json'
);

$base_url = $base_url_list[$type];
$full_url = buildURL($type, $base_url, $params);



//Setup authorization header using OAuth protocol
$secrets = oauthGetSecrets();
$oauth   = oauthInit($type, $secrets, $params);
$base    = oauthGetBase($oauth, 'GET', $base_url);
$oauth   = oauthCreateSig($oauth, $base, $secrets);
$header  = array(oauthGetHeader($oauth));



//Make call to Twitter API
sendCurlRequest($full_url, $header); 


