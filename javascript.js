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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === "win") {
            humanScore++;
        } else if (result === "lose") {
            computerScore++;
        }
        console.log("Current Human score: " + humanScore);
        console.log("Current Computer score: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("The winner is Human with total score: " + humanScore);
    } else if (humanScore < computerScore) {
        console.log("The winner is Computer with total score: " + computerScore);
    } else {
        console.log("The game resulted in a draw");
    }
}

playGame();