$(document).ready(function () {

	$('#my-form').submit(function(event){
		event.preventDefault();

		console.log('form submitted');

		$('body').append('<p>' + $('#name-input').val() + '</p>')
	})
})
