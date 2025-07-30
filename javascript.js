function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);

  if (value === 0) {
    return "rock";
  } else if (value === 1) {
    return "paper";
  } else {
    return "scissors";
  }
  
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper or scissors:");
  return choice.toLowerCase();
    
}