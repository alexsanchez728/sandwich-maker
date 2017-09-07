
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
  const cheese = {  "Chedder": 0.50,
                    "Swiss": 0.50,
                    "Caciocavallo Podolico": 10.00,
                    "No Cheese": 0
                  };

  // Augment the original object with another method
  oldMaker.getCheese = function() {
    return cheese;
  };
  for (let i = 0; i < Object.keys(cheese).length; i++) {
    console.log("looping");
    const cheeseBox = document.getElementById("cheese-container");
    let domString = "";

    domString+=    `<label class="form-check-label">`
    domString+=       `<input class="form-check-input" type="checkbox" value="${Object.keys(cheese)[i]}">`
    domString+=       ` ${Object.keys(cheese)[i]}`
    domString+=       `<div class="col-xs-1"</div>`
    domString+=    `</label>`

   cheeseBox.innerHTML += domString;
  };
  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});