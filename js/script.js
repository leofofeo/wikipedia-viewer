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
		$('#results-div-1').html(myStr);
	});
}