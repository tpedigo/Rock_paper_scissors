function computerPlay() {
    let handChoices = ["ROCK", "PAPER", "SCISSORS"];
    return handChoices[Math.floor(Math.random()*handChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            return "You win! Rock beats Scissors";
        }
        return "You lose! Paper beats Rock";  

    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            return "You win! Scissors beats Paper";
        }
        return "You lose! Rock beats Scissors";

    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return "You win! Paper beats Rock";
        }
        return "You lose! Scissors beats Paper";
    } else {
        return `Invalid input. "${playerSelection}" is not an option. Make sure spelling is correct!`
    }
}

function game() {
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    while (roundCount < 5) {
        let playerSelection = prompt("Choose rock, paper, or scissors", "");
        playerSelection = playerSelection.toUpperCase();
        console.log(`You chose: ${playerSelection}.`);

        let computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}.`);

        let roundOutcome = playRound(playerSelection, computerSelection);
        if (roundOutcome.substring(0, 7) == "You win") {
            playerScore += 1;
        } else if (roundOutcome.substring(0, 7) === "Invalid") {
            console.log(roundOutcome);
            continue;
        } else if (roundOutcome.substring(0, 8) === "You lose") {
            computerScore += 1;
        }
        roundCount += 1;
        if (roundCount === 5) {
            console.log(`${roundOutcome}\nYour final score is: ${playerScore}.\nComputer final score is: ${computerScore}.`);
        } else if (roundCount === 4) {
            console.log(`${roundOutcome}\nYour score is: ${playerScore}.\nComputer score is: ${computerScore}. There is 1 round left.`);
        } else {
            console.log(`${roundOutcome}\nYour score is: ${playerScore}.\nComputer score is: ${computerScore}. There are ${5-roundCount} rounds left.`);
        }
    }
    if (playerScore > computerScore) {
        console.log("You won the game - congratulations!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game - good luck next time!");
    } else {
        console.log("Tie game!");
    }
}

game();


// Possible (not finalized) second way to write playRound function:

// function playRound2(playerSelection, computerSelection) {
//     (computerSelection == playerSelection) ? "Tie!" : 
//     (playerSelection == "Rock" && computerSelection == "Scissors") ? "You win! Rock beats Scissors" :
//     (playerSelection == "Rock" && computerSelection == "Paper") ? "You lose! Paper beats Rock" :
//     (playerSelection == "Scissors" && computerSelection == "Paper") ? "You win! Scissors beats Paper" :
//     (playerSelection == "Scissors" && computerSelection == "Rock") ? "You lose! Rock beats Scissors" :
//     (playerSelection == "Paper" && computerSelection == "Rock") ? "You win! Paper beats Rock" :
//     (playerSelection == "Paper" && computerSelection == "Scissors") ? "You lose! Scissors beats Paper";
// }

// function playRound3(playerSelection, computerSelection)
