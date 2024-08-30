const choice = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
  console.log("PC CHOICE: ")
  console.log(choice[Math.floor(Math.random() * 3)]);
}

getComputerChoice();

function getHumanChoice() {
 // return the choice alert
  let userInput = prompt("Enter your choice bro");
  if (choice.includes(userInput)) {
    //return userInput;
    console.log(`You chose ${userInput}`);
  }
}

getHumanChoice();

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log("It's a tie");
//   }
//   else if (humanChoice === "Rock" && computerChoice === "Scissors") {
//     console.log("You win this round");
//     humanScore++;
//   }
//   else if (humanChoice === "Paper" && computerChoice === "Rock") {
//     console.log("You win");
//     humanScore++;
//   }
//   else if (humanChoice === "Scissors" && computerChoice === "Paper") {
//     console.log("You win");
//     humanScore++;
//   }
//   else {
//     console.log("You lose");
//     computerScore++;
//   }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
