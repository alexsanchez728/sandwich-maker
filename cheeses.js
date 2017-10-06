
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(oldMaker) {
  const cheesePrices = {"Chedder": 0.50, "Swiss": 0.50, "Caciocavallo": 10.00};
  const cheeseKeys = Object.keys(cheesePrices);

  oldMaker.addCheese = (selectedTopping) => {
    SandwichMaker.addItemToSammie(selectedTopping, cheesePrices[selectedTopping])
    }

  oldMaker.getCheese = () => {
    for (let i = 0; i < cheeseKeys.length; i++) {

      let domString = "";
      domString+=    `<label class="form-check-label">`
      domString+=       `<input class="form-check-input" type="checkbox" value="${cheeseKeys[i]}">`
      domString+=       ` ${cheeseKeys[i]}`
      domString+=       `<div class="col-xs-1"</div>`
      domString+=    `</label>`

     cheeseBox.innerHTML += domString;
    };
  }
  return oldMaker;
})(SandwichMaker || {});