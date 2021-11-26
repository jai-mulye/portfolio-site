const displayScore = document.querySelector('#displayScore');
const displayP1 = document.querySelector('#displayP1');
const displayP2 = document.querySelector('#displayP2');
const limit = document.querySelector('#limit');
const choices = document.querySelector('#choices');
const addtoP1 = document.querySelector('#addtoP1');
const addtoP2 = document.querySelector('#addtoP2');
const reset = document.querySelector('#reset');

// Setting initial values
let p1 = 0;
let p2 = 0;
let lim = 3;

// Event Listener for Player 1
addtoP1.addEventListener('click', function() {
	p1 += 1;
	displayP1.innerText = p1;
	// console.log(p1);
	winCondition(p1,p2);
});

// Event Listener for Player 2
addtoP2.addEventListener('click', function() {
	p2 += 1;
	displayP2.innerText = p2;
	// console.log(p2);
	winCondition(p1,p2);
});

// Event Listener for Limit of Points
limit.addEventListener('change', function() {
	lim = limit.value; 
	// console.log(lim);
});

// Event Listener for Resetting the Score
reset.addEventListener('click', function() {
	p1 = 0;
	p2 = 0;
	displayP1.innerText = p1;
	displayP2.innerText = p2;
	winCondition(p1,p2);
	displayP1.classList.remove('green','red');
	displayP2.classList.remove('green','red');
	// Enabling the buttons
	addtoP1.disabled = false;
	addtoP2.disabled = false;
	// Toggling the button visibility
	// addtoP1.classList.toggle('hide');
	// addtoP2.classList.toggle('hide');

});

// Logic for coloring the score
// It will alse disable or hide the buttons on reaching the score limit 
const winCondition = (num1, num2) => {
	if(num1 == lim && num2 != lim) {
		displayP1.classList.add('green');
		displayP2.classList.add('red');
		// Disabling the buttons
		addtoP1.disabled = true;
		addtoP2.disabled = true;
		// Toggling the button visibility
		// addtoP1.classList.toggle('hide');
		// addtoP2.classList.toggle('hide');
	}

	else if(num2 == lim && num1 != lim) {
		displayP2.classList.add('green');
		displayP1.classList.add('red');
		// Disabling the buttons
		addtoP1.disabled = true;
		addtoP2.disabled = true;
		// Toggling the button visibility
		// addtoP2.classList.toggle('hide');
		// addtoP1.classList.toggle('hide');
	}
}