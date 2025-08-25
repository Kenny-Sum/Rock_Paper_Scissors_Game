let humanScore = 0;
let computerScore = 0;

const display = document.querySelector("#display");

const rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", () => playRound(getComputerChoice(), "rock"));

const paperButton = document.querySelector("#paperBtn");
paperButton.addEventListener("click", () => playRound(getComputerChoice(), "paper"));

const scissorsButton = document.querySelector("#scissorsBtn");
scissorsButton.addEventListener("click", () => playRound(getComputerChoice(), "scissors"));

function getComputerChoice () {
    const list = ["rock", "paper", "scissors"];
    /* Math.random() returns a floating-point random number between 0 and 1*/
    /* Math.floor() rounds the number to the nearest integer */
    let random = Math.floor(Math.random()*3);
    return list[random];
}

function getHumanChoice () {
    let result = userInput.toLowerCase();
    return result;
}

function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice){
        display.textContent = "You have tied this round. Your score against the computer is: " + humanScore + " to " + computerScore;
        return "It's a tie!"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")){
        humanScore += 1
        display.textContent = "You won this round. Your score against the computer is: " + humanScore + " to " + computerScore;
        return "You Win!"
    } else {
        computerScore += 1
        display.textContent = "You lost this round. Your score against the computer is: " + humanScore + " to " + computerScore;
        return "You Lose!"
    }
}

function playGame(){
    playRound(getComputerChoice(), getHumanChoice());

    console.log("Your score is: " + humanScore);
    console.log("The computer score is: " + computerScore);

    if (humanScore > computerScore){
        console.log("Well done, you win the game. Your score: " + humanScore + ". Computer score: " + computerScore +".")
    } else if (humanScore === computerScore){
        console.log("You have tied with the computer. Your score: " + humanScore + ". Computer score: " + computerScore +".")
    } else{
        console.log("You have lost to a computer. Your score: " + humanScore + ". Computer score: " + computerScore +".")
    }
}

playGame();
