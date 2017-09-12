var SandwichMaker = (function(oldMaker) {

  // // Private variable to store the price
  let totalPrice = 0;
	let finalSandwich = [];

	oldMaker.addItemToSammie = (selectedTopping, toppingPrice, foodCategory) => {
		// if the selected item isn't already somewhere in finalSandwich, push it in.
		console.log(selectedTopping, toppingPrice, foodCategory);
		//pushing the first choice in finalSandwich everytime, without issue
		if (finalSandwich.length < 1) {

		console.log("its not here yet, so we'll put it here")
		finalSandwich.push({selectedTopping, foodCategory});
		totalPrice += toppingPrice;

	} else if (finalSandwich.indexOf(selectedTopping) === -1) {
		// finalSandwich.forEach(function(item) {
			console.log("each item", finalSandwich.indexOf(selectedTopping))


				finalSandwich.push({chosenTopping : selectedTopping, itsCategory : foodCategory});
			} else {
						console.log("we got a copy")

		}
		// })
	}
	




















	// oldMaker.removeItemFromSammie = (toBeRemoved, unselectedTopping, unselectedPrice, unselectedFoodCategory) => {
	// 	totalPrice -= unselectedPrice;
	// 	// for (let i = 0; i < finalSandwich.length; i++) {
	// 	// 	console.log(finalSandwich[i])
	// 	// 	if (finalSandwich[i] === ) {

	// 	// 	}
	// 		finalSandwich.indexOf(toBeRemoved)
	// 		let indexOfWhatWeWantToRemove = toBeRemoved;
	// 	// }
	// 	finalSandwich.splice(indexOfWhatWeWantToRemove, 1);
	// 	// let indexOfWhatWeWantToRemove = finalSandwich.indexOf(event.target.value);

	// }


	oldMaker.getTotalPrice = () => {
		return totalPrice;
	}	
	oldMaker.getFinalSandwich = () => {
		return finalSandwich;
	}
	oldMaker.getSandwich = () => {
		let domString = "";
		for (let i=0; i < finalSandwich.length; i++) {
			domString += `<p>${finalSandwich[i].chosenTopping}</p>`;
		sandwichBox.innerHTML = domString;
		}
	}
	oldMaker.printPrice = (final) => {
		let domString = "";
		domString += `<h3>Your Total Is: $${final}</h3>`
		sandwichBox.innerHTML += domString;
	}

	oldMaker.choseNone = (foodCategory) => {
		for (let i = 0; i < foodCategory.length; i++) {
			if (foodCategory[i] === event.target.dataset["type"]) {
				console.log("ready to uncheck")
			}
		}
	}

	return oldMaker;
})(SandwichMaker || {});

