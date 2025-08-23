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

