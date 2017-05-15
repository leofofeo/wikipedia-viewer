//JS and jQuery for RQ
$('document').ready(function(){
	

});


$('#search-form').submit(function(){
	var searchText = $('#search-input').val();
	// alert(searchText);
	retrieveSearchResults(searchText);
});



var retrieveSearchResults = function(searchText){
	alert('from retrieveSearchResults');
	var rootURL = 'https://en.wikipedia.org/w/api.php?';
	var format = 'format=json';
	var action = 'action=opensearch';
	var search = 'search=' + searchText;
	var limit = 'limit=10';

	var requestURL = rootURL + action + '&' + format + '&' + search + '&' + limit;
	alert(requestURL);

	$.getJSON(requestURL, function(json){
		var myStr = json;
		alert(myStr);
	});
}