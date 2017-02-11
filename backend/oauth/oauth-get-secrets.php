<?php 

function oauthGetSecrets() {
	$secrets = file_get_contents('oauth-secrets.json', FILE_USE_INCLUDE_PATH);
	return json_decode($secrets, true);
}