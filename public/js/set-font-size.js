function setFontSize(wordcount) {
	var max_allowed = 200;
	var min_allowed = 30;

	//Get max count
	var max = 0;
	var min = 10000;
	for(var i = 0; i < wordcount.length; i++) {
		if(wordcount[i].count > max) {
			max = wordcount[i].count;
		}
		if(wordcount[i].count < min) {
			min = wordcount[i].count;
		}
	}

	var scale = min_allowed / Math.sqrt(min * 10);

	//Scale count to fontsize
	for(var i = 0; i < wordcount.length; i++) {
		wordcount[i].fontsize = Math.sqrt(wordcount[i].count * 10) * scale;
	}

	buildCloud2(wordcount);
}