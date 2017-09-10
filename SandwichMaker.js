var SandwichMaker = (function(oldMaker) {

  // // Private variable to store the price
  // var totalPrice = 0;

  // // Return the public interface that other code can interact with
  // return {
  //   addTopping: function(toppingPrice) {
  //     totalPrice += toppingPrice;
  //   }
  // };
oldMaker.doMath = (number) => {
	console.log(number);
}

return oldMaker;
})(SandwichMaker || {});

