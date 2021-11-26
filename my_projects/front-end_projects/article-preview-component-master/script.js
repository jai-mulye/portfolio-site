const date = document.querySelector('#date');
// Get current date 
let time = new Date();
let cur_date = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();

let months = ['none','Jan','Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
date.innerText = `${cur_date} ${months[month+1]} ${year}`;

// Display banner on click - share-icon
const shareIcon = document.querySelector('#share-icon');

// Event Listener to toogle visibility 
shareIcon.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.tooltip').classList.toggle('toggleVisibility');
    document.querySelector('.arrow-down').classList.toggle('toggleVisibility');

});
