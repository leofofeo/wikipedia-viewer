//JS and jQuery for RQ
$('document').ready(function(){
	$('#j-results').hide();

});


$('#j-search-form').submit(function(e){
	e.preventDefault();
	var searchText = $('#j-search-input').val();
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
	$('#j-results-row').html('');
	resultsLength = jsonObj.query.search.length;
	$('#j-results').show();
	for(var i = 0; i < resultsLength; i++){
		var snippet = jsonObj.query.search[i]['snippet'];
		var title = jsonObj.query.search[i]['title'];
		var urlTitle = title.replace(' ', '_');
		var src = 'https://www.wikipedia.org/wiki/' + urlTitle;

		$('#j-results-row').append('<div class="results-div"><h3>' + title + '</h3><div class="results-snippet">' + snippet + '</div><div class="results-link"><a href="'+ src + '" target="_blank">Full article</a></div></div><hr class="sep">');
	}
}