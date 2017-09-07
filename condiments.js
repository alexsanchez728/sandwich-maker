
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const condiments = {  "Mayo": 0.25,
                        "Hummus": 0.75,
                        "Olive Oil": 0.50,
                        "No Bread": 0
                      };
  // Private variable to store the different prices
  var condimentPrices;


  // Augment the original object with another method
  oldMaker.getCondiments = function() {
    return condiments;
  };
    oldMaker.addCondiments = function() {
    return condiments;
  };

  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});