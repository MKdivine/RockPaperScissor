const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Show the scores
const showScore = document.createElement("div");
showScore.innerHTML = `Your score: ${humanScore} Computer score: ${computerScore}`;
document.body.appendChild(showScore);

// Show the choice
const choiceShow = document.createElement("div");
document.body.appendChild(choiceShow);

// Show the result
const result = document.createElement("div");
document.body.appendChild(result);

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

  choiceShow.appendChild(image);
  choiceShow.appendChild(button);
  choiceShow.appendChild(container);
});

// Button functionality and start the game

function playGame() {
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
playGame();
