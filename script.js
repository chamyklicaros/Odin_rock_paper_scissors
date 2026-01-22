
let rps = ["rock",'paper','scissors']


function getComputerChoice(rps){

    let maxChoices = 3
    let ranNum = Math.floor(Math.random() * maxChoices)


    return rps[ranNum]
}

function getHumanChoice(){
    let choice = prompt("Choose from the following: Rock, Paper, Scissors").toLowerCase();


    return choice
    
}

function playRound(hChoice,cChoice){

    let winner = ""


    if (hChoice === cChoice) {
        winner = "Draw"
        
    }
    else if (
        (hChoice === "rock" && cChoice === "scissors") ||
        (hChoice === "paper" && cChoice === "rock") ||
        (hChoice === "scissors" && cChoice === "paper")
    ) {
  
        winner = "Human"
    }
    else {
  
        winner = "Computer"
    }



    return winner

}

function playGame(winner){
        
    let humanScore = 0;
    let computerScore = 0;
    let gameWinner = ''

    if (winner == "Human"){
        humanScore ++;
    }
    else{
        computerScore ++;
    }




}

const maxRound = 5;
let currentRound = 0;

let computerChoice = getComputerChoice(rps);
let playerChoice = getHumanChoice();

let winner = playRound(playerChoice,computerChoice)

playGame(winner)

console.log(winner)