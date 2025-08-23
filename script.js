let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const list = ["rock", "paper", "scissors"];
    /* Math.random() returns a floating-point random number between 0 and 1*/
    /* Math.floor() rounds the number to the nearest integer */
    let random = Math.floor(Math.random()*3);
    return list[random];
}

function getHumanChoice () {
    let userInput = prompt("Which sign are you going to use? (rock, paper or scissors)?: ");
    let result = userInput.toLowerCase();
    return result;
}

/*console.log(getComputerChoice());
console.log(getHumanChoice());*/

function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice){
        return "It's a tie!"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")){
        humanScore += 1
        console.log(humanScore)
        return "You Win!"
    } else {
        computerScore += 1
        console.log(computerScore)
        return "You Lose!"
    }
}

/* console.log(playRound(getComputerChoice(), getHumanChoice())); */