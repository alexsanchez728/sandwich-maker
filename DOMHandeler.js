let breadBox = document.getElementById("bread-container");
let proteinBox = document.getElementById("protein-container");
let cheeseBox = document.getElementById("cheese-container");
let condimentBox = document.getElementById("condiments-container");
let veggiesBox = document.getElementById("veggies-container");
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
	console.log("selected Topping", selectedTopping);

	if (event.target.value.indexOf("No") === 0) {
		console.log("No breads");

	}

	SandwichMaker.addBread(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

})


proteinBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value
	console.log(selectedTopping);

	if (event.target.value.indexOf("No") === 0) {
		console.log("No proteins");
	}

	SandwichMaker.addProtein(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

})
cheeseBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value
	console.log(selectedTopping);

	if (event.target.value.indexOf("No") === 0) {
		console.log("No cheese");
	}

	SandwichMaker.addCheese(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

})
condimentBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value
	console.log(selectedTopping);

	if (event.target.value.indexOf("No") === 0) {
		console.log("No Condiment");
	}

	SandwichMaker.addCondiment(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

})
veggiesBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value
	console.log(selectedTopping);

	if (event.target.value.indexOf("No") === 0) {
		console.log("No veggies");
	}

	SandwichMaker.addVeggies(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

})

seePriceBtn.addEventListener("click", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	console.log("sammie array", SammieArray);

})

let myBreads = SandwichMaker.getBreads();
let myMeats = SandwichMaker.getProteins();
let myCheese = SandwichMaker.getCheese();
let myVeggies = SandwichMaker.getVeggies();
let myCondiments = SandwichMaker.getCondiments();