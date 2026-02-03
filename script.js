
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

    let humanIMG = document.getElementById("humanImgID");
    let  computerIMG = document.getElementById("computerImgID")
    
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
        
   
        
        if (currentRound == maxRound ) {
            if (humanScore === computerScore){
                alert("It's a draw!");
            }
            else if (humanScore > computerScore){
               alert("The Human Wins!");
            }
            else{
               alert("The Computer Wins!");
            }
            
        }
        //Update the html
        roundTxt.textContent = `Current Round: ${currentRound}`;
        humanScoreTxt.textContent = `Score: ${humanScore}`;
        computerScoreTxt.textContent = `Score: ${computerScore}`;

        winnerTxt.textContent = `Winner: ${choiceWinner}`;


        switch (playerChoice){
            case "rock":
                humanIMG.src = "img/rock.png"
                break
            case "paper":
                humanIMG.src = "img/paper.png"
                break
            case "scissors":
                humanIMG.src = "img/scissors.png"
                break
                
        }
        
        switch (computerChoice){
            case "rock":
                computerIMG.src = "img/rock.png"
                break
            case "paper":
                computerIMG.src = "img/paper.png"
                break
            case "scissors":
                computerIMG.src = "img/scissors.png"
                break
                
        }


    });
}





playGame()