
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const proteins = {   
                    "Turkey": 2.00,
                    "Ham": 3.00,
                    "Boudin": 5.50,
                    "No Meat": 0
                    };
  // Augment the original object with another method
  oldMaker.getProteins = function() {
    return proteins;
  };
  for (let i = 0; i < Object.keys(proteins).length; i++) {
    // console.log("looping");
    const proteinBox = document.getElementById("protein-container");
    let domString = "";

    domString+=    `<label class="form-check-label">`
    domString+=       `<input class="form-check-input" type="checkbox" value="${Object.keys(proteins)[i]}">`
    domString+=       ` ${Object.keys(proteins)[i]}`
    domString+=       `<div class="col-xs-1"</div>`
    domString+=    `</label>`

   proteinBox.innerHTML += domString;
  };
  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});