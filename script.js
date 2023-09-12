//write a function that randomly returns rock, paper or scissors
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"]
  var choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

//create a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  console.log('Player:'+ ' ' + playerSelection);
  console.log('Computer:'+ ' ' + computerSelection); 

  if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
    return "You won.";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
    return "You won.";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
    return "You won.";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock"){
    return "You lost.";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
    return "You lost.";
  } else if (playerSelection.toLowerCase == "rock" && computerSelection == "Paper") {
    return "You lost.";
  } else {
    return "Draw.";
  }
}

function game(){
  const playerSelection="Rock";
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playRound(playerSelection, getComputerChoice()));
}

game();