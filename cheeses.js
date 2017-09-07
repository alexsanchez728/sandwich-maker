
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
  const cheese = {  "Chedder": 0.50,
                    "Swiss": 0.50,
                    "Caciocavallo Podolico": 10.00,
                    "No Cheese": 0
                  };
  // Private variable to store the different prices
  var cheesePrices;


  // Augment the original object with another method
  oldMaker.getCheese = function() {
    return cheese;
  };
    oldMaker.addCheese = function() {
    return cheese;
  };

  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});