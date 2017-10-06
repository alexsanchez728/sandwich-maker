
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const veggiePrices = {"Lettuce": 0.50, "Tomatoes": 0.50, "Taro": 5.00};
  const veggiesKeys = Object.keys(veggiePrices);

  oldMaker.addVeggies = (selectedTopping) => {
    SandwichMaker.addItemToSammie(selectedTopping, veggiePrices[selectedTopping])
    }
  oldMaker.getVeggies = () => {
    for (let i = 0; i < veggiesKeys.length; i++) {
      let domString = "";

      domString+=    `<label class="form-check-label">`
      domString+=       `<input class="form-check-input" type="checkbox" value="${veggiesKeys[i]}">`
      domString+=       ` ${veggiesKeys[i]}`
      domString+=       `<div class="col-xs-1"</div>`
      domString+=    `</label>`

     veggiesBox.innerHTML += domString;
    };
  }
  return oldMaker;
})(SandwichMaker || {});