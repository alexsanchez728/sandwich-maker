
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
	const veggiePrices = {"Lettuce": 0.50, "Tomatoes": 0.50, "Taro": 5.00, "No Veggies": 0};
  const veggiesKeys = Object.keys(veggiePrices);

  oldMaker.addVeggies = (selectedTopping) => {
    SandwichMaker.addItemToSammie(selectedTopping, veggiePrices[selectedTopping], event.target.dataset["type"])
    }
  oldMaker.getVeggies = () => {
    for (let i = 0; i < veggiesKeys.length; i++) {
      let domString = "";

      domString+=    `<label class="form-check-label">`
      domString+=       `<input class="form-check-input" data-type="veggie" type="checkbox" value="${veggiesKeys[i]}">`
      domString+=       ` ${veggiesKeys[i]}`
      domString+=       `<div class="col-xs-1"</div>`
      domString+=    `</label>`

     veggiesBox.innerHTML += domString;
    };
  }
  return oldMaker;
})(SandwichMaker || {});