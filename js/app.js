$(function() {
	$(".iframe").fancybox();
	$("#tip4").fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'		: 854,
			'height'		: 480,
			'content':'<iframe width="854" height="480" src="https://www.youtube.com/embed/' + $("#tip4").attr('data-video-id') + '" frameborder="0" allowfullscreen></iframe>',
			//'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'iframe',
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
		//$("#search-results").append('<a class="iframe" href="http://www.youtube.com/embed/L9szn1QQfas?autoplay=1">Youtube (iframe)</a>');
		/*
		$.each(items, function(i, val) {
			$("#search-results").append("<a class='iframe' href='//youtube.com/embed/" +
				val.id.videoId + "'><img src='" +
				val.snippet.thumbnails.default.url + "' class='thumbnails' width='"+
				val.snippet.thumbnails.default.width +"' height='" +
				val.snippet.thumbnails.default.height + "' title='" +
				val.snippet.title + "'></a>");
		});*/
		$(".iframe").fancybox();
	}
});
