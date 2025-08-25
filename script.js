let humanScore = 0;
let computerScore = 0;

const displayImg = document.querySelector("#displayImg");
const displayInfo = document.querySelector("#displayInfo");
const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const handsignSection = document.querySelector("#handsigns");

function getComputerChoice () {
    const list = ["rock", "paper", "scissors"];
    /* Math.random() returns a floating-point random number between 0 and 1*/
    /* Math.floor() rounds the number to the nearest integer */
    let random = Math.floor(Math.random()*3);
    return list[random];
}

function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice){
        displayInfo.textContent = "You have tied this round. Your score against the computer is: " + humanScore + " to " + computerScore;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")){
        humanScore += 1
        
        displayInfo.textContent = "You won this round. Your current score against the computer is: " + humanScore + " to " + computerScore;
    } else {
        computerScore += 1
        displayInfo.textContent = "You lost this round. Your current score against the computer is: " + humanScore + " to " + computerScore;
    }
    if (humanScore === 5){
        display.textContent = "Congrats! You have win against the Computer. Your current score against the computer is: " + humanScore + " to " + computerScore;
        handsignSection.removeChild(rockButton);
        handsignSection.removeChild(paperButton);
        handsignSection.removeChild(scissorsButton);
    }
    else if (computerScore === 5){
        displayInfo.textContent = "Sorry! You have lost against the Computer. Your current score against the computer is: " + humanScore + " to " + computerScore;
        handsignSection.removeChild(rockButton);
        handsignSection.removeChild(paperButton);
        handsignSection.removeChild(scissorsButton);
    }
}

function playGame(){
    rockButton.addEventListener("click", () => playRound(getComputerChoice(), "rock"));
    paperButton.addEventListener("click", () => playRound(getComputerChoice(), "paper"));
    scissorsButton.addEventListener("click", () => playRound(getComputerChoice(), "scissors"));
}

playGame();
