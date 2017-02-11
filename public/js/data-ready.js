function dataReady(type, query, data, id_prev, count_all, tweets_all) {
	if(type == 'search') {
		var data   = parseTweets(data);
		var tweets = data.tweets;
		var id     = data.id_min;
		var count  = data.count;
		count_all += count;
		var max_tweets = 1000;

		var progress = Math.round((count_all / max_tweets) * 100, 0);
		if(progress > 100) { progress = 100; }
		$('#progress').css('width', progress + '%');

		if(id_prev == 0) { id_prev = id + 1000; }

		if(id < id_prev && count_all < max_tweets) { //New tweets
			tweets_all += tweets;
			getData('search', query, id, count_all, tweets_all);
		}
		else { //Done
			getData('status', query, id, count_all, tweets_all)
		}
	}
	else if(type == 'status') { //Rate limit status data
		$('#loading').hide();

		var status    = data.resources.search['/search/tweets'];
		console.log('Remaining API Calls: ' + status.remaining);

		$('#status').text('Processing...');
		var wordcount = wordCount(tweets_all, 250);

		initCloud(wordcount);
	}
}
