const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanRoundScore = 0;
let computerRoundScore = 0;

const gameStats = document.createElement("div");
document.body.appendChild(gameStats);

const roundview = document.createElement("div");
document.body.appendChild(roundview);

// Show the scores
const showScore = document.createElement("div");
showScore.innerHTML = `Your score: ${humanScore} | Computer score: ${computerScore}`;
document.body.appendChild(showScore);

// Show the choice
const choiceShow = document.createElement("div");
document.body.appendChild(choiceShow);

// Create Buttons
choice.forEach((choice, x) => {
  const baseURL = "bilder/";

  const button = document.createElement("button");
  button.textContent = choice;
  button.classList.add("icon");

  const image = document.createElement("img");
  image.src = `${baseURL}${x + 1}.png`;
  image.classList.add("icon");

  button.addEventListener("click", () => {
    playGame(choice);
  });

  choiceShow.appendChild(image);
  choiceShow.appendChild(button);
});

// Game PC Choice
function getComputerChoice() {
  const weed = choice[Math.floor(Math.random() * 3)];
  console.log(`The computer chose ${weed}`);
  return weed;
}

// Play the game
function playGame(humanSelection) {
  const computerSelection = getComputerChoice();

  if (humanSelection === computerSelection) {
    gameStats.textContent = `It's a tie! Both chose ${humanSelection}.`;
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    gameStats.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;
    humanScore++;
  } else {
    gameStats.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;
    computerScore++;
  }

  showScore.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      gameStats.textContent += ` You win the round!`;
      humanRoundScore++;
    } else {
      gameStats.textContent += ` The computer wins the round!`;
      computerRoundScore++;
    }
    roundview.textContent = `You won: ${humanRoundScore} rounds | PC won: ${computerRoundScore} rounds`;
    createResetButton();
  }
}

// Create Reset Button
function createResetButton() {
  let resetButton = document.querySelector("#resetButton");
  if (!resetButton) {
    resetButton = document.createElement("button");
    resetButton.textContent = "Play again";
    resetButton.id = "resetButton";
    gameStats.appendChild(resetButton);

    resetButton.addEventListener("click", resetGame);
  }
}

// Reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;

  showScore.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
  gameStats.textContent = "The game has been reset!";
  const resetButton = document.querySelector("#resetButton");
  if (resetButton) {
    resetButton.remove();
  }
}
