const choice = ["rock", "paper", "scissors"];

// Button functionality and start the game

function playGame(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;

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
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      console.log("You won the game!");
    } else {
      console.log("You lost the game!");
    }
    if (computerScore > 5) {
      console.log("You lost the game!");
    } else if (humanScore > 5) {
      console.log("You won the game!");
    }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playGame(humanSelection, computerSelection);


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
}
