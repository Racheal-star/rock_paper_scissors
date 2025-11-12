let displayHumanScore = document.getElementById('human-score')
let displayComputerScore = document.getElementById('computer-score')
let display = document.getElementById('display')
let winner = document.getElementById('winner')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let humanScore = 0;
let computerScore = 0;
let MAX_SCORE = 5;
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let choice =
    randomNum === 0 ? "rock" : randomNum === 1 ? "paper" : "scissors";
  console.log(`Computer choice is ${choice}`);
  return choice;
};
const getHumanChoice = () => {
  let choice = prompt("Enter your choice");
  choice = choice.toLowerCase();
  console.log(`Human choice is ${choice}`);
  return choice;
};

const playRound = (hChoice, cChoice) => {
    if (humanScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
        return;
    }
  if (hChoice === cChoice) {
    display.textContent = `Your choice is ${hChoice} and computer choice is ${cChoice}, repeat this round`
  } else if (
    (hChoice === "rock" && cChoice === "scissors") ||
    (hChoice === "scissors" && cChoice === "paper") ||
    (hChoice === "paper" && cChoice === "rock")
  ) {
    display.textContent = `Your choice is ${hChoice} and computer choice is ${cChoice} you win`
    humanScore++;
  }
  else {
    
      display.textContent = `Your choice is ${hChoice} and computer choice is ${cChoice} you lose`
    
      computerScore++;

  }
  displayHumanScore.textContent = humanScore
  displayComputerScore.textContent = computerScore
  console.log(`human score ${humanScore} computer score ${computerScore}`)
 
};
rock.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("rock", computerChoice)
}) 
paper.addEventListener("click",  () => {
        const computerChoice = getComputerChoice()
         playRound("paper", computerChoice)
}) 
scissors.addEventListener("click",  () => {
        const computerChoice = getComputerChoice();
        playRound("scissors", computerChoice)
} )
