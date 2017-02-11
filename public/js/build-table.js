function buildTable(wordcount) {
	var table = document.getElementById('table');
	var word;
	var count;
	var row;
	var cell_word;
	var cell_count;

	for(var i = 0; i < wordcount.length; i++) {
		//Get data
		word  = wordcount[i].word;
		count = wordcount[i].count;
		
		//Add table row
		row = table.insertRow();
		cell_word  = row.insertCell(0);
		cell_count = row.insertCell(1);

		//Populate data
		cell_word.innerHTML  = word;
		cell_count.innerHTML = count;
	}
}
