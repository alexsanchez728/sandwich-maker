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

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadBox.addEventListener("change", function(event) {

  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  // let toppingPrice =

  for (let i = 0; i < Object.keys(myBreads).length; i++) {

  	if (selectedTopping === Object.keys(myBreads)[i]) {
  		console.log("selected topping", selectedTopping);

	  	console.log("trying to get the selected topping as an object", Object.entries(myBreads)[i])

  		SammieArray = (Object.entries(myBreads)[i]);
  		console.log("sammie array", SammieArray);
  	}
  }

  // Add an if statement that removes the item from the sandwich if it's already clicked
  // Add the topping to the SandwichMaker to increase the total price
});

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