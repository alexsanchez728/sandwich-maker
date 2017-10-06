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
		return finalSandwich;
	}
	oldMaker.getSandwich = () => {
		let domString = "";
		for (let i=0; i < finalSandwich.length; i++) {
			domString += `<p>${finalSandwich[i]}</p>`;
			sandwichBox.innerHTML = domString;
		}			
		if(finalSandwich.length === 0) {
				domString = "";
				sandwichBox.innerHTML = domString;
		}
	}
	oldMaker.printPrice = (final) => {
		let domString = "";
		domString += `<h3>Your Total Is: $${final}</h3>`
		sandwichBox.innerHTML += domString;

	}

	return oldMaker;
})(SandwichMaker || {});

