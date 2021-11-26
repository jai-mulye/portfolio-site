const plrImg = document.querySelector('#plrImg');
const plrScore = document.querySelector('#plrScore');
const playerStatus = document.querySelector('#playerStatus');
const comImg = document.querySelector('#comImg');
const comScore = document.querySelector('#comScore');

const icons = document.querySelectorAll('.icons');
const btnGo = document.querySelector('#btnGo');
const btnReset = document.querySelector('#btnReset');

// Initial Values
var plrChoice = "";
var plrPoints = 0;
var comChoice = "";
var comPoints = 0;
var winStatus = "";

// Player's Selection 
for (let icon of icons) {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        plrImg.src = icon.src;
        plrChoice = icon.alt;
        playerStatus.innerText = "Game Status"
    } )
}

// Computer's Selection - Random
function computerPlays() {
    let options = ["rock", "paper", "scissor"];
    let randomNum = Math.floor(Math.random() *3);
    comChoice = options[randomNum];
    for (let icon2 of icons) {
        if (comChoice === icon2.alt) {
            comImg.src = icon2.src;
        }
    }
}

// Logic for deciding winner 
function gameLogic() {
    if (plrChoice === comChoice) {
        winStatus = "It's a Draw";
        playerStatus.innerText = winStatus;
    }
    else if (plrChoice === "rock" && comChoice === "paper" ) {
        winStatus = "Computer Wins !";
        playerStatus.innerText = winStatus;
    }
    else if (plrChoice === "rock" && comChoice === "scissor" ) {
        winStatus = "Player Wins !";
        playerStatus.innerText = winStatus;
    }
    else if (plrChoice === "paper" && comChoice === "rock" ) {
        winStatus = "Player Wins !";
        playerStatus.innerText = winStatus;
    }
    else if (plrChoice === "paper" && comChoice === "scissor" ) {
        winStatus = "Computer Wins !";
        playerStatus.innerText = winStatus;
    }
    else if (plrChoice === "scissor" && comChoice === "rock" ) {
        winStatus = "Computer Wins !";
        playerStatus.innerText = winStatus;
    }
    else if (plrChoice === "scissor" && comChoice === "paper" ) {
        winStatus = "Player Wins !";
        playerStatus.innerText = winStatus;
    }
}

// Function to Update Scores
function updateScore() {
    if (winStatus === "Player Wins !") {
        plrPoints += 1;
        plrScore.innerText = `Score: ${plrPoints}`;
    }
    else if (winStatus === "Computer Wins !") {
        comPoints += 1;
        comScore.innerText = `Score: ${comPoints}`;
    }
}

// EventListener to Start the Game
btnGo.addEventListener('click', (e) => {
    e.preventDefault();
    computerPlays();
    gameLogic();
    updateScore();
})

// EventListener to Reset Images and Scores
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    plrImg.src = "img/question-mark.png";
    plrPoints = 0;
    plrScore.innerText = `Score: ${plrPoints}`;
    comImg.src = "img/question-mark.png";
    comPoints = 0;
    comScore.innerText = `Score: ${comPoints}`;
})