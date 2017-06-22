$(document).ready(function() {

  // function goBack() {
  //     window.history.back();

  var language;
  var category;

  $(".arabic").click(function(event) {
    event.preventDefault();
    localStorage.setItem('language', 'arabic');
      window.location = "gamepicker.html";
  });

  $(".english").click(function(event) {
    event.preventDefault();
    localStorage.setItem('language', 'english');
      window.location = "gamepicker.html";
  });

  $(".french").click(function(event) {
    console.log("french event click");
    event.preventDefault();
    localStorage.setItem('language', 'french');
      window.location = "gamepicker.html";
  });

  $("#animalsgame").click(function(event) {
    event.preventDefault();
    localStorage.getItem('category', 'animalsgame');
  });
  $("#colorsgame").click(function(event) {
    event.preventDefault();
    localStorage.getItem('category', 'colorsgame');
  });
  $("#foodgame").click(function(event) {
    event.preventDefault();
    localStorage.getItem('category', 'foodgame');
  });
  $("#travelgame").click(function(event) {
    event.preventDefault();
    localStorage.getItem('category', 'travelgame');
  });

  function populateBoard() {
    var currentWord = words[position];
    var randomPosition = Math.floor((Math.random() * 6) + 1);
    // console.log(randomPosition);

    language = localStorage.getItem('language');

    console.log(language);

    $(".word").html(currentWord[language]);

    $(".answer-image").addClass("wrong");
    $('.img-1').attr('src', getRandomImage());
    $('.img-2').attr('src', getRandomImage());
    $('.img-3').attr('src', getRandomImage());
    $('.img-4').attr('src', getRandomImage());
    $('.img-5').attr('src', getRandomImage());
    $('.img-6').attr('src', getRandomImage());
    $('.img-' + randomPosition).attr('src', currentWord.image).addClass("answer").removeClass("wrong");
  }

  $(".game1").on("click", ".answer", function() {
    var answer = document.getElementById("../images/Pikachu/hiPikachu.png");
    alert("YAY! YOU WIN!");
    position += 1;
    populateBoard();
  });

  $(".game1").on("click", ".wrong", function() {
    var wrong = document.getElementById("../images/Pikachu/sadPikachu.png");
    alert("BOO! YOU LOSE!");
    position += 1;
    populateBoard();
  });


  function getRandomImage() {
    var randomPosition = Math.floor((Math.random() * 29) + 1);

    var imgUrl = "../images/Game/random/" + randomPosition + ".png";

    return imgUrl

  }



  numRight = 0;
  numWrong = 0;

  var position = 0;

  if ($('body.animals-game').length) {
    var words = [{
        english: 'A Bird',
        french: 'Un Oiseau',
        arabic: "a'ssfour",
        image: '../images/Game/animals/bird.png'
      },
      {
        english: 'Bull',
        french: 'Taureau',
        arabic: "thur",
        image: '../images/Game/animals/bull.png'
      },
      {
        english: 'Cat',
        french: 'Chat',
        arabic: "bassyneh",
        image: '../images/Game/animals/cat.png'
      },
      {
        english: 'Cow',
        french: 'Une Vache',
        arabic: "baqara",
        image: '../images/Game/animals/cow.png'
      },
      {
        english: 'Dog',
        french: 'Un Chien',
        arabic: "kalb",
        image: '../images/Game/animals/dog.png'
      },
      {
        english: 'Elephant',
        french: 'Eléphant',
        arabic: "feel",
        image: '../images/Game/animals/elephant.png'
      },
      {
        english: 'A Fish',
        french: 'Un Poisson',
        arabic: "samaak",
        image: '../images/Game/animals/fish.png'
      },
      {
        english: 'Frog',
        french: 'Une Grenouille',
        arabic: "doufdaa'",
        image: '../images/Game/animals/frog.png'
      },
      {
        english: 'Giraffe',
        french: 'Girafe',
        arabic: "zarafa",
        image: '../images/Game/animals/giraffe.png'
      },
      {
        english: 'Monkey',
        french: 'Singe',
        arabic: "qerd",
        image: '../images/Game/animals/monkey.png'
      },
      {
        english: 'Mouse',
        french: 'Une Souris',
        arabic: "fara",
        image: '../images/Game/animals/mouse.png'
      },
      {
        english: 'A Panda',
        french: 'Panda',
        arabic: "banda",
        image: '../images/Game/animals/panda.png'
      },
      {
        english: 'Penguin',
        french: 'Un Manchot',
        arabic: "batreek",
        image: '../images/Game/animals/penguin.png'
      },
      {
        english: 'Pig',
        french: 'Un Cochon',
        arabic: "khanzeer",
        image: '../images/Game/animals/pig.png'
      },
      {
        english: 'A Rabbit',
        french: 'Un Lapin',
        arabic: "arnab",
        image: '../images/Game/animals/rabbit.png'
      },
      {
        english: 'A Rubber Duck',
        french: 'Un Canard en Caoutchouc',
        arabic: "batta matatiya",
        image: '../images/Game/animals/rubber-duck.png'
      },
      {
        english: 'Snake',
        french: 'Un Serpent',
        arabic: "soo'ban",
        image: '../images/Game/animals/snake.png'
      }
    ]


  } else if ($('body.colors-game').length) {
    var words = [{
        english: 'A Blue Wall',
        french: 'Un Mur Bleu',
        arabic: "ha'et azrak",
        image: '../images/Game/colors/bluewall.png'
      },
      {
        english: 'A Brown Bag',
        french: 'Un Sac Brun',
        arabic: "keess boni",
        image: '../images/Game/colors/brownbag.png'
      },
      {
        english: 'Green Yarn',
        french: 'Fil Vert',
        arabic: "khayt akhdar",
        image: '../images/Game/colors/greenyarn.png'
      },
      {
        english: 'Orange Flower',
        french: "Une Fleur D'Oranger",
        arabic: "zahra boortooka",
        image: '../images/Game/colors/orangeflower.png'
      },
      {
        english: 'A Pink Balloon',
        french: 'Un Ballon Rose',
        arabic: "baloon zahr",
        image: '../images/Game/colors/pinkballoon.png'
      },
      {
        english: 'A Red Paintbrush',
        french: 'Un Pinceau Rouge',
        arabic: "farashat 'ahmar",
        image: '../images/Game/colors/red.png'
      },
      {
        english: 'A Yellow Star',
        french: 'Une Etoile Jaune',
        arabic: "najma safraa'",
        image: '../images/Game/colors/yellowstar.png'
      }
    ]


  } else if ($('body.food-game').length) {
    var words = [{
        english: 'Apple',
        french: 'Une Pomme',
        arabic: "toofaha",
        image: '../images/Game/fruits/apple.png'
      },
      {
        english: 'Banana',
        french: 'Une Banane',
        arabic: "mawza",
        image: '../images/Game/fruits/banana.png'
      },
      {
        english: 'Cherries',
        french: 'Des Cerises',
        arabic: "karaz",
        image: '../images/Game/fruits/cherries.png'
      },
      {
        english: 'Coconut',
        french: 'Noix de Coco',
        arabic: "jawz al hind",
        image: '../images/Game/fruits/coconut.png'
      },
      {
        english: 'Cantaloupe',
        french: 'Un Cantaloup',
        arabic: 'shaman',
        image: '../images/Game/fruits/melon.png'
      },
      {
        english: 'Orange',
        french: 'Un Orange',
        arabic: "boortookal",
        image: '../images/Game/fruits/orange.png'
      },
      {
        english: 'Pineapple',
        french: 'Un Ananas',
        arabic: "ananass",
        image: '../images/Game/fruits/pineapple.png'
      },
      {
        english: 'Pomegranate',
        french: 'Une Grenade',
        arabic: "rooman",
        image: '../images/Game/fruits/pomegranate.png'
      },
      {
        english: 'Grapes',
        french: 'Des Raisins',
        arabic: "enaab",
        image: '../images/Game/fruits/raisin.png'
      },
      {
        english: 'Strawberry',
        french: 'Une Fraise',
        arabic: "farawla",
        image: '../images/Game/fruits/strawberry.png'
      },
      {
        english: 'Watermelon Slice',
        french: 'Une Tranche de Pastèque',
        arabic: "farawla",
        image: '../images/Game/fruits/watermelon.png'
      },
      {
        english: 'Asparagus',
        french: 'Asperges',
        arabic: "haliyoon",
        image: '../images/Game/vegetable/asparagus.png'
      },
      {
        english: 'Bell Pepper',
        french: 'Un Poivron',
        arabic: "felfel",
        image: '../images/Game/vegetable/bell-pepper.png'
      },
      {
        english: 'Broccoli',
        french: 'Brocoli',
        arabic: "brocoli",
        image: '../images/Game/vegetable/broccoli.png'
      },
      {
        english: 'Carrot',
        french: 'Carotte',
        arabic: "jazar",
        image: '../images/Game/vegetable/carrot.png'
      },
      {
        english: 'Eggplant',
        french: 'Une Aubergine',
        arabic: "batizen",
        image: '../images/Game/vegetable/eggplant.png'
      },
      {
        english: 'Garlic',
        french: "De L'Ail",
        arabic: "toum",
        image: '../images/Game/vegetable/garlic.png'
      },
      {
        english: 'Green Beans',
        french: 'Des Haricots Verts',
        arabic: "loubi",
        image: '../images/Game/vegetable/green-beans.png'
      },
      {
        english: 'Lemon',
        french: 'Citron',
        arabic: "hamood",
        image: '../images/Game/vegetable/lemon.png'
      },
      {
        english: 'Lettuce',
        french: 'Salade',
        arabic: "khass",
        image: '../images/Game/vegetable/lettuce.png'
      },
      {
        english: 'Mushroom',
        french: 'Champignon',
        arabic: "fetr",
        image: '../images/Game/vegetable/mushroom.png'
      },
      {
        english: 'Onion',
        french: 'Un Oignon',
        arabic: "bassal",
        image: '../images/Game/vegetable/onion.png'
      },
      {
        english: 'Radish',
        french: 'Un Radis',
        arabic: "fejel",
        image: '../images/Game/vegetable/radish.png'
      },
      {
        english: 'Tomato',
        french: 'Une Tomate',
        arabic: "banadoura",
        image: '../images/Game/vegetable/tomato.png'
      }
    ]

  } else if ($('body.travel-game').length) {
    var words = [{
        english: 'The Beach',
        french: 'La Plage',
        arabic: "al bahr",
        image: '../images/Game/travel/transparent/beach.png'
      },
      {
        english: 'Spending the day at beach',
        french: 'Une Journee a la Plage',
        arabic: "al zahab ila al bahar",
        image: '../images/Game/travel/transparent/beachday.png'
      },
      {
        english: 'Biking',
        french: 'Faire du Bicyclette',
        arabic: "daraja",
        image: '../images/Game/travel/transparent/bike.png'
      },
      {
        english: 'Camera',
        french: 'Appareil de Photographie',
        arabic: "alat tassweer",
        image: '../images/Game/travel/transparent/camera.png'
      },
      {
        english: 'A Backpacker',
        french: 'Un Randonneur',
        arabic: "alrahal",
        image: '../images/Game/travel/transparent/hiker.png'
      },
      {
        english: 'Luggage',
        french: 'Valise',
        arabic: "amtiaa'",
        image: '../images/Game/travel/transparent/luggage.png'
      },
      {
        english: 'A Map',
        french: 'Une Carte de Voyage',
        arabic: "khareeta",
        image: '../images/Game/travel/transparent/map.png'
      },
      {
        english: 'Money',
        french: "De L'Argent",
        arabic: "massari",
        image: '../images/Game/travel/transparent/money.png'
      },
      {
        english: 'Palm tree',
        french: 'Un Palmier',
        arabic: "chajarat nakheel",
        image: '../images/Game/travel/transparent/palmtree.png'
      },
      {
        english: 'Passport',
        french: 'Passeport',
        arabic: "passport",
        image: '../images/Game/travel/transparent/passport.png'
      },
      {
        english: 'Airplane',
        french: 'Un Avion',
        arabic: "ta'ira",
        image: '../images/Game/travel/transparent/plane.png'
      },
      {
        english: 'Boat',
        french: 'Bateau',
        arabic: "quarib",
        image: '../images/Game/travel/transparent/sailing.png'
      }
    ]
  }


  if (words) {
    populateBoard();
  }
  // populateBoard();

  // console.log(getRandomImage());


  language = localStorage.getItem('language');

  console.log(language);


});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("pikachu-slides");

  if (x.length) {


    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1
    }
    x[slideIndex - 1].style.display = 'block';
    setTimeout(carousel, 2000); // Change image every 2 seconds


  }


}