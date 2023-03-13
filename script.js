function getComputerChoice(){

    const choices = ["rock","paper","scissors"]

    let randomChoice = Math.floor(Math.random()*3);

    //return randomChoice;

    //Generate Random Computer Choice

    if(randomChoice === 0){
        console.log(`The computer chose ${choices[randomChoice]}`);
    }
    else if (randomChoice === 1){
        console.log(`The computer chose ${choices[randomChoice]}`);
    }
    else{
        console.log(`The computer chose ${choices[randomChoice]}`);
    }

    console.log(randomChoice);

}

getComputerChoice();