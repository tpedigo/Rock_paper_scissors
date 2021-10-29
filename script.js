const startPage = document.querySelector(".start-page");
const startBtn = document.querySelector(".start-button");
const replayBtn = document.querySelector(".replay");
const gamePage = document.querySelector(".game-page");
const homeBtn = document.querySelector(".home-button");
const scores = document.querySelector(".scores");
const replay = document.querySelector(".replay");
const hands = document.querySelectorAll(".hand");
const currentComputerScore = document.querySelector(".current-computer-score");
const currentPlayerScore = document.querySelector(".current-player-score");
const roundDetails = document.querySelector(".round-details");

startBtn.addEventListener("click", toGamePage);
homeBtn.addEventListener("click", toHomePage);

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let handChoices = ["Rock", "Paper", "Scissors"];
    return handChoices[Math.floor(Math.random()*handChoices.length)];
}

function playerPlay(e) { 
    let playerSelection;
    if (e.currentTarget.id == "rock") {
        playerSelection = "Rock";
    } else if (e.currentTarget.id == "paper") {
        playerSelection = "Paper";
    } else if (e.currentTarget.id == "scissors") {
        playerSelection = "Scissors";
    }
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors.";
        }
        return "You lose! Paper beats Rock.";  

    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return  "You win! Scissors beats Paper.";
        }
        return  "You lose! Rock beats Scissors.";

    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return  "You win! Paper beats Rock.";
        }
        return  "You lose! Scissors beats Paper.";
    }
}
 function updateScore (roundOutcome) {
    if (roundOutcome.substring(0,7) === "You win") {
        playerScore += 1;
        currentPlayerScore.textContent = playerScore;
    } else if (roundOutcome.substring(0,8) === "You lose") {
        computerScore += 1;
        currentComputerScore.textContent = computerScore;
    }
 }

 function game(e) {   
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = playerPlay(e);
        let computerSelection = computerPlay();
        let roundOutcome = playRound(computerSelection, playerSelection);
        roundDetails.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${roundOutcome}`
        updateScore(roundOutcome);
    } else {
        if (playerScore === 5) {
            roundDetails.textContent = "You won the game - Congratulations!";
        } else {
            roundDetails.textContent = "You lost the game - nice try though!";
        }
        const playAgain = document.createElement("div");
        replay.style.display = "flex";
        replay.addEventListener("click", replayGame);
    }
 }

function replayGame(e) {
    replay.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    roundDetails.textContent = "New game! Choose your hand.";
    currentPlayerScore.textContent = 0;
    currentComputerScore.textContent = 0;
}

function toGamePage() {
    gamePage.style.display = "flex";
    startPage.style.display = "none";
    hands.forEach((hand) => {hand.addEventListener("click", game)});
}

function toHomePage() {
    playerScore = 0;
    computerScore = 0;
    currentComputerScore.textContent = 0;
    currentPlayerScore.textContent = 0;
    roundDetails.textContent = "Choose your hand!"
    startPage.style.display = "flex";
    gamePage.style.display = "none";
}