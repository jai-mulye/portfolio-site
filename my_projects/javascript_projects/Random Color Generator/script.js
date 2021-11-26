const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// Creating a new EventListener
button.addEventListener('click', function() {
    // Changing the h1 into newly generated color 
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

// Function to generate random color
const randomColor = () => {
    // genetating 3 random numbers under 255 and storing them in variables r,g,b
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // returning a complete rgb value 
    return `rgb(${r},${g},${b})`;
}
