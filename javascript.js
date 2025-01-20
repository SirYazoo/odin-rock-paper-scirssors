let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    if (rng === 0) {
        return "rock";
    } else if (rng === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors): ");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            return "win";
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            return "lose";
        } else {
            console.log("It is a tie");
            return "tie";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            return "win";
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            return "lose";
        } else {
            console.log("It is a tie");
            return "tie";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            return "win";
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            return "lose";
        } else {
            console.log("It is a tie");
            return "tie";
        }
    } else {
        console.log("Invalid input!");
    }
}

function playRoundButton(playerSelection) {
    const computerSelection = getComputerChoice();
    const container = document.createElement("div");
    let result = playRound(playerSelection, computerSelection);
    if (result === "win") {
        humanScore++;
        container.textContent = "You win!";
    } else if (result === "lose") {
        computerScore++;
        container.textContent = "You lose!";
    } else {
        container.textContent = "It is a tie";
    }
    body.appendChild(container);
    currentScoreContainer.textContent = `Current human score: ${humanScore} Current computer score: ${computerScore}`;
    if (humanScore === 5) {
        container.textContent = "The winner is Human with total score: " + humanScore;
        body.appendChild(container);
    }
    if (computerScore === 5) {
        container.textContent = "The winner is Computer with total score: " + computerScore;
        body.appendChild(container);
    }
}

const body = document.querySelector("body");
const currentScoreContainer = document.createElement("div")
currentScoreContainer.textContent = `Current human score: ${humanScore} Current computer score: ${computerScore}`;
body.appendChild(currentScoreContainer);

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => playRoundButton("rock"));
body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => playRoundButton("paper"));
body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => playRoundButton("scissors"));
body.appendChild(scissorsButton);