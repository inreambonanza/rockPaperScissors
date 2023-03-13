function getComputerChoice(){
    let rock = 1, paper = 2, scissors = 3;

    let randomChoice = Math.floor(Math.random()*3 + 1);

    return randomChoice;

    console.log(randomChoice);

}

getComputerChoice();