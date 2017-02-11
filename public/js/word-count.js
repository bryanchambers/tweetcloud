function wordCount(tweets, cutoff) {
	var words = tweets.split(' ');
	var words_unique = [];
	var output = [];
	var word;
	var count;
	var entry;

	//Get list of unique words
	for(var i = 0; i < words.length; i++) {
		word = words[i];
		if(words_unique.indexOf(word) < 0) {
			//New word
			words_unique.push(word);
		}
	}

	//Get word count
	for(var i = 0; i < words_unique.length; i++) {
		word = words_unique[i];
		
		//Count word occurances
		count = 0;
		for(var j = 0; j < words.length; j++) {
			if(words[j] == word) { count++; }
		}
		entry = { word: word, count: count };

		output.push(entry);
	}

	//Sort by word count
	output.sort(function(a, b) {
		return b.count - a.count;
	});

	//Cutoff list
	output = output.slice(0, cutoff);

	return output.reverse();
}