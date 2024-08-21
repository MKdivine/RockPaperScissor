const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
     console.log(choice[Math.floor(Math.random() * 3)]); 
     
}

getComputerChoice()