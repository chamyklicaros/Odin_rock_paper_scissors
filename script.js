
let rps = ["rock",'paper','scissors']


function getComputerChoice(rps){

    let maxChoices = 3
    let ranNum = Math.floor(Math.random() * maxChoices)


    return rps[ranNum]
}

function getHumanChoice(rps){
    let choice = prompt("Choose from the following: Rock, Paper, Scissors").toLowerCase

    return choice
    
}


let computerChoice = getComputerChoice(rps);
let playerChoice = getHumanChoice(rps);

console.log(playerChoice)