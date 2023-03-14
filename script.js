
//Randomly return rock,paper, or scissors
function getComputerChoice(){

    const choices = ["rock","paper","scissors"];

    let randomChoice = Math.floor(Math.random()*3);

    // //Generate Random Computer Choice
    // if(randomChoice === 0){
    //     console.log(`The computer chose ${choices[randomChoice]}`);
    // }
    // else if (randomChoice === 1){
    //     console.log(`The computer chose ${choices[randomChoice]}`);
    // }
    // else{
    //     console.log(`The computer chose ${choices[randomChoice]}`);
    // }

    return choices[randomChoice];

}

const computerSelection = getComputerChoice();
const playerSelection = prompt("");


function playRound(playerSelection, computerSelection ){

    const playerChoice = playerSelection.toLowerCase(playerSelection);
    const computerChoice = computerSelection;

    if(playerChoice === "rock" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "rock"){
        return `The computer chose ${computerChoice}. You lost.`;
    }
    else if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "scissors"){
        
        return `The computer chose ${computerChoice}. You win.`;
    }
    else if(playerChoice == "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock"){

        return `The computer chose ${computerChoice}. You win.`;

    }
    else if (playerChoice === computerChoice){
        return `The computer chose ${computerChoice} and you chose ${playerChoice}. It's a draw.`;
    }

    console.log();
}

playRound(playerSelection, computerSelection);

