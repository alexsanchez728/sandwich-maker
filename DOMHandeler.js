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

	if (event.target.value.indexOf("No") === 0) {
		console.log("No breads");
	}

	SandwichMaker.addBread(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);


	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

	SandwichMaker.getSandwich();
})


proteinBox.addEventListener("change", function(event) {
	itemsInSandwich = SandwichMaker.getFinalSandwich();
	selectedTopping = event.target.value

	if (event.target.value.indexOf("No") === 0) {
		console.log("chose none of this type", event.target.dataset["type"]);
		// SandwichMaker.choseNone();
	}

	SandwichMaker.addProtein(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);
	SandwichMaker.getSandwich();

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
	SandwichMaker.getSandwich();

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
	SandwichMaker.getSandwich();

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
	SandwichMaker.getSandwich();

})

seePriceBtn.addEventListener("click", function(event) {
	
	// console.log("final price", );
	SandwichMaker.printPrice(finalSandwichPrice);
})

let myBreads = SandwichMaker.getBreads();
let myMeats = SandwichMaker.getProteins();
let myCheese = SandwichMaker.getCheese();
let myVeggies = SandwichMaker.getVeggies();
let myCondiments = SandwichMaker.getCondiments();