$(function() {
	$(".fancybox").fancybox({
        openEffect  : 'elastic'
     });
	$("#search-item").submit(function(event) {
		event.preventDefault();
		var searchItem = $("#query").val();
		getRequest(searchItem);
	});
	function getRequest(searchItem)
	{
		var params = {
			part: 'snippet',
			key: 'AIzaSyC2SZAGEzADokf5uyjZvYTsVv9OFPEoxeM',
			q: searchItem
		}
		url = "https://www.googleapis.com/youtube/v3/search";
		$.getJSON(url, params, function(data) {
			console.log(data.items);
			showResults(data.items);
		});
	}
	function showResults(items)
	{
		$("#search-results").append(function() {
			$.each(items, function(i, val) {
				$("#search-results").append("<div><a class='fancybox' data-fancybox-type='iframe' href='//youtube.com/embed/" + 
					val.id.videoId + "' data-video-id='" + val.id.videoId + "'><img src='" +
					val.snippet.thumbnails.default.url + "' class='thumbnails' width='"+
					val.snippet.thumbnails.default.width +"' height='" +
					val.snippet.thumbnails.default.height + "' title='" +
					val.snippet.title + "'></a><br><a href='//youtube.com/channel/" + 
					val.snippet.channelId + "' target='_blank'>From Channel</a></div>");
			});
		});
	}
});