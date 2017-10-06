
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const breadPrices = {"Wheat": 2.00, "Rye": 2.75, "Boule": 5.75};
	const breadKeys = Object.keys(breadPrices);

	oldMaker.addBread = (selectedTopping) => {
		SandwichMaker.addItemToSammie(selectedTopping, breadPrices[selectedTopping])
		}
	oldMaker.getBreads = () => {
	  for (let i = 0; i < breadKeys.length; i++) {

	    let domString = "";
	    domString+=    `<label class="form-check-label">`
	    domString+=       `<input class="form-check-input" type="checkbox" value="${breadKeys[i]}">`
	    domString+=       ` ${breadKeys[i]}`
	    domString+=       `<div class="col-xs-1"</div>`
	    domString+=    `</label>`

	   breadBox.innerHTML += domString;
	  };
	}
  return oldMaker;
})(SandwichMaker || {});