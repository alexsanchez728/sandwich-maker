let breadBox = document.getElementById("bread-container");
let proteinBox = document.getElementById("protein-container");
let cheeseBox = document.getElementById("cheese-container");
let condimentBox = document.getElementById("condiments-container");
let veggiesBox = document.getElementById("veggies-container");
let seePriceBtn = document.getElementById("totalBtn");
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
let selectedTopping;
let SammieArray = {};

breadBox.addEventListener("change", function(event) {

  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
	console.log(selectedTopping);
  // Determine the price of the topping chosen
  // let toppingPrice;
	// if (event.target.id.indexOf("bread") === 0) {
	// 	let breadIndex = event.target.id.split("-")[1]
	// 	SandwichMaker.addBread(breadIndex);
	// }

	SandwichMaker.addBread(selectedTopping);

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

