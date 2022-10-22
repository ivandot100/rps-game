let playerScore = 0; // Set player score to 0
let cpuScore = 0; // Set cpu score to 0

let getPlayerScore = document.querySelector("#player-score");
let getCpuScore = document.querySelector("#cpu-score");

let playerMove;
let cpuMove = ['rock', 'paper', 'scissors'];

let playerMoveShow = document.querySelector("#player-select");
let cpuMoveShow = document.querySelector("#cpu-select"); 
let moveResult = document.querySelector("#result");

function playerSelectRock()
{
  playerMoveShow.innerHTML = "✊";
  playerMove = 0;
  startRound();
}

function playerSelectPaper()
{
  playerMoveShow.innerHTML = "✋";
  playerMove = 1;
  startRound();
}

function playerSelectScissors()
{
  playerMoveShow.innerHTML = "✌️";
  playerMove = 2;
  startRound();
}

function startRound()
{
  cpuMove = Math.floor(Math.random() * 3)

  if (cpuMove == 0) cpuMoveShow.innerHTML = "✊";
  if (cpuMove == 1) cpuMoveShow.innerHTML = "✋";
  if (cpuMove == 2) cpuMoveShow.innerHTML = "✌️";

  if (playerMove == 0 && cpuMove == 0)
  {
    moveResult.textContent = "It's a tie!";
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 0 && cpuMove == 2)
  {
    moveResult.textContent = "You Win! Rock Beats Scissors!";
    playerScore++;
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 0 && cpuMove == 1)
  {
    moveResult.textContent = "You Lose! Paper Beats Rock!"
    cpuScore++;
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 1 && cpuMove == 1)
  {
    moveResult.textContent = "It's a tie!";
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 1 && cpuMove == 2)
  {
    moveResult.textContent = ("You Lose! Scissors Beats Paper!");
    cpuScore++;
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 1 && cpuMove == 0)
  {
    moveResult.textContent = ("You Win! Paper Beats Rock!");
    playerScore++;
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 2 && cpuMove == 2)
  {
    moveResult.textContent = ("It's a tie!");
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 2 && cpuMove == 1)
  {
    moveResult.textContent = ("You Win! Scissors Beats Rock!");
    playerScore++;
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
  else if (playerMove == 2 && cpuMove == 0)
  {
    moveResult.textContent = ("You Lose! Rock Beats Scissors!");
    cpuScore++;
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
    checkScore();
  }
}

function checkScore()
{
  if (playerScore == 5)
  {
    alert("You Won The Game!");
    playerScore = 0; // Will Reset The Score
    cpuScore = 0; // Will Reset The Score
    playerMoveShow.innerHTML = (" ");
    cpuMoveShow.innerHTML = (" ");
    moveResult.textContent = (" ");
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
  }
  else if (cpuScore == 5)
  {
    alert("You Lost The Game to a Computer!");
    playerScore = 0; // Will Reset The Score
    cpuScore = 0; // Will Reset The Score
    playerMoveShow.innerHTML = (" ");
    cpuMoveShow.innerHTML = (" ");
    moveResult.textContent = (" ");
    getPlayerScore.textContent = `Player Score: ${playerScore}`;
    getCpuScore.textContent = `CPU Score: ${cpuScore}`;
  }
}