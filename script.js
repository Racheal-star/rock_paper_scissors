const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let choice =
    randomNum === 0 ? "rock" : randomNum === 1 ? "paper" : "scissors";
  console.log(`Computer choice is ${choice}`);
  return choice;
};
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")


const getHumanChoice = () => {
  let btn_clicked = event.target
  let choice = btn_clicked.textContent
 return choice
};

let humanScore = 0;
let computerScore = 0;

