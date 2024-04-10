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

// This function plays a round and returns the result
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  else if ( (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock") ) {
    return "You lose!";
  }
  else {
    return "You win!";
  }

}
