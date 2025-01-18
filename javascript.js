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
            humanScore++;
            console.log("You win! Rock beats Scissors");
        } else if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else {
            console.log("It is a tie");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if (computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        } else {
            console.log("It is a tie");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        } else if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        } else {
            console.log("It is a tie");
        }
    } else {
        console.log("Invalid input!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);