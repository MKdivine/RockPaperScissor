let humanScore = 0;
let computerScore = 0;

// Initial Choice
const choice = ["rock", "paper", "scissors"];

// Button functionality
const body = document.body;

  

// Button Loop

  choice.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    
    button.addEventListener("click", () => {
      console.log(`You chose ${choice}`);
    });
    body.appendChild(button);
    
  });

  // Results 

  const results = document.createElement("div");
  results.textContent = `Results:  ${humanScore} - ${computerScore}`;
  
  body.appendChild(results);
  


// Button functionality and start the game
function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  while (true) {
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

    


    

    // Ask if the user wants to keep playing
    const continueGame = prompt(
      "Do you want to keep playing? (yes/no)"
    ).toLowerCase();
    if (continueGame !== "yes") {
      console.log("Thanks for playing!");
      break;
    }
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
