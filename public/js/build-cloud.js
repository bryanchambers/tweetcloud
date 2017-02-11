function buildCloud(wordcount) {
	var table = $('#cloud');
	var word;
	var count;
	var row;
	var cell_word;
	var cell_count;

	$('#status').text('Creating Cloud...');

	for(var i = 0; i < wordcount.length; i++) {
		//Get data
		word  = wordcount[i].word;
		fontsize = wordcount[i].fontsize;

		$('#cloud').append("<div class='grid-item' style='font-size: " + fontsize + "px'>" + word + "</div>");
	}

	$('#status').text('Done!');
}