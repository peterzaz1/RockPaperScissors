const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const playerGuiScore = document.querySelector(".player-score");
const computerGuiScore = document.querySelector(".computer-score");

const gameOverGui = document.querySelector("#game-over");

const status = document.querySelector("#status");

let playerMove;
let playerScore = 0;
let computerScore = 0;

let winer;

ROCK.addEventListener("click", rockLog);
PAPER.addEventListener("click", paperLog);
scissor.addEventListener("click", scissorLog);

function computerMOVE() {
  let randomChoise = Math.floor(Math.random() * 3) + 1;
  switch (randomChoise) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}

function play(playerMove, computerMOVE) {
  if (playerMove == computerMOVE) {
    return `${playerMove} and ${computerMOVE} is a draw`;
  } else if (
    (playerMove == "rock" && computerMOVE == "scissor") ||
    (playerMove == "scissor" && computerMOVE == "paper") ||
    (playerMove == "paper" && computerMOVE == "rock")
  ) {
    playerScore++;
    playerGuiScore.textContent = playerScore;
    status.textContent = `you win ${playerMove} beats ${computerMOVE}`;
  } else if (
    (playerMove == "scissor" && computerMOVE == "rock") ||
    (playerMove == "paper" && computerMOVE == "scissor") ||
    (playerMove == "rock" && computerMOVE == "paper")
  ) {
    computerScore++;
    computerGuiScore.textContent = computerScore;
    status.textContent = `you lose ${computerMOVE} beats ${playerMove} `;
  }
}

function rockLog() {
  play("rock", computerMOVE());
  gameOver();
}

function paperLog() {
  play("paper", computerMOVE());

  gameOver();
}

function scissorLog() {
  play("scissor", computerMOVE());
  gameOver();
}

function gameOver() {
  if (playerScore === 5 || computerScore === 5) {
    ROCK.removeEventListener("click", rockLog);
    PAPER.removeEventListener("click", paperLog);
    scissor.removeEventListener("click", scissorLog);
    if (playerScore > computerScore) {
      winer = `you win `;
    } else {
      winer = `computer win`;
    }

    gameOverGui.textContent = winer;
  }
}
