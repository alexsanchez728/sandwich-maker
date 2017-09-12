
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const condimentPrices = {"Mayo": 0.25, "Hummus": 0.75, "Olive Oil": 0.50, "No Bread": 0};
  const condimentKeys = Object.keys(condimentPrices);

  oldMaker.addCondiment = (selectedTopping) => {
    SandwichMaker.addItemToSammie(selectedTopping, condimentPrices[selectedTopping], event.target.dataset["type"])
    }
  oldMaker.getCondiments = () => {
    for (let i = 0; i < condimentKeys.length; i++) {
      let domString = "";

      domString+=    `<label class="form-check-label">`
      domString+=       `<input class="form-check-input" data-type="condiment" type="checkbox" value="${condimentKeys[i]}">`
      domString+=       ` ${condimentKeys[i]}`
      domString+=       `<div class="col-xs-1"</div>`
      domString+=    `</label>`

     condimentBox.innerHTML += domString;
    };
  }
  return oldMaker;
})(SandwichMaker || {});