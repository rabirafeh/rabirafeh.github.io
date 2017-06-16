$('.meme-form').submit(function(event){

	event.preventDefault();

	$('.gif-list').empty();

	var memeInputVal = $('.meme-input').val();

	console.log(memeInputVal);

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + memeInputVal + "&api_key=dc6zaTOxFJmzC&limit=5");
	xhr.done(function(data) { 

		data.data.forEach(function(meme){

			var video = meme.images.looping.mp4;
			$('.gif-list').append("<li><video src='" + video + "' type='video/mp4' autoplay looping></video></li>")
			})
	});
})


// $('.meme-form').submit(function(event){

// 	event.preventDefault();

// 	var memeInputVal = $('.meme-input').val();

// 	console.log(memeInputVal);

// 	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
// xhr.done(function(data) { 

// 	// var videoOne = data.data[0].images.looping.mp4;

// 	// console.log(videoOne);

// 	data.data.forEach(function(meme){
// 		// console.log(meme.images.looping.mp4);
// 		var video = meme.images.looping.mp4;
// 		$('.gif-list').append("<li><video src='" + video + "' type='video/mp4' autoplay></video></li>")
// 		})
// 	});
// })
