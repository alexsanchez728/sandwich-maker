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
	itemsInSandwich = SandwichMaker.getFinalSandwich();

	if (event.target.value.indexOf("No") === 0) {
		console.log("No breads pls");
	}
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log("selected Topping", selectedTopping);

	SandwichMaker.addBread(selectedTopping);
	console.log("finalSandwich items", itemsInSandwich);

	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("total price in public", finalSandwichPrice);

})


proteinBox.addEventListener("change", function(event) {
	selectedTopping = event.target.value
	console.log(selectedTopping);
})
cheeseBox.addEventListener("change", function(event) {
	selectedTopping = event.target.value
	console.log(selectedTopping);
})
condimentBox.addEventListener("change", function(event) {
	selectedTopping = event.target.value
	console.log(selectedTopping);
})
veggiesBox.addEventListener("change", function(event) {
	selectedTopping = event.target.value
	console.log(selectedTopping);
})
seePriceBtn.addEventListener("click", function(event) {
	console.log("sammie array", SammieArray);

})

let myBreads = SandwichMaker.getBreads();
let myMeats = SandwichMaker.getProteins();
let myCheese = SandwichMaker.getCheese();
let myVeggies = SandwichMaker.getVeggies();
let myCondiments = SandwichMaker.getCondiments();

// console.log("breads", myBreads)
// console.log("meats", myMeats)
// console.log("cheese", myCheese)
// console.log("veggies", myVeggies)
// console.log("condiments", myCondiments)

