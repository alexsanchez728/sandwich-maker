
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const proteinPrices = {"Turkey": 2.00, "Ham": 3.00, "Boudin": 5.50, "No Meat": 0};
  const proteinKeys = Object.keys(proteinPrices);

  oldMaker.addProtein = (selectedTopping) => {
    SandwichMaker.addItemToSammie(selectedTopping, proteinPrices[selectedTopping])
    }
  oldMaker.getProteins = () => {
    for (let i = 0; i < proteinKeys.length; i++) {

      let domString = "";
      domString+=    `<label class="form-check-label">`
      domString+=       `<input class="form-check-input" type="checkbox" value="${proteinKeys[i]}">`
      domString+=       ` ${proteinKeys[i]}`
      domString+=       `<div class="col-xs-1"</div>`
      domString+=    `</label>`

     proteinBox.innerHTML += domString;
    };
  }
  return oldMaker;
})(SandwichMaker || {});