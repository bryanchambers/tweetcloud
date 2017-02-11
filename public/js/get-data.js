//Setup and then send ajax request to php backend for Twitter API call

function getData(type, query, id, count_all, tweets_all) {
	var async     = true;
	var base_url  = 'call-twitter-api.php';
	var full_url = base_url + '?type=' + type + '&query=' + encodeURIComponent(query) + '&qty=100' + '&id=' + id;
	
	sendAjaxRequest(type, 'GET', query, full_url, async, id, count_all, tweets_all);
}