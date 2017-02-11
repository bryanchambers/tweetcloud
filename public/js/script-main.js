$(document).ready(function() {
	$('#button').click(function() {
		event.preventDefault();
		initSearch();
	});

	$('#query-input').keypress(function(event) {
		if(event.charCode == 13) { //User pressed enter
			event.preventDefault();
			initSearch();
		}
	});
});

function initSearch() {
	$('#cloud').empty();
	$('#progress').css('width', '0');
	$('#status').text('Searching...');

	var query = $('#query-input').val();
	getData('search', query, 0, 0, '');
	$('#loading').show();
}






