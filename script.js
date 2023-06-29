//Test
// Variables
let winMsg = "Victory 👑";
let loseMsg = "Defeat 💔";
let tieMsg = "Tie 🤝";

let moveList = ["Rock", "Paper", "Scissors"];

let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");
let playAgainButton = document.createElement("button");

// Function to compute the result of the game
function calcResult(move1, move2) {
  if (move1 === move2) {
    return tieMsg;
  } else if (
    (move1 === 0 && move2 === 2) ||
    (move1 === 1 && move2 === 0) ||
    (move1 === 2 && move2 === 1)
  ) {
    return winMsg;
  } else {
    return loseMsg;
  }
}

// Function to handle player move selection
function handlePlayerMove(move) {
  let computerMove = randomMove();
  let result = calcResult(move, computerMove);

  // Update move displays
  moveDisplays[0].textContent = `You played ${moveList[move]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

  // Update game status
  statusDisplay.textContent = result;

  // Hide buttons
  buttons.forEach((button) => {
    button.style.display = "none";
  });

  // Create and display "Play Again" button
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", resetGame);
  document.querySelector(".game-button-wrapper").appendChild(playAgainButton);
}

// Function to generate a random move for the computer
function randomMove() {
  return Math.floor(Math.random() * 3);
}

// Function to reset the game
function resetGame() {
  // Reset move displays
  moveDisplays[0].textContent = "";
  moveDisplays[1].textContent = "";

  // Reset game status
  statusDisplay.textContent = "Choose!";

  // Show buttons
  buttons.forEach((button) => {
    button.style.display = "inline-block";
  });

  // Remove "Play Again" button
  playAgainButton.removeEventListener("click", resetGame);
  playAgainButton.remove();
}

// Add event listeners to buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    handlePlayerMove(index);
  });
});

// Set initial game status
statusDisplay.textContent  = "Choose!";
