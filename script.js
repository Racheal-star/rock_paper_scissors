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


const playGame = () => {
let humanScore = 0;
let computerScore = 0;
const playRound = (hChoice, cChoice) => {
  if (hChoice === cChoice) {
    console.log("repeat this round");
  } else if (
    (hChoice === "rock" && cChoice === "scissors") ||
    (hChoice === "scissors" && cChoice === "paper") ||
    (hChoice === "paper" && cChoice === "rock")
  ) {
    console.log(
      `Your choice is ${hChoice} and computer choice is ${cChoice} you win`
    );
    humanScore++;
  }
  else {
    console.log(
      `Your choice is ${hChoice} and computer choice is ${cChoice} you lose`
    );
      computerScore++;

  }
  console.log(`human score ${humanScore} computer score ${computerScore}`)
};
for(let i=1; i <= 5; i++){
    const humanChoice = getHumanChoice(); 
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
}
console.log("=== GAME OVER! ===");
  console.log(`FINAL SCORE: Human ${humanScore} | Computer ${computerScore}`);
  
  if (humanScore > computerScore) {
    console.log("🎉 You are the overall WINNER! 🎉");
  } else if (computerScore > humanScore) {
    console.log("🤖 The Computer is the overall WINNER! 🤖");
  } else {
    console.log("🤝 The game ends in a TIE! 🤝");
  }
}
playGame();
