const joke = document.querySelector('#joke');
const newJoke = document.querySelector('#newJoke');

// Using API to get joke
const getJoke = async() => {
	try {
		// setting header
		let config = {headers: {Accept: 'application/json'}}
		// using axios to make request
		let result = await axios.get('https://icanhazdadjoke.com/',config);
		// console.log(result.data.joke);
		joke.innerText = result.data.joke;
	} catch(e) {
		// console.log("Error", e);
		joke.innerText = e;
	}
}

// EventListener for the button
newJoke.addEventListener('click', () => {
	getJoke();
});