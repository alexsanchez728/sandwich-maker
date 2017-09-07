
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const condiments = {  "Mayo": 0.25,
                        "Hummus": 0.75,
                        "Olive Oil": 0.50,
                        "No Bread": 0
                      };

  // Augment the original object with another method
  oldMaker.getCondiments = function() {
    return condiments;
  };
  for (let i = 0; i < Object.keys(condiments).length; i++) {
    console.log("looping");
    const condimentsBox = document.getElementById("condiments-container");
    let domString = "";

    domString+=    `<label class="form-check-label">`
    domString+=       `<input class="form-check-input" type="checkbox" value="${Object.keys(condiments)[i]}">`
    domString+=       ` ${Object.keys(condiments)[i]}`
    domString+=       `<div class="col-xs-1"</div>`
    domString+=    `</label>`

   condimentsBox.innerHTML += domString;
  };

  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});