const pwd = document.querySelector('#pwd');
const pwdLength = document.querySelector('#pwdLength');
const clipboard_text = document.querySelector('.clipboard_text');
const clipboard = document.querySelector('#clipboard');
const customRange = document.querySelector('#customRange');
const allInclude = document.getElementsByTagName('input');
const generatePWD = document.querySelector('#generatePWD');

// Strings for password generation
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*-+=_<>?/.";

// Assigning strings to checkboxs
checkUppercase.value = uppercase;
checkLowercase.value = lowercase;
checkNumbers.value = numbers;
checkSymbols.value = symbols;

let pwdString = "";
// Default value of customRange
customRange.value = 8;

// EventListener for Range Element
customRange.addEventListener('change', () => {
	pwdLength.innerText = "";
	pwdLength.innerText += customRange.value;
});

// EventListener for Generate Password Button
generatePWD.addEventListener('click', () => {
	pwdString = "";
	for (let chkbox of allInclude) {
		if (chkbox.checked == true) {
			pwdString += chkbox.value;
		}
	}
	generatePassword();
	
	// Make text and clipboard icon visible
	clipboard.style.display = 'inline';
	clipboard_text.style.visibility = 'visible';
});

// Logic for randomly generating password
function generatePassword () {
	let finalPassword = "";
	for (let i=0; i<customRange.value; i++) {
		finalPassword += pwdString.charAt(Math.floor(Math.random() * pwdString.length));
	}
	// console.log(finalPassword);
	pwd.innerText = finalPassword;
}

// EventListener for copying text on clipboard
let copyText = "";
clipboard.addEventListener('click', (e) => {
	e.preventDefault();
	copyText = pwd.innerText;
	navigator.clipboard.writeText(copyText);
});