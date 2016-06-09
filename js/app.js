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
				$("#search-results").append(
					"<div><a class='fancybox' href='#0' data-video-id='" +
				 	val.id.videoId + "'><img src='" + val.snippet.thumbnails.default.url + "' class='thumbnails' width='"+
					val.snippet.thumbnails.default.width +"' height='" +
					val.snippet.thumbnails.default.height + "' title='" +
					val.snippet.title + "'></a><br><a href='//youtube.com/channel/" + 
					val.snippet.channelId + "' target='_blank'>" + 
					val.snippet.title + "</a></div>");

					$(".fancybox").fancybox({
						'padding'		: 0,
						'autoScale'		: false,
						'transitionIn'	: 'none',
						'transitionOut'	: 'none',
						'content':'<iframe width="854" height="480" src="https://www.youtube.com/embed/' + 
						$(".fancybox").attr('data-video-id') + '" frameborder="0" allowfullscreen></iframe>',
						//'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
						'type'			: 'iframe'
				});
			});
		});
		var num = 100/items.length;
		$("#search-results div").width(num + "%");
	}
});
