const choice = ["rock", "paper", "scissors"];

// Button functionality and start the game

const body = document.querySelector("body");
// Buttons for Rock Paper Scissors
choice.forEach((element) => {
  const button = document.createElement("button");
  button.textContent = element;

  // Div für die Anzeige der Wahl
  const content = document.createElement("div");

  button.addEventListener("click", () => {
    console.log(`You chose ${element}`);
    content.textContent = `You chose: ${element}`;
    body.appendChild(content);
  });

  body.appendChild(button);
});

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
      console.log("It's a tie!");
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  if (humanScore === 5) {
    console.log("You are the winner!");
  } else {
    console.log("The computer is the winner!");
  }
}

// Game PC Choice
function getComputerChoice() {
  const weed = choice[Math.floor(Math.random() * 3)];
  console.log(`The computer chose ${weed}`);
  return weed;
}

// Game Human Choice
function getHumanChoice() {
  let userInput = prompt("Enter your choice").toLowerCase();
  if (choice.includes(userInput)) {
    console.log(`You chose ${userInput}`);
    return userInput;
  }
}

// Start the game
function startGame() {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    playGame();
  });
}
startGame();
