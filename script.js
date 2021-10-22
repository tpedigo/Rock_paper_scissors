function computerPlay() {
    let handChoices = ["ROCK", "PAPER", "SCISSORS"];
    return handChoices[Math.floor(Math.random()*handChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie! Choose again.";
    }
    else if (playerSelection == "ROCK") {
            if (computerSelection == "SCISSORS") {
                return "You win! Rock beats Scissors";
            }
            else if (computerSelection == "PAPER") {
                return "You lose! Paper beats Rock";
            }    
    }
    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            return "You win! Scissors beats Paper";
        }
        else if (computerSelection == "ROCK") {
            return "You lose! Rock beats Scissors";
        }
    }
    else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "SCISSORS") {
            return "You lose! Scissors beats Paper";
        }
    }
}

