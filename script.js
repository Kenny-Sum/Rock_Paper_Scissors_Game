/* Sets the score to zero for both human and computer. */
let humanScore = 0;
let computerScore = 0;

const displayImg = document.querySelector("#displayImg");

const displayInfo = document.querySelector("#displayInfo");
const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
const handsignSection = document.querySelector("#handsigns");

/* getHumanChoiceRock function appends rock image on display and return rock.*/
function getHumanChoiceRock(){
        displayImg.innerHTML = ""; // Clears all the child elements within displayImg element.
        const rockElement = document.createElement('img'); // Create an <img> element
        rockElement.src = "images/rock.png" // Set the image source
        rockElement.alt = 'Rock'; 
        rockElement.width = 100; 
        displayImg.appendChild(rockElement);
        displayImg.append("vs");
    return "rock"
}

/* getHumanChoicePaper function appends paper image on display and return paper.*/
function getHumanChoicePaper(){
    displayImg.innerHTML = ""; // Clears all the child elements within displayImg element.
    const paperElement = document.createElement('img'); // Create an <img> element
    paperElement.src = "images/paper.png" // Set the image source
    paperElement.alt = 'paper'; 
    paperElement.width = 100; 
    displayImg.appendChild(paperElement);
    displayImg.append("vs");
    return "paper"
}

/* getHumanChoiceScissors function appends scissors image on display and return scissors.*/
function getHumanChoiceScissors(){
    displayImg.innerHTML = ""; // Clears all the child elements within displayImg element.
    const scissorsElement = document.createElement('img'); // Create an <img> element
    scissorsElement.src = "images/scissors.png" // Set the image source
    scissorsElement.alt = 'scissors'; 
    scissorsElement.width = 100; 
    displayImg.appendChild(scissorsElement);
    displayImg.append("vs");
    return "scissors"
}

function getComputerChoice () {
    const list = ["rock", "paper", "scissors"];
    /* Math.random() returns a floating-point random number between 0 and 1*/
    /* Math.floor() rounds the number to the nearest integer */
    let random = Math.floor(Math.random()*3);
    chosenHandSign = list[random]
    if (chosenHandSign === "rock"){
        const rockElement = document.createElement('img'); // Create an <img> element 
        rockElement.src = "images/rock.png" // Set the image source
        rockElement.alt = 'Rock'; 
        rockElement.width = 100; 
        displayImg.appendChild(rockElement);
    } else if (chosenHandSign === "paper"){
        const paperElement = document.createElement('img'); // Create an <img> element
        paperElement.src = "images/paper.png" // Set the image source
        paperElement.alt = 'paper'; 
        paperElement.width = 100; 
        displayImg.appendChild(paperElement);
    } else if (chosenHandSign === "scissors"){
        const scissorsElement = document.createElement('img'); // Create an <img> element
        scissorsElement.src = "images/scissors.png" // Set the image source
        scissorsElement.alt = 'scissors'; 
        scissorsElement.width = 100; 
        displayImg.appendChild(scissorsElement);
    }
    return chosenHandSign;
}

/* The playround function append 1 to either human score or the computer score 
depending on which hand sign was chosen for both sides. A tie is also possible.*/
function playRound(humanChoice, computerChoice){
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

    /* If either score reaches 5 for either the user or the computer, the game ends and a winner is shown.*/
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

/* This function allows the user to begin the game and click which button to press (handsign to choose) to compete against the computer. */
function playGame(){
    rockButton.addEventListener("click", () => playRound(getHumanChoiceRock(), getComputerChoice()));
    paperButton.addEventListener("click", () => playRound(getHumanChoicePaper(), getComputerChoice()));
    scissorsButton.addEventListener("click", () => playRound(getHumanChoiceScissors(), getComputerChoice()));
}

playGame();

/* Further improvements - Replace the first parameter on function playRound() with a another function called humanChoice(), 
   which allows it to add hand signs to the display in the html.*/