let breadBox = document.getElementById("bread-container");
let proteinBox = document.getElementById("protein-container");
let cheeseBox = document.getElementById("cheese-container");
let condimentBox = document.getElementById("condiments-container");
let veggiesBox = document.getElementById("veggies-container");
let sandwichBox = document.getElementById("sandwich-container");
let seePriceBtn = document.getElementById("totalBtn");
// Variable to hold the final price. Default to 0.
let finalSandwichPrice = 0;
// Variable to hold topping that the user selects
let selectedTopping;

let itemsInSandwich;

breadBox.addEventListener("change", function(event) {
	// I need itemsInSandwich to be updated every click
	itemsInSandwich = SandwichMaker.getFinalSandwich();
  selectedTopping = event.target.value;

  // Get the value chosen from the DOM
	SandwichMaker.addBread(selectedTopping);

	finalSandwichPrice = SandwichMaker.getTotalPrice();

	SandwichMaker.getSandwich();

});

proteinBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value

	SandwichMaker.addProtein(selectedTopping);

	finalSandwichPrice = SandwichMaker.getTotalPrice();

	SandwichMaker.getSandwich();

});

cheeseBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value

	SandwichMaker.addCheese(selectedTopping);

	finalSandwichPrice = SandwichMaker.getTotalPrice();

	SandwichMaker.getSandwich();

});

condimentBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value

	SandwichMaker.addCondiment(selectedTopping);

	finalSandwichPrice = SandwichMaker.getTotalPrice();

	SandwichMaker.getSandwich();

});

veggiesBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value

	SandwichMaker.addVeggies(selectedTopping);

	finalSandwichPrice = SandwichMaker.getTotalPrice();

	SandwichMaker.getSandwich();

});

seePriceBtn.addEventListener("click", function(event) {
	
	SandwichMaker.printPrice(finalSandwichPrice);
});

let myBreads = SandwichMaker.getBreads();
let myMeats = SandwichMaker.getProteins();
let myCheese = SandwichMaker.getCheese();
let myVeggies = SandwichMaker.getVeggies();
let myCondiments = SandwichMaker.getCondiments();