function removeWords(wordcount, blacklist) {
	var test;
	var remove;
	var remove_pfx; //Prefix
	var remove_sfx; //Suffix

	for(var i = 0; i < blacklist.length; i++) {
		remove     = blacklist[i].replace(/(\r\n|\n|\r)/gm,'');
		remove_pfx = remove[0];
		remove_sfx = remove[remove.length - 1];

		for(var j = 0; j < wordcount.length; j++) {
			if(remove_pfx != '*' && remove_sfx == '*') {
				//Remove words starting with
				test = wordcount[j].word.substring(0, remove.length).toLowerCase();
			}
			else if(remove_pfx == '*' && remove_sfx != '*') {
				//Remove words ending with
				test = wordcount[j].word.substring(wordcount[j].length - remove.length, remove.length).toLowerCase();
			}
			else if(remove_pfx == '*' && remove_sfx == '*') {
				//Remove words containing
				if(wordcount[j].word.toLowerCase().includes(remove)) { test = wordcount[j]; }
				else { test = ''; }
			}
			else {
				//Remove words matching
				test = wordcount[j].word.toLowerCase();
			}

			if(test == remove) { wordcount.splice(j, 1); }
		}
	}

	setFontSize(wordcount);
}