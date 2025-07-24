const choices = ["rock","paper","scissors"];

const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");


const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");
let playerscore = 0;
let computerscore = 0;



function playGame(playerChoice){

    const computerChoice =  choices[Math.floor(Math.random() * 3)];

    let result = "";


    if(playerChoice === computerChoice){
        result = "IT'S A TIE😐";
    }
    else{

        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!😀":"YOU LOSE😭";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!😀":"YOU LOSE😭";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!😀":"YOU LOSE😭";
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.textContent = result;

    // with each new game we have to reset the color of the result

    resultDisplay.classList.remove("greenText","redText");
    

    // changing the color of the text based on win or lose using classList

    switch(result){
        case "YOU WIN!😀":
            resultDisplay.classList.add("greenText");
            playerscore++;
            playerscoreDisplay.textContent = playerscore;
            break;
        
        case "YOU LOSE😭":
            resultDisplay.classList.add("redText");
            computerscore++;
            computerscoreDisplay.textContent = computerscore;
            break;
    }
}

