const currentScore = document.querySelector('p');
const scoreboard = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');
const choices = document.querySelector('.choices');
const againbtn = document.querySelector('.again')
const game = document.querySelector('.game');
const playAgain = document.querySelector('.playAgain');

// generate a random choice for computer
const computerPlay = () => {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    };
};

// play a hand
const playSingleHand = (choice, computerSelection) => {
    let score = 0;

    if (choice === 'scissors' && computerSelection === 'Paper') {
        score++;
        scoreboard.textContent = 'You win! Scissors beats Paper!';
    } else if (choice === 'Scissors' && computerSelection === 'Rock') {
        score--;
        scoreboard.textContent = 'You lose! Rock beats Scissors!';
    } else if (choice === 'Rock' && computerSelection === 'Paper') {
        score--;
        scoreboard.textContent = 'You lose! Paper beats Rock!';
    } else if (choice === 'Rock' && computerSelection === 'Scissors') {
        score++;
        scoreboard.textContent = 'You win! Rock beats Scissors!';
    } else if (choice === 'Paper' && computerSelection === 'Rock') {
        score++;
        scoreboard.textContent = 'You win! Paper beats Rock!';
    } else if (choice === 'Paper' && computerSelection === 'Scissors') {
        score--;
        scoreboard.textContent = 'You lose! Scissors beats Paper!';
    };
        
    if (score === 0) {
        return playSingleHand('Rock', computerPlay())
    } else return score;
};

// choice to come from event
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;

const handleClick = () => {

    playSingleHand(playerChoice, computerPlay())
    let score = playSingleHand(playerChoice, computerPlay())
    
    if (score === 1) {
        playerScore++;
    } else if (score === -1) {
        computerScore++;
    };
    
    currentScore.textContent = ` Player: ${playerScore} Computer: ${computerScore}`

    if (playerScore === 5) {
        endGame();
        scoreboard.textContent = 'You are the winner!';
    } else if (computerScore === 5) {
        endGame();
        scoreboard.textContent = 'Computer wins!';
    };
    return playerChoice, playerScore, computerScore;
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.classList.contains('rock')) {
            playerChoice = e.target.className;
            handleClick(playerChoice);
        } else if (button.classList.contains('paper')) {
            playerChoice = e.target.className;
            handleClick(playerChoice);
        } else {
            playerChoice = e.target.className;
            handleClick(playerChoice);
        };
    });
});

// conclude game
const endGame = () => {
    choices.style.display = 'none';
    playAgain.style.display = 'block';
};

// Play again btn
againbtn.addEventListener('click', (e) => location.reload());