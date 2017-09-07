
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const veggies = {   "Lettuce": 0.50,
                      "Tomatoes": 0.50,
                      "Taro": 5.00,
                      "No Veggies": 0
                  };
  // Private variable to store the different prices
  var breadPrices;


  // Augment the original object with another method
  oldMaker.getVeggies = function() {
    return veggies;
  };
    oldMaker.addVeggies = function() {
    return veggies;
  };

  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});