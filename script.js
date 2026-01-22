



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

function playGame(){
    let rps = ["rock",'paper','scissors']
        
    let humanScore = 0;
    let computerScore = 0;

    const maxRound = 5;
    let currentRound = 0;

    let computerChoice;
    let playerChoice;


    let choiceWinner = playRound(playerChoice,computerChoice)

    let gameWinner = ''
 
    while( currentRound != maxRound){
        currentRound ++
        computerChoice = getComputerChoice(rps);
        playerChoice = getHumanChoice();


        choiceWinner = playRound(playerChoice,computerChoice)

        
        if (choiceWinner == "Human"){
            humanScore ++;
        }
        else{
            computerScore ++;
        }

        console.log("The player choice is: " + playerChoice)
        console.log("The computer choice is: " + computerChoice)
        console.log("The winner for round " + currentRound + " is the " + choiceWinner)


    }

    if (humanScore == computerScore ){
            gameWinner = "it's a draw"
    }
    else if (humanScore > computerScore){
            gameWinner = "The Human Wins"
    }
    else{
             gameWinner ="The Computer Wins"
    }

    console.log(gameWinner)
        





}




playGame()