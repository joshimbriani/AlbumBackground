$(document).ready(function() {
	$.get('http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' + username + '&api_key=' + apiKeys.lastFM + '&format=json&limit=150', function(data) {
		var counter = 0;
		var dict = {};
		console.log(data);
		$.each(data.topalbums.album, function() {
			if (!(this.image[2]['#text'] === '') && counter <= 150) {
				if (!(this.image[2]['#text'] in dict)) {
					$('.musicbg').append('<img class="item" src="' + this.image[2]['#text'] + '" />');
					dict[this.image[2]['#text']] = this.image[2]['#text'];
				}
				counter++;
			}
		});
	});
})