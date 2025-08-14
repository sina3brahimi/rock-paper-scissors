function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  }
  else if (choice === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  let selection = prompt("Choose rock, paper, or scissors:");
  return selection.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let result = playRound(humanChoice, computerChoice);

    if (result === "win") {
      humanScore++;
      console.log(`Round ${round}: You win!`);
    } else if (result === "lose") {
      computerScore++;
      console.log(`Round ${round}: You lose!`);
    } else {
      console.log(`Round ${round}: It's a tie!`)
    }
  }
  if (humanScore > computerScore) {
    console.log("You win the game!")
  } else if (humanScore < computerScore) {
    console.log("You lose the game!")
  } else {
    console.log("You tied the game!")
  }
}

playGame();

