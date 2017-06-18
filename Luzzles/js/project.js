$(document).ready(function (){

// function goBack() {
//     window.history.back();


 
function populateBoard(){
	var currentWord = words[position];
	var randomPosition = Math.floor((Math.random() * 6) + 1);
	console.log(randomPosition);
	
	$(".word").html(currentWord.english);
	
	$(".answer-image").addClass("wrong");
	$('.img-1').attr('src', getRandomImage());
	$('.img-2').attr('src', getRandomImage());
	$('.img-3').attr('src', getRandomImage());
	$('.img-4').attr('src', getRandomImage());
	$('.img-5').attr('src', getRandomImage());
	$('.img-6').attr('src', getRandomImage());
	$('.img-' + randomPosition).attr('src', currentWord.image).addClass("answer").removeClass("wrong");
}

$(".game1").on("click", ".answer", function(){
	var answer = document.getElementById("../images/Pikachu/hiPikachu.png");
	alert("yay! you win");
	position += 1;
	populateBoard();
});

$(".game1").on("click", ".wrong", function(){
	var wrong = document.getElementById("../images/Pikachu/sadPikachu.png");
	alert("boo! you lose");
	position += 1;
});


function getRandomImage() {
  var randomPosition = Math.floor((Math.random() * 29) + 1);

  var imgUrl = "../images/Game/random/" + randomPosition + ".png";

  return imgUrl

}

console.log(getRandomImage());

numRight = 0;
numWrong = 0;
	 
var position = 0;

if ($('body.animals-game').length) {
var words = [
	{
		english: 'A Bird',
		french: 'Un Oiseau',
		image: '../images/Game/animals/bird.png'
	}, 
	{
		english: 'Bull',
		french: 'Taureau',
		image: '../images/Game/animals/bull.png'
	}, 
	{
		english: 'Cat',
		french: 'Chat',
		image: '../images/Game/animals/cat.png'
	}, 
	{
		english: 'Cow',
		french: 'Une Vache',
		image: '../images/Game/animals/cow.png'
	}, 
	{
		english: 'Dog',
		french: 'Un Chien',
		image: '../images/Game/animals/dog.png'
	}, 
	{
		english: 'Elephant',
		french: 'Eléphant',
		image: '../images/Game/animals/elephant.png'
	}, 
	{
		english: 'A Fish',
		french: 'Un Poisson',
		image: '../images/Game/animals/fish.png'
	}, 
	{
		english: 'Frog',
		french: 'Une Grenouille',
		image: '../images/Game/animals/frog.png'
	}, 
	{
		english: 'Giraffe',
		french: 'Girafe',
		image: '../images/Game/animals/giraffe.png'
	}, 
	{
		english: 'Monkey',
		french: 'Singe',
		image: '../images/Game/animals/monkey.png'
	}, 
	{
		english: 'Mouse',
		french: 'Une Souris',
		image: '../images/Game/animals/mouse.png'
	}, 
	{
		english: 'A Panda',
		french: 'Panda',
		image: '../images/Game/animals/panda.png'
	}, 
	{
		english: 'Penguin',
		french: 'Un Manchot',
		image: '../images/Game/animals/penguin.png'
	}, 
	{
		english: 'Pig',
		french: 'Un Cochon',
		image: '../images/Game/animals/pig.png'
	}, 
	{
		english: 'A Rabbit',
		french: 'Un Lapin',
		image: '../images/Game/animals/rabbit.png'
	}, 
	{
		english: 'A Rubber Duck',
		french: 'Un Canard en Caoutchouc',
		image: '../images/Game/animals/rubber-duck.png'
	}, 
	{
		english: 'Snake',
		french: 'Un Serpent',
		image: '../images/Game/animals/snake.png'
	}
]


} else if ($('body.colors-game').length) {
var words = [
	{
		english: 'A Blue Wall',
		french: 'Un Mur Bleu',
		image: '../images/Game/colors/bluewall.png'
	}, 
	{
		english: 'A Brown Bag',
		french: 'Un Sac Brun',
		image: '../images/Game/colors/brownbag.png'
	}, 
	{
		english: 'Green Yarn',
		french: 'Fil Vert',
		image: '../images/Game/colors/greenyarn.png'
	}, 
	{
		english: 'Orange Flower',
		french: "Une Fleur D'Oranger",
		image: '../images/Game/colors/orangeglower.png'
	}, 
	{
		english: 'A Pink Balloon',
		french: 'Un Ballon Rose',
		image: '../images/Game/colors/pinkballoon.png'
	}, 
	{
		english: 'A Red Paintbrush',
		french: 'Un Pinceau Rouge',
		image: '../images/Game/colors/red.png'
	}, 
	{
		english: 'A Yellow Star',
		french: 'Une Etoile Jaune',
		image: '../images/Game/colors/yellowstar.png'
	} 
]


} else if ($('body.food-game').length) {
var words = [
{
		english: 'Apple',
		french: 'Une Pomme',
		image: '../images/Game/fruits/apple.png'
	}, 
	{
		english: 'Banana',
		french: 'Une Banane',
		image: '../images/Game/fruits/banana.png'
	}, 
	{
		english: 'Cherries',
		french: 'Des Cerises',
		image: '../images/Game/fruits/cherries.png'
	}, 
	{
		english: 'Coconut',
		french: 'Noix de Coco',
		image: '../images/Game/fruits/coconut.png'
	}, 
	{
		english: 'Cantaloupe',
		french: 'Un Cantaloup',
		image: '../images/Game/fruits/melon.png'
	}, 
	{
		english: 'Orange',
		french: 'Un Orange',
		image: '../images/Game/fruits/orange.png'
	}, 
	{
		english: 'Pineapple',
		french: 'Un Ananas',
		image: '../images/Game/fruits/pineapple.png'
	}, 
	{
		english: 'Pomegranate',
		french: 'Une Grenade',
		image: '../images/Game/fruits/pomegranate.png'
	}, 
	{
		english: 'Grapes',
		french: 'Des Raisins',
		image: '../images/Game/fruits/raisin.png'
	}, 
	{
		english: 'Strawberry',
		french: 'Une Fraise',
		image: '../images/Game/fruits/strawberry.png'
	}, 
	{
		english: 'Watermelon Slice',
		french: 'Une Tranche de Pastèque',
		image: '../images/Game/fruits/watermelon.png'
	}, 
	{
		english: 'Asparagus',
		french: 'Asperges',
		image: '../images/Game/vegetable/asparagus.png'
	}, 
	{
		english: 'Bell Pepper',
		french: 'Un Poivron',
		image: '../images/Game/vegetable/bell-pepper.png'
	}, 
	{
		english: 'Broccoli',
		french: 'Brocoli',
		image: '../images/Game/vegetable/broccoli.png'
	},
	{
		english: 'Carrot',
		french: 'Carotte',
		image: '../images/Game/vegetable/carrot.png'
	}, 
	{
		english: 'Eggplant',
		french: 'Une Aubergine',
		image: '../images/Game/vegetable/eggplant.png'
	},
	{
		english: 'Garlic',
		french: "De L'Ail",
		image: '../images/Game/vegetable/garlic.png'
	}, 
	{
		english: 'Green Beans',
		french: 'Des Haricots Verts',
		image: '../images/Game/vegetable/green-beans.png'
	}, 
	{
		english: 'Lemon',
		french: 'Citron',
		image: '../images/Game/vegetable/lemon.png'
	}, 
	{
		english: 'Lettuce',
		french: 'Salade',
		image: '../images/Game/vegetable/lettuce.png'
	}, 
	{
		english: 'Mushroom',
		french: 'Champignon',
		image: '../images/Game/vegetable/mushroom.png'
	}, 
	{
		english: 'Onion',
		french: 'Un Oignon',
		image: '../images/Game/vegetable/onion.png'
	}, 
	{
		english: 'Radish',
		french: 'Un Radis',
		image: '../images/Game/vegetable/radish.png'
	}, 
	{
		english: 'Tomato',
		french: 'Une Tomate',
		image: '../images/Game/vegetable/tomato.png'
	}
]

} else if ($('body.travel-game').length) {
var words = [
	{
		english: 'The Beach',
		french: 'La Plage',
		image: '../images/Game/travel/transparent/beach.png'
	}, 
	{
		english: 'Spending the day at beach',
		french: 'Une Journee a la Plage',
		image: '../images/Game/travel/transparent/beachday.png'
	}, 
	{
		english: 'Biking',
		french: 'Faire du Bicyclette',
		image: '../images/Game/travel/transparent/bike.png'
	},  
	{
		english: 'Camera',
		french: 'Appareil de Photographie',
		image: '../images/Game/travel/transparent/camera.png'
	},
	{
		english: 'A Backpacker',
		french: 'Un Randonneur',
		image: '../images/Game/travel/transparent/hiker.png'
	},  
	{
		english: 'Luggage',
		french: 'Valise',
		image: '../images/Game/travel/transparent/luggage.png'
	}, 
	{
		english: 'A Map',
		french: 'Une Carte de Voyage',
		image: '../images/Game/travel/transparent/map.png'
	}, 
	{
		english: 'Money',
		french: "De L'Argent",
		image: '../images/Game/travel/transparent/money.png'
	}, 
	{
		english: 'Palm tree',
		french: 'Un Palmier',
		image: '../images/Game/travel/transparent/palmtree.png'
	}, 
	{
		english: 'Passport',
		french: 'Passeport',
		image: '../images/Game/travel/transparent/passport.png'
	}, 
	{
		english: 'Airplane',
		french: 'Un Avion',
		image: '../images/Game/travel/transparent/plane.png'
	},
	{
		english: 'Boat',
		french: 'Bateau',
		image: '../images/Game/travel/transparent/sailing.png'
	}
  ]}

  
populateBoard();	


});

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("pikachu-slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}