
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const veggies = {   
                    "Lettuce": 0.50,
                    "Tomatoes": 0.50,
                    "Taro": 5.00,
                    "No Veggies": 0
                  };

  // Augment the original object with another method
  oldMaker.getVeggies = function() {
    return veggies;
  };
  for (let i = 0; i < Object.keys(veggies).length; i++) {
    // console.log("looping");
    const veggiesBox = document.getElementById("veggies-container");
    let domString = "";

    domString+=    `<label class="form-check-label">`
    domString+=       `<input class="form-check-input" type="checkbox" value="${Object.keys(veggies)[i]}">`
    domString+=       ` ${Object.keys(veggies)[i]}`
    domString+=       `<div class="col-xs-1"</div>`
    domString+=    `</label>`

   veggiesBox.innerHTML += domString;
  };
  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});