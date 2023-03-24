//Auto generated computer choice funtion
function getComputerChoice(){

    const compChoice = ["rock", "paper", "scissors"]

    const randomChoice = Math.floor(Math.random()*3);

    return compChoice[randomChoice];
}


const playerSelection = prompt("Choose Rock, Paper, or Scissors.");
const computerSelection = getComputerChoice();

function singleRound(playerSelection, computerSelection){

    const playerChoice = playerSelection.toLowerCase(playerSelection);
    const computerChoice = computerSelection;

    console.log(`You chose ${playerChoice}.`);
    console.log(`The computer chose ${computerChoice}.`);

    if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper")
    {
        console.log(`You win.`);
    }
    else if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "paper"){
        console.log(`You lose.`);
    }
    else if (playerChoice === computerChoice){
        console.log(`DRAW.`);
    }
    else{
        console.log(`Please choose ROCK, PAPER, OR SCISSORS. `);
    }
    

}

singleRound(playerSelection,computerSelection);