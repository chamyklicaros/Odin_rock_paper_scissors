
function getComputerChoice(){
    let rps = ["rock",'paper','scissors']

    let maxChoices = 3
    let ranNum = Math.floor(Math.random() * maxChoices)


    return rps[ranNum]
}

function getHumanChoice(callback) {
    const btn = document.querySelectorAll('button');

    btn.forEach((button) => {
        button.addEventListener('click',(e) => {
            let choiceID = e.target.id;
            callback(choiceID);
        })

    })
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

function resetGame(){

}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const maxRound = 5;
    let currentRound = 0;

    let roundTxt =  document.getElementById("round");
    let humanScoreTxt = document.getElementById("humanScoreID");
    let computerScoreTxt = document.getElementById("computerScoreID");

    let winnerTxt = document.getElementById("winnerRoundID");
    
    getHumanChoice((choice) => {
 
        if (currentRound >= maxRound) {
          
            return;
        }
        
        currentRound++;
       

        
        let playerChoice = choice;
        let computerChoice = getComputerChoice(); 
        let choiceWinner = playRound(playerChoice, computerChoice);
        
        console.log(`Player: ${playerChoice}, Computer: ${computerChoice}`);
        console.log(`Round Winner: ${choiceWinner}`);
        
        if (choiceWinner === "Human"){
            humanScore++;
        }
        else if (choiceWinner === "Computer"){
            computerScore++;
        }
        
   
        
        if (currentRound === maxRound) {
            let gameWinner = '';
            if (humanScore === computerScore){
                gameWinner = "It's a draw!";
            }
            else if (humanScore > computerScore){
                gameWinner = "The Human Wins!";
            }
            else{
                gameWinner = "The Computer Wins!";
            }
            
        }
        //Update the html
        roundTxt.textContent = `Current Round: ${currentRound}`;
        humanScoreTxt.textContent = `Score: ${humanScore}`;
        computerScoreTxt.textContent = `Score: ${computerScore}`;

        winnerTxt.textContent = `${choiceWinner}`;


    });
}



playGame()