const display = document.querySelector('#display');
const innerContainer = document.querySelector('#inner-container');
const buttons = document.getElementsByClassName('btn btn-light');
const operators = document.getElementsByClassName('btn btn-success');
const btnEquals = document.querySelector('#btnEquals');
const btnClear = document.querySelector('#btnClear');

display.value = "";
let eqn = "";

// Iterating through digits
for(let button of buttons) {
	button.addEventListener('click', () => {
		// console.log(button.value);
		eqn += button.value;
		display.value = eqn;
	});
}

// Iterating through operators
for(let operator of operators) {
	operator.addEventListener('click', () => {
		// console.log(operator.value);
		eqn += operator.value;
		display.value = eqn;
	});
}

// EventListener for 'Clear button'
btnClear.addEventListener('click', () => {
	eqn = "";
	display.value = "";
});

// EventListener for '= button'
btnEquals.addEventListener('click', () => {	
	display.value = eval(eqn);
});

