let counterPlayer = 0;
let counterComputer = 0;
let counterRound = 0;

const buttonRock = document.querySelector(".buttons .rock");
const buttonPaper = document.querySelector(".buttons .paper");
const buttonScissors = document.querySelector(".buttons .scissors");
const playerScoreBoard = document.querySelector(".scoreboard .player");
const computerScoreBoard = document.querySelector(".scoreboard .computer");
const roundNumberBoard = document.querySelector(".scoreboard .round");
const messageBoard = document.querySelector(".messageBoard");
const playerScore = document.querySelector(".scoreboard .player span");
const computerScore = document.querySelector(".scoreboard .computer span");
const roundNumber = document.querySelector(".scoreboard .round span");
const message = document.querySelector(".messageBoard span");

buttonRock.addEventListener( "click", () => playRound("rock", getComputerChoice()) );
buttonPaper.addEventListener( "click", () => playRound("paper", getComputerChoice()) );
buttonScissors.addEventListener( "click", () => playRound("scissors", getComputerChoice()) );

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

// This function plays a round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  counterRound++;
  roundNumber.textContent = counterRound;
  if (playerSelection === computerSelection) {
    message.textContent = "You tie this round!"
  }
  else if ( (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock") ) {
    counterComputer++;
    computerScore.textContent = counterComputer;
    message.textContent = "You lose this round!";
  }
  else {
    counterPlayer++;
    playerScore.textContent = counterPlayer;
    message.textContent = "You win this round!";
  }

  if (counterComputer === 5 || counterPlayer === 5) {
    if (counterComputer === 5) { 
      message.textContent = "You lose the game! Better luck next time.";
    }
    else {
      message.textContent = "Congratulations! You win the game!";
    }
  }
}

function resetGame() {
  counterPlayer = 0;
  counterComputer = 0;
  counterRound = 0;
  playerScore.textContent = counterPlayer;
  computerScore.textContent = counterComputer;
  roundNumber.textContent = counterRound;
}


