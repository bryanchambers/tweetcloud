function initCloud(wordcount) {
	$.get('blacklist.html', function(data) {
		var blacklist = data.split(',');
		removeWords(wordcount, blacklist);
	});
}