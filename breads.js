
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const breads = {	
									"Wheat": 2,
									"Rye": 2.75,
									"Boule": 5.75,
									"No Bread": 0
								};

  // Augment the original object with another method
  oldMaker.getBreads = function() {
    return breads;
  };
	for (let i = 0; i < Object.keys(breads).length; i++) {
		// console.log("looping");
		const breadBox = document.getElementById("bread-container");
		let domString = "";

    domString+=    `<label class="form-check-label">`
    domString+=    		`<input class="form-check-input" id="${Object.keys(breads)[i]}" type="checkbox" value="${Object.keys(breads)[i]}">`
    domString+=    		` ${Object.keys(breads)[i]}`
    domString+=    		`<div class="col-xs-1"</div>`
    domString+=    `</label>`

 	 breadBox.innerHTML += domString;
  };
  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});