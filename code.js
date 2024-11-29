const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const gameStats = document.createElement("div");
document.body.appendChild(gameStats);

// Show the scores
const showScore = document.createElement("div");
showScore.innerHTML = `Your score: ${humanScore} Computer score: ${computerScore}`;
document.body.appendChild(showScore);

// Show the choice
const choiceShow = document.createElement("div");
document.body.appendChild(choiceShow);
// Show the result
// Create Buttons

choice.forEach((choice, x) => {
  const baseURL = "bilder/";
  const container = document.createElement("div");
  container.classList.add("icon");

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
  choiceShow.appendChild(container);
});

// Button functionality and start the game

function playGame(humanSelection) {
  const computerSelection = getComputerChoice();

  if (humanSelection === computerSelection) {
    gameStats.textContent = `It's a tie! Both chose ${humanSelection}.`;

  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    gameStats.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
    humanScore++;
  } else {
    gameStats.textContent = `You lose! ${humanSelection} beats ${computerSelection}`;
    computerScore++;
  }

  showScore.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

  if (humanScore === 5) {
    gameStats.textContent = `You win: ${humanScore} against ${computerScore}`;
    resetGame()
  } else if (computerScore === 5) {
    gameStats.textContent = `The computer wins: ${computerScore}`;
    resetGame() 
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  showScore.textContent = `Game Reset: ${humanScore} | Computer score: ${computerScore}`;
}



// Game PC Choice
function getComputerChoice() {
  const weed = choice[Math.floor(Math.random() * 3)];
  console.log(`The computer chose ${weed}`);
  return weed;
}
