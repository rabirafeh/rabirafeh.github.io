$(document).ready(function() {

	// var C = 'celcius' 

	$('.celcius').click(function(){
		var temperatureF = $('.temperature1').val();
		var temperatureC = (temperatureF * 9 / 5) + 32;
		$('.temperature-result1').html(temperatureC); 
	});

	$('.fahrenheit').click(function(){
		var temperatureC = $('.temperature2').val();
		var temperatureF = (temperatureC - 32) * 5 / 9;
		$('.temperature-result2').html(temperatureF); 
	});
// CAROLYN, IS THIS THE WAY TO DO CSS IN JQUERY?
	$('.temperature-result1').css({'background-color': 'white','color': 'black'});

	$('.temperature-result2').css({'background-color': 'white', 'color': 'black'});

// CAROLYN! WHAT AM I DOING WRONG WITH THE RESET BUTTON?
	$('.reset').click(function(){
	  	$('.temperature1').val('');
	  	$('.temperature-result1').html('');
	  	$('.temperature2').val('');
	  	$('.temperature-result2').html('');
	});

});

// toFixed(2) -- shorten down number to 2 decimal points