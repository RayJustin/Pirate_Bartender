

$(document).ready(function(){

	// Changes Sidebar text and changes button to start button
	$(document).on('click', '.nextButton', function(){
		$(".introText").remove();
		$(".introduction").append("<p class='introText'> Answer four short questions, and we will serve ye up something to yer liken! </p>")
		$(".nextButton").addClass("startButton").val("Start").removeClass("nextButton");
	});

	// Uses start button to initiate the game
	$(document).on('click', '.startButton', function(){
		$(".dim").removeClass("dim");
	});



// Empty array to fill with drink ingredients
var drink = [];

// Empty array 
var drinkName = [];

// Ingredients for the drinks
var ingredients = {
	strong: ['Glug of Rum', 'Slug of Whisky', 'Shot of Jager'],
	weak: ['Splash of Rum','Ounce of Whisky','Shot of Gin'],
	bitter: ['Shake of Bitters', 'Splash of Tonic', 'Twist of Lemon Peel'],
	bland: ['Some Carbonated Soda','Tonic Water','Hint of RedBull'],
	salty: ['Olive on a Stick', 'Salt-Dusted Rim', 'Rasher of Bacon'],
	sweet: ['Sugar Cube', 'Spoonful of Honey', 'Splash of Cola'],
	fruity: ['Splash of Apple Juice', 'Strawberry Syrup', 'Raspberry Syrup'],
	vegetable: ['Hint of Tomato','Celery Stick','Hint of Carrot Juice']
}

// Names for the drinks
var names = {
	first:['Fluffy', 'Hardy', 'Sweet', 'Gnarly'],
	middle: ['Puff-', 'Sea-', 'Scruff-', 'Pirate-'],
	last: ['Dog','Badger','Horse','Fish'],
	full: function(type) {
		drinkName.push(names[type][(Math.floor(Math.random() * names[type].length))]);
	}
}

// Submits the form
$('#submit').on('click', function(){
	makeDrink();
	$('.drink').fadeIn(1000);
	drinkName = [];
});

// Resets the game
$(document).on('click', '.restart', function(){
	drink = [];
	$('input:checked').prop('checked',false);
	$('.drink').fadeOut(100);
	$('.drinkContainer').html('');

})

// Outputs a random value from an array
function randomDrink(type) {
	drink.push(ingredients[type][(Math.floor(Math.random() * ingredients[type].length))]);
};

// Loops over the inputs and gets their values, and grabs a random ingredient based on their values
function makeDrink() {
	for (var i = 1; i < 5; i++) {
		var radios = $('input[name="Q'+i+'"]:checked').val();
		randomDrink(radios);
	}

	// Each call fills the drinkName array with a random segment of a name.
	names.full("first");
	names.full("middle");
	names.full("last");

	// Appends the drinkName and drink arrays to an overlay
	$('.drinkContainer').append('<h1 class="drinkHead">'+ drinkName[0] + " " + drinkName[1] + drinkName[2] +'</h1><ul class="drinkUl"><li class="drinkLi">'+ drink[0] +'</li><li class="drinkLi">'+ drink[1] +'</li><li class="drinkLi">'+ drink[2] +'</li><li class="drinkLi">'+ drink[3] +'</li></ul><button class="restart">Make Another?</button')
}



});






