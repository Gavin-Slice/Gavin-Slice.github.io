const myArr = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;
let gameOver = false;

const playerScoreDisplay = document.querySelector(".playerScore .count");
const computerScoreDisplay = document.querySelector(".computerScore .count");
const resultDisplay = document.querySelector(".result");
const movesLeftDisplay = document.querySelector(".movesleft");
const options = document.querySelectorAll(".options button");
const reloadBtn = document.querySelector(".reload");

// Function to randomly choose computer's move
function computerPlay() {
  return myArr[Math.floor(Math.random() * 3)];
}

// Function to play one round of the game
function playRound(playerSelection, computerSelection) {
  if (gameOver) {
    return;
  }

  movesLeft--;
  movesLeftDisplay.textContent = `Moves Left: ${movesLeft}`;

  if (playerSelection === computerSelection) {
    resultDisplay.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    resultDisplay.textContent = "You win!";
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "You lose!";
  }

  if (movesLeft === 0) {
    gameOver = true;
    resultDisplay.textContent = playerScore > computerScore ? "You won the game!" : "You lost the game!";
    reloadBtn.style.display = "block";
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  movesLeft = 10;
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  resultDisplay.textContent = "";
  movesLeftDisplay.textContent = `Moves Left: ${movesLeft}`;
  reloadBtn.style.display = "none";
  gameOver = false;
}

// Event listener for each button option
options.forEach(option => {
  option.addEventListener("click", () => {
    playRound(option.textContent.toLowerCase(), computerPlay());
  });
});

// Event listener for reload button
reloadBtn.addEventListener("click", () => {
  resetGame();
});

// Initial game setup
movesLeftDisplay.textContent = `Moves Left: ${movesLeft}`;
