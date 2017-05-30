$(document).ready(function () {

	var lights = 'on';

// 	$('#lightswitch').click(function(){

// 		if (lights == 'on') {
// 				// console.log('on');
// 				$('#lightswitch').css('background-color','white');
// 				$('#lightswitch').css('color','black');
// 				$('body').css('background-color', 'black');

// 				lights = 'off';
// 			} else {
// 				$('#lightswitch').css('background-color','black');
// 				$('#lightswitch').css('color','white');
// 				$('body').css('background-color', 'white');

// 				lights = 'on';
// 			}
// 		})
// })


// REFACTORED using JQuery class manipulation - add/remove class

// 	$('#lightswitch').click(function(){

// 		if (lights == 'on') {
// 			$('#lightswitch').addClass('switch-off');
// 			$('#lightswitch').removeClass('switch-on');
// 			$('body').addClass('lights-off');
// 			lights = 'off';
// 			} else {
// 			$('#lightswitch').addClass('switch-on');
// 			$('#lightswitch').removeClass('switch-off');
// 			$('body').removeClass('lights-off');
// 			lights = 'on';
// 			}
// 		})
// })	


// REFACTORED using JQuery class manipulation - toggle 

	$('#lightswitch').click(function(){
		$('#lightswitch').toggleClass('switch-on switch-off').slideDown(500).slideUp(500).slideDown(500);
		$('body').toggleClass('lights-off');
	})
})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;