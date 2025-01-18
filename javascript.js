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

console.log(getHumanChoice());