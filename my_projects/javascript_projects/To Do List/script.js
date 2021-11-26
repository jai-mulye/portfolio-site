const FaskInput = document.querySelector('#taskInput');
const taskSubmit = document.querySelector('#taskSubmit');
const taskList =  document.querySelector('#taskList');

let tasks = [];

// Adding a new Task 
taskSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	// Checking for a blank value
	if(taskInput.value === "") {
		alert("Please Enter a Task!");
	}
	else if(taskInput.value !== "") {
		// console.log(task);
		tasks.push(taskInput.value);

		// Creating a div
		let newDiv = document.createElement('div');
		newDiv.classList.add('newDivStyle');

		// Creating a li
		let newItem = document.createElement('li');
		newItem.innerText = taskInput.value;
		newDiv.append(newItem);
		newItem.classList.add('item');

		// Creating Done button
		let markItem = document.createElement('button');
		markItem.innerText = 'Done';
		newDiv.append(markItem);
		markItem.classList.add('markBtn');
		markItem.setAttribute("class","btn btn-success m-1");

		// Creating Remove button
		let removeItem = document.createElement('button');
		removeItem.innerText = 'Remove';
		newDiv.append(removeItem);
		removeItem.classList.add('removeBtn');
		removeItem.setAttribute("class","btn btn-danger");

		taskList.append(newDiv);
		// Clearing user input
		taskInput.value = "";

		// Marking a Completed Task 
		markItem.addEventListener('click', (e) => {
			e.preventDefault();
			newItem.classList.toggle('lineThrough');
			if(markItem.innerText === 'Done') {
				markItem.innerText = 'Undo';
				markItem.setAttribute("class","btn btn-warning m-1");
			}
			else if(markItem.innerText === 'Undo'){
				markItem.innerText = 'Done';
				markItem.setAttribute("class","btn btn-success m-1");
			}
		});

		// Removing a Task
		removeItem.addEventListener('click', (e) => {
			e.preventDefault();
			newDiv.remove();
		});
	}
});

