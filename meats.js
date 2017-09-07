
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const meats = {   "Turkey": 2.00,
                    "Ham": 3.00,
                    "Boudin": 5.50,
                    "No Meat": 0
                };
  // Private variable to store the different prices
  var meatPrices;


  // Augment the original object with another method
  oldMaker.getMeats = function() {
    return meats;
  };
    oldMaker.addMeats = function() {
    return meats;
  };

  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});