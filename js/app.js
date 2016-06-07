$(function() {
	$("#search-item").submit(function(event) {
		event.preventDefault();
		var searchItem = $("#query").val();
		getRequest(searchItem);
	});
	function getRequest(searchItem)
	{
		var params = {
			part: 'snippet',
			key: 'AIzaSyBj-6yexvISyWGkdaezwvuABjfq3z_tl-U',
			q: searchItem
		}
		url = 'htps://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data) {
		var movie = data.Search;
		showResults(movie);
		});
	}
	function showResults(movie)
	{
		$.each(movie, function(i, val) {
			$("#search-item").append("<p>" +
				val.Title + "</p>");
		});
	}
});