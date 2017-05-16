//JS and jQuery for RQ
$('document').ready(function(){
	

});


$('#search-form').submit(function(e){
	e.preventDefault();
	var searchText = $('#search-input').val();
	// alert(searchText);
	retrieveSearchResults(searchText);
});



var retrieveSearchResults = function(searchText){
	var rootURL = 'https://en.wikipedia.org/w/api.php?';
	var format = 'format=json';
	var action = 'action=query';
	var list = "list=search";
	var search = 'srsearch=' + searchText;
	var limit = 'limit=10';

	var requestURL = rootURL + action + '&' + format + '&' + list + '&' + search + '&' + limit + '&callback=?';

	$.getJSON(requestURL, function(json){
		var myStr = JSON.stringify(json);
		var resultsObj = JSON.parse(myStr);
		displaySearchResults(resultsObj);
	});
}

var displaySearchResults = function(jsonObj){
	$('#results-row').html('');
	console.log('jsonObj');
	resultsLength = jsonObj.query.search.length;
	$('#top-ten').removeClass('hidden');
	for(var i = 0; i < resultsLength; i++){
		var snippet = jsonObj.query.search[i]['snippet'];
		var title = jsonObj.query.search[i]['title'];
		var src = 'https://www.wikipedia.org';

		$('#results-row').append('<div class="results-div"><div class="results-title"><h2>' + title + '</h2></div><div class="results-snippet">' + snippet + '</div><div class="results-link"><a href="'+ src + '" target="_blank">Full article</a>');
	}
}