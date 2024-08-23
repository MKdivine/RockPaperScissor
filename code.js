const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
     console.log(choice[Math.floor(Math.random() * 3)]); 
     
}

getComputerChoice()

let userInput = prompt("Enter your choice bro");
function getHumanChoice() {
    if (userInput.toLowerCase() === "Rock") {
        alert("Wow! Rock");
      }
    elif (userInput.toLowerCase() === "Paper") {
        alert("Wow! Paper");
      }
    elif (userInput.toLowerCase() === "Scissors") {
        alert("Wow! Scissors");
      }
    else {
        alert("Invalid input");
    }
}