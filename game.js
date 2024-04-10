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

// Function that plays 5 rounds, keeps a score and returns the final winner
// Pseudocode:
// 1. take player's choice
// 2. take computer's choice
// 3. compare both choices
// 4. count the win for the player or the computer 
// 5. show results of the round: player's choice, computer's choice, winner and current score
// 6. repeat steps 1-5 five times
// 7. show the final score and winner
function playGame() {
  let playerChoice;
  let computerChoice;
  let playerCount = 0;
  let computerCount = 0;
  let result;
  for (let i = 0; i < 5; i++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    console.log(`You choose ${playerChoice} and computer chooses ${computerChoice}`);
    if (result === "You win!") {
      playerCount++;
    }
    else if (result === "You lose!") {
      computerCount++;
    }
    console.log(result);
    console.log(`${playerCount} Player - Computer ${computerCount}`);
  }
  if (playerCount > computerCount) {
    console.log("You win the game!")
  }
  else if (computerCount > playerCount) {
    console.log("You lose the game!")
  }
  else {
    console.log("You tie the game!")
  }
}

playGame();



