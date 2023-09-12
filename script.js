//write a function that randomly returns rock, paper or scissors
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"]
  var choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

let playerScore= 0;
let computerScore= 0;

//create a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  console.log('Player:'+ ' ' + playerSelection);
  console.log('Computer:'+ ' ' + computerSelection); 

  if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
    playerScore = playerScore + 1;
    return "You won.";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
    playerScore = playerScore + 1;
    return "You won.";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
    playerScore = playerScore + 1;
    return "You won.";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock"){
    computerScore = computerScore + 1;
    return "You lost.";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
    computerScore = computerScore + 1;
    return "You lost.";
  } else if (playerSelection.toLowerCase == "rock" && computerSelection == "Paper") {
    computerScore = computerScore + 1;
    return "You lost.";
  } else {
    return "Draw.";
  }
}
console.log("Player Score:" + playerScore);
console.log("Computer Score:" + computerScore);

function game(){
  const playerSelection="Rock";
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
}

game();

if (computerScore > playerScore){
  console.log("You lost the game. Try again!");
} else if (playerScore > computerScore) {
  console.log ("You won the game. Congrats!");
}
  else {
    console.log("There's a tie. Try again!");
  }
