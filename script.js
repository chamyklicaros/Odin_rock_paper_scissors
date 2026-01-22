
let rps = ["rock",'paper','scissors']


function getComputerChoice(rps){

    let maxChoices = 3
    let ranNum = Math.floor(Math.random() * maxChoices)


    return rps[ranNum]
}

function getHumanChoice(rps){
    let choice = prompt("Choose from the following: Rock, Paper, Scissors").toLowerCase();


    return choice
    
}

function playRound(hChoice,cChoice){

    let winner = "";

    if (hChoice === cChoice) {
        winner = "It's a Draw";
    }
    else if (
        (hChoice === "rock" && cChoice === "scissors") ||
        (hChoice === "paper" && cChoice === "rock") ||
        (hChoice === "scissors" && cChoice === "paper")
    ) {
        winner = "The Human wins";
    }
    else {
        winner = "The Computer wins";
    }



    return winner

}

let humanScore = 0;
let computerScore = 0;


let computerChoice = getComputerChoice(rps);
let playerChoice = getHumanChoice(rps);

let winner = playRound(playerChoice,computerChoice)
console.log(computerChoice)
console.log(playerChoice)
console.log(winner)