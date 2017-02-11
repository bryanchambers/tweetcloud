function convertWordCount(wordcount) {
	var entry;
	var output = [];

	for(i = 0; i < wordcount.length; i++) {
		entry = [wordcount[i].word, wordcount[i].count * 10];
		output.push(entry);
	}

	return output;
}