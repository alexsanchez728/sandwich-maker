
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const breads = {	"Wheat": 2,
										"Rye": 2.75,
										"Boule": 5.75,
										"No Bread": 0
								};
  // Private variable to store the different prices
  var breadPrices;


  // Augment the original object with another method
  oldMaker.getBreads = function() {
    return breads;
  };
    oldMaker.addBreads = function() {
    return breads;
  };

  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});