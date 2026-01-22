
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
    let text =  "";

    if (hChoice === cChoice) {
        text = "It's a Draw";
        winner = "Draw"
        
    }
    else if (
        (hChoice === "rock" && cChoice === "scissors") ||
        (hChoice === "paper" && cChoice === "rock") ||
        (hChoice === "scissors" && cChoice === "paper")
    ) {
        text= "The Human wins";
        winner = "Human"
    }
    else {
        text = "The Computer wins";
        winner = "Computer"
    }



    return [text,winner]

}

function playGame(){
        
    let humanScore = 0;
    let computerScore = 0;


}


let computerChoice = getComputerChoice(rps);
let playerChoice = getHumanChoice();

let [text,winner] = playRound(playerChoice,computerChoice)
console.log(computerChoice)
console.log(playerChoice)
console.log(text)