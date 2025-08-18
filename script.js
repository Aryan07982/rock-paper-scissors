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
const userHand = document.querySelector('.user-hand');
const computerHand = document.querySelector('.computer-hand');

nxtRoundBtn.disabled = true;
playAgainBtn.disabled = true;

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(humanChoice, computerChoice){
    switch (computerChoice){
        case 'rock':
            computerHand.src = 'rock.png';
            break;
        case 'paper':
            computerHand.src = 'paper.png';
            break;
        case 'scissors':
            computerHand.src = 'scissor.png';
            break;
    }
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
            userHand.src = 'rock.png';
            break;
        case 'paperBtn':
            humanChoice = 'paper';
            userHand.src = 'paper.png';
            break;
        case 'scissorBtn':
            humanChoice = 'scissors'
            userHand.src = 'scissor.png';
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