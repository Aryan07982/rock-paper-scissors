let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

const choiceButtons = document.querySelector(".choice-buttons");
const choices = document.querySelectorAll('.choices');
const result = document.querySelector('.result');
const disHumanScore = document.querySelector('.human-score');
const disComputerScore = document.querySelector('.computer-score');
const round = document.querySelector('.round');
const nxtRoundBtn = document.querySelector('#nxtrnd');
const playAgainBtn = document.querySelector('#pagn');

nxtRoundBtn.disabled = true;
playAgainBtn.disabled = true;

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice)
        {
            result.textContent = `DRAW! YOU BOTH CHOSE ${humanChoice}!`;
    } else if (
            (humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'rock')
        )
        {
            computerScore += 1;
            disComputerScore.textContent = computerScore;
            result.textContent = `YOU LOSE! ${computerChoice} BEATS ${humanChoice}`;
        }
        else{
            humanScore += 1;
            disHumanScore.textContent = humanScore;
            result.textContent = `YOU WIN! ${humanChoice} BEATS ${computerChoice}`;
        }

    if (computerScore === 5 || humanScore === 5){
        declareWinner();
        playAgainBtn.disabled = false;
        return;
    }
    nxtRoundBtn.disabled = false;
}

function declareWinner(){
    if(humanScore===5){
        result.textContent = `CONGRATULATIONS! YOU WON THE GAME BY ${humanScore - computerScore} POINTS!`;
    } else if(computerScore===5){
        result.textContent = `YOU LOST! COMPUTER BEAT YOU BY ${computerScore - humanScore} POINTS!`;
    }
}

choiceButtons.addEventListener('click', (e)=>{
    choices.forEach(btn => btn.disabled = true);
    let target = e.target;
    let humanChoice;
    switch (target.id){
        case 'rockBtn':
            humanChoice = 'rock';
            break;
        case 'paperBtn':
            humanChoice = 'paper';
            break;
        case 'scissorBtn':
            humanChoice = 'scissors'
            break;
    }
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

nxtRoundBtn.addEventListener('click', ()=>{
    choices.forEach(btn => btn.disabled = false);
    roundNum += 1;
    round.textContent = roundNum;
    nxtRoundBtn.disabled = true;
})

playAgainBtn.addEventListener('click', ()=>{
    humanScore = 0;
    computerScore = 0;

    disComputerScore.textContent = computerScore;
    disHumanScore.textContent = humanScore;

    roundNum = 1;
    round.textContent = roundNum

    result.textContent = 'BEST OF LUCK!';

    choices.forEach(btn=> btn.disabled = false);
    playAgainBtn.disabled = true;
})