
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const breadPrices = {
		"Wheat": 2, "Rye": 2.75, "Boule": 5.75, "No Bread": 0
	};
	// oldMaker.addBread = () => {
 // // return ???
	// }
	oldMaker.getBreads = () => {
	  for (let i = 0; i < Object.keys(breadPrices).length; i++) {
	    // console.log("looping");
	    let domString = "";
	    domString+=    `<label class="form-check-label">`
	    domString+=       `<input class="form-check-input" type="checkbox" value="${Object.keys(breadPrices)[i]}">`
	    domString+=       ` ${Object.keys(breadPrices)[i]}`
	    domString+=       `<div class="col-xs-1"</div>`
	    domString+=    `</label>`

	   breadBox.innerHTML += domString;
	  };
	}
  // Return the new, augmented object with the new method on it
  return oldMaker;
})(SandwichMaker || {});