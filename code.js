const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Button functionality and start the game

function startGame() {
  console.log("Der Button wurde geklickt!");
  //
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

// Den Button mit querySelector auswählen und Event-Listener hinzufügen
document.querySelector("#game").addEventListener("click", startGame);

// Game PC Choice
function getComputerChoice() {
  const weed = choice[Math.floor(Math.random() * 3)];
  console.log(`The computer chose ${weed}`);
  return weed;
}

// Game Human Choice
function getHumanChoice() {
  // return the choice alert
  let userInput = prompt("Enter your choice").toLowerCase();
  if (choice.includes(userInput)) {
    //return userInput;
    console.log(`You chose ${userInput}`);
    return userInput;
  }
}

function playRound(humanChoice, computerChoice) {
  let n = 0;

  while (n < 5) {
    console.log(`Its round number ${n}`)
    n++;

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }
  }
}
