const buttonRock = document.querySelector(".buttons .rock");
const buttonPaper = document.querySelector(".buttons .paper");
const buttonScissors = document.querySelector(".buttons .scissors");

buttonRock.addEventListener("click", () => console.log(playRound("rock", getComputerChoice()) ) );
buttonPaper.addEventListener("click", () => console.log(playRound("paper", getComputerChoice()) ) );
buttonScissors.addEventListener("click", () => console.log(playRound("scissors", getComputerChoice()) ) );

// This function generates a random integer between two values
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// This function returns the computer choice based in a random integer between 1 and 3
function getComputerChoice() { 
  let choiceNumber = getRandomInt(1,4); // 1: rock 2: paper 3: scissors
  
  switch (choiceNumber) {
    case 1:
      return "rock";
    case 2: 
      return "paper";
    case 3:
      return "scissors";
  }
}

// This function returns the player's choice
function getPlayerChoice() {
  let choice = prompt("Choose rock, paper or scissors: ");
  return choice;
}

// This function plays a round and returns the result
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "tie";
  }
  else if ( (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock") ) {
    return "lose";
  }
  else {
    return "win";
  }
}


