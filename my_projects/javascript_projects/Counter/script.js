const count = document.querySelector('#count');
const add1 = document.querySelector('#add1');
const subtract1 = document.querySelector('#subtract1');
const reset = document.querySelector('#reset');

let currentCount = 0;

// Event Listener for Incrementing Value
add1.addEventListener('click', function() {
	currentCount += 1;
	count.innerText = currentCount;
	// console.log(currentCount);
	checkColor(currentCount);
});

// Event Listener for Decrementing Value
subtract1.addEventListener('click', function() {
	currentCount -= 1;
	count.innerText = currentCount;
	// console.log(currentCount);
	checkColor(currentCount);
});

// Event Listener for Resetting Value
reset.addEventListener('click', function() {
	currentCount = 0;
	count.innerText = currentCount;
	checkColor(currentCount);
});

// Logic for changing color based on positive or negetive value
const checkColor = (num) => {
	if(num < 0) {
		count.style.color = '#d61818';	}
	else if(num === 0) {
		count.style.color = 'black';
	}
	else if(num > 0) {
		count.style.color = 'green';
	}
}