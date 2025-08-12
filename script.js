function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let humanChoice =  prompt("CHOOSE ROCK, PAPER OR SCISSORS: ");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice)
        {
            humanScore += 1;
            computerScore += 1;
            console.log(`DRAW! YOU BOTH CHOSE ${humanChoice}!
YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
            // console.log(`YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
    } else if (
            (humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'scissors') ||
            (humanChoice === 'scissor' && computerChoice === 'rock')
        )
        {
            computerScore += 2;
            console.log(`YOU LOSE! ${computerChoice} BEATS ${humanChoice}
YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
            // console.log(`YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
        }
        else{
            humanScore += 2;
            console.log(`YOU WIN! ${humanChoice} BEATS ${computerChoice}
YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
            // console.log(`YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
        }
    
}

function playGame(playRound){

    for(let i = 0; i < 5; i++){
        console.log(`ROUND ${i+1}: `);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore > computerScore){
        console.log('CONGRATULATIONS! YOU WON THE GAME!!!');
        console.log(`YOU BEAT THE COMPUTER BY ${humanScore - computerScore} POINTS!`);
    } else if (humanScore == computerScore){
        console.log('WELL PLAYED! IT IS A DRAW');
    } else{
        console.log('YOU LOST! BETTER LUCK NEXT TIME');
        console.log(`COMPUTER BEAT YOU BY ${computerScore - humanScore} POINTS!`);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame(playRound);