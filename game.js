let counterPlayer = 0;
let counterComputer = 0;
let counterRound = 0;

const buttonRock = document.querySelector(".buttons .rock");
const buttonPaper = document.querySelector(".buttons .paper");
const buttonScissors = document.querySelector(".buttons .scissors");
const buttonReset = document.querySelector(".buttonReset");
const playerScoreBoard = document.querySelector(".scoreboard .player");
const computerScoreBoard = document.querySelector(".scoreboard .computer");
const roundNumberBoard = document.querySelector(".scoreboard .round");
const messageBoard = document.querySelector(".messageBoard");
const playerScore = document.querySelector(".scoreboard .player span");
const computerScore = document.querySelector(".scoreboard .computer span");
const roundNumber = document.querySelector(".scoreboard .round span");
const message = document.querySelector(".messageBoard span");

buttonRock.addEventListener( "click", () => playRound("ROCK", getComputerChoice()) );
buttonPaper.addEventListener( "click", () => playRound("PAPER", getComputerChoice()) );
buttonScissors.addEventListener( "click", () => playRound("SCISSORS", getComputerChoice()) );
buttonReset.addEventListener("click", resetGame);
buttonRock.addEventListener("mouseenter", () => buttonRock.style.backgroundColor = "#E1341E");
buttonPaper.addEventListener("mouseenter", () => buttonPaper.style.backgroundColor = "#E1341E");
buttonScissors.addEventListener("mouseenter", () => buttonScissors.style.backgroundColor = "#E1341E");
buttonReset.addEventListener("mouseenter", () => buttonReset.style.backgroundColor = "#E1341E");
buttonRock.addEventListener("mouseleave", () => buttonRock.style.backgroundColor = "#1ECBE1");
buttonPaper.addEventListener("mouseleave", () => buttonPaper.style.backgroundColor = "#1ECBE1");
buttonScissors.addEventListener("mouseleave", () => buttonScissors.style.backgroundColor = "#1ECBE1");
buttonReset.addEventListener("mouseleave", () => buttonReset.style.backgroundColor = "#1ECBE1");

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
      return "ROCK";
    case 2: 
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

// This function plays a round
function playRound(playerSelection, computerSelection) {
  counterRound++;
  roundNumber.textContent = counterRound;
  if (playerSelection === computerSelection) {
    message.textContent = `Both chose ${playerSelection} so you tie this round!`
  }
  else if ( (playerSelection === "ROCK" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
            (playerSelection === "SCISSORS" && computerSelection === "ROCK") ) {
    counterComputer++;
    computerScore.textContent = counterComputer;
    message.textContent = `${computerSelection} beats ${playerSelection} so you lose this round!`;
  }
  else {
    counterPlayer++;
    playerScore.textContent = counterPlayer;
    message.textContent = `${playerSelection} beats ${computerSelection} so you win this round!`;
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
  message.textContent = "Let's play again!";
}