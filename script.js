


const playerSelection = prompt("Choose Rock, Paper, or Scissors.");
const computerSelection = getComputerChoice();

//Auto generated computer choice funtion
function getComputerChoice(){

    const compChoice = ["rock", "paper", "scissors"]

    const randomChoice = Math.floor(Math.random()*3);

    return compChoice[randomChoice];
}

function playRound(playerSelection, computerSelection){

    const playerChoice = playerSelection.toLowerCase(playerSelection);
    const computerChoice = computerSelection;

    let result = "";

    if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper")
    {
        return result = `You chose ${playerChoice}. The computer chose ${computerChoice}. YOU WIN.`;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "paper"){
        return result = `You chose ${playerChoice}. The computer chose ${computerChoice}. YOU LOSE.`;
    }
    else if (playerChoice === computerChoice){
        return result = `You chose ${playerChoice}. The computer chose ${computerChoice}. DRAW.`;
    }
    else{
        return result = `Please choose ROCK, PAPER, OR SCISSORS. `;
    }
    

}



function game(){
    playRound(playerSelection,computerSelection);

    console.log(playRound(playerSelection,computerSelection));
}

game();