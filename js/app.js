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
		vegetable: ['Hint of Tomato','Celery Stick','Hint of Carrot Juice'],
		drink: function(type) {
			drink.push(ingredients[type][(Math.floor(Math.random() * ingredients[type].length))]);
		}
	}

	// Names for the drinks
	var names = {
		first:['Fluffy', 'Hardy', 'Sweet', 'Gnarly'],
		middle: ['Puff-', 'Sea-', 'Scruff-', 'Pirate-'],
		last: ['Dog','Badger','Horse','Fish'],
		full: function() {
			for (prop in names) {
				if (prop !== "full"){
					drinkName.push(names[prop][Math.floor(Math.random() * names[prop].length)]);
				}
			}	
		}
	}

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

	// Submits the form
	$('form').on('submit', function(e){
		e.preventDefault();
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
});

// Loops over the inputs and gets their values, and grabs a random ingredient based on their values
function makeDrink() {
	$('input[type="radio"]:checked').each(function(i,v){
		ingredients.drink($(v).val());
	});
	// Each call fills the drinkName array with a random segment of a name.
	names.full();

	var html = '<h1 class="drinkHead">';

	for (var i = 0; i < drinkName.length; i++) {
		html += drinkName[i] + " ";
	}
	html += '</h1><ul class="drinkUl">';
	for (var i = 0; i < drink.length; i++) {
		html += '<li class="drinkLi">'+ drink[i] + '</li>';
	}
	html += '</ul><button class="restart">Make Another?</button>';
	// Appends the drinkName and drink arrays to an overlay
	$('.drinkContainer').append(html);
}