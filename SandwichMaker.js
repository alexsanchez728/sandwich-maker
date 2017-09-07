// var SandwichMaker = (function(oldMaker) {

//   // Private variable to store the price
//   var totalPrice = 0;

//   // Return the public interface that other code can interact with
//   return {
//     addTopping: function(toppingPrice) {
//       totalPrice += toppingPrice;
//     }
//   };
// })(SandwichMaker || {});

let myBreads = SandwichMaker.getBreads();
let myMeats = SandwichMaker.getProteins();
let myCheese = SandwichMaker.getCheese();
let myVeggies = SandwichMaker.getVeggies();
let myCondiments = SandwichMaker.getCondiments();

console.log("breads", myBreads)
console.log("meats", myMeats)
console.log("cheese", myCheese)
console.log("veggies", myVeggies)
console.log("condiments", myCondiments)