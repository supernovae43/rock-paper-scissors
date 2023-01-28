const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice(arr) {
    const random = Math.trunc(Math.random(arr) * arr.length);
    const item = arr[random];
    return item;
}

const win = 'you won, well played';
const lose = 'you lost, try again';
const tie = 'tie, try again';
let state;

let computerSelection;
let playerSelection;

let winTimes = 0;
let loseTimes = 0;
let tieTimes = 0;

function playRound(choice1, choice2) {
    if(choice1 == choice2) {
        console.log(choice2);
        state = tie;
        tieTimes++;
    }
    else if((choice1 == 'paper' && choice2 == 'rock') ||
     (choice1 == 'scissor' && choice2 == 'paper') || 
    (choice1 == 'rock' && choice2 == 'scissor') ) {
        console.log(choice2)
        state = win; 
        winTimes++; 
    }
    else if((choice1 == 'paper' && choice2 == 'scissor') ||
    (choice1 == 'rock' && choice2 == 'paper') ||
    (choice1 == 'scissor' && choice2 == 'rock')) {
        console.log(choice2)
        state = lose;
        loseTimes++;
    }
    
    return state;
}


function game() {

    for(let i = 0; i < 6; i++ ) {
        playerSelection = prompt('enter rock, paper or scissor').toLocaleLowerCase();
        computerSelection = getComputerChoice(choices);    
       console.log(playRound(playerSelection, computerSelection));
    }
    return `you won ${winTimes} times, you lost ${loseTimes} times and you tied ${tieTimes}`;
}

console.log(game())
