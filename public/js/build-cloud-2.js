function buildCloud2(wordcount) {
	var table = $('#cloud');
	var word;
	var count;
	var row;
	var cell_word;
	var cell_count;

	$('#status').text('Creating Cloud...');

	var canvas = document.getElementById('cloud');
	canvas.width = 2000;
	canvas.height = 1000;
	canvas.style.width = '1000px';
	canvas.style.height = '500px';

	draw = canvas.getContext('2d');


	
	for(var i = 0; i < wordcount.length; i++) {
		//Get data
		word  = wordcount[i].word;
		fontsize = wordcount[i].fontsize;

		var hue = Math.round(Math.random()*360, 0);
		var lightness = 0.5 - ((i / wordcount.length)*0.5) + 0.5;
		var color = HSLtoRGB(hue, 0.8, lightness);
		draw.fillStyle = RGBtoHEX(color);

		draw.font = fontsize + 'px Arial';
		var x = Math.random()*1800 + 50;
		var y = Math.random()*900 + 50;
		draw.fillText(word, x, y);
	}

	$('#status').text('Done!');
}