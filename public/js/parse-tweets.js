function parseTweets(response) {
	var data = response.statuses;
	var tweet;
	var tweets;
	var id;
	var count = data.length;
	
	for(var i = 0; i < data.length; i++) {
		tweet   = data[i].text;
		tweets += tweet;
		id      = data[i].id;

		if(i == 0) { id_min = id; }
		else if(id < id_min) { id_min = id; }
	}
	
	return { tweets: tweets, id_min: id_min, count: count };
}