var SandwichMaker = (function(oldMaker) {

  // // Private variable to store the price
  let totalPrice = 0;
	let finalSandwich = [];

	oldMaker.addItemToSammie = (selectedTopping, toppingPrice) => {
		// if the selected item isn't already somewhere in finalSandwich, push it in.
		if (finalSandwich.indexOf(selectedTopping) === -1) {		
			finalSandwich.push(selectedTopping);
			totalPrice += toppingPrice;
	} else {
			SandwichMaker.removeItemFromSammie(selectedTopping, toppingPrice);
	}
}

	oldMaker.removeItemFromSammie = (unselectedTopping, unselectedPrice) => {
		totalPrice -= unselectedPrice
		let indexOfWhatWeWantToRemove = finalSandwich.indexOf(event.target.value);
		finalSandwich.splice(indexOfWhatWeWantToRemove, 1);
	}

	oldMaker.getTotalPrice = () => {
		return totalPrice;
	}	
	oldMaker.getFinalSandwich = () => {
		return finalSandwich
	}

	return oldMaker;
})(SandwichMaker || {});

