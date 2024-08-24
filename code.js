const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
     console.log(choice[Math.floor(Math.random() * 3)]); 
     
}

getComputerChoice()



function getHumanChoice() {
  let userInput = prompt("Enter your choice bro");
  if (userInput.toLowerCase() === "rock") {
    alert("Wow! Rock");
  } else if (userInput.toLowerCase() === "paper") {
    alert("Wow! Paper");
  } else if (userInput.toLowerCase() === "scissors") {
    alert("Wow! Scissors");
  } else {
    alert("Invalid input");
  }
}

getHumanChoice();
