let TotalScore = [0, 0];
let CurrentScore = [0, 0];
let turn = 0;

const diceImage = document.querySelector('.dice-image');

const holdButton = document.querySelector('.hold-button');
const newGameButton = document.querySelector('.new-game-button');

const player0TotalScoreElement = document.querySelector('#player0-total-score');
const player1TotalScoreElement = document.querySelector('#player1-total-score');

const player0CurrentScoreElement = document.querySelector('#player0-current-score');
const player1CurrentScoreElement = document.querySelector('#player1-current-score');

const player0Background = document.querySelector('.player0');
const player1Background = document.querySelector('.player1');

function init() {
    TotalScore[0] = 0;
    TotalScore[1] = 0;
    CurrentScore[0] = 0;
    CurrentScore[1] = 0;
    player0TotalScoreElement.innerText = TotalScore[0];
    player1TotalScoreElement.innerText = TotalScore[1];
    player0CurrentScoreElement.innerText = CurrentScore[0];
    player1CurrentScoreElement.innerText = CurrentScore[1];
    turn = randomNumber()%2;
    console.log('Turn : ', turn);
    changeBackgroundColor();
    console.log('Game Initialised!');
}

function randomNumber() {
    return Math.floor(Math.random()*6)+1;
}

function changeBackgroundColor() {
    if(turn === 0) {
        player0Background.classList.add('player-active');
        player1Background.classList.remove('player-active');
    }
    else {
        player0Background.classList.remove('player-active');
        player1Background.classList.add('player-active');
    }
}

function switchPlayer() {
    saveTotalScore();
    turn = (turn === 0 ? 1 : 0);
    console.log('Turn : ', turn);
    changeBackgroundColor();
    console.log('Player switched!');
}

function saveTotalScore() {
    TotalScore[turn] += CurrentScore[turn];
    if(turn === 0) {
        player0TotalScoreElement.innerText = Number(TotalScore[turn]);
        player0CurrentScoreElement.innerText = 0;
        CurrentScore[0] = 0;
        CurrentScore[1] = 0;
    }
    else {
        player1TotalScoreElement.innerText = Number(TotalScore[turn]);
        player1CurrentScoreElement.innerText = 0;
        CurrentScore[0] = 0;
        CurrentScore[1] = 0;
    }
    console.log('Total Score : ', TotalScore);
    console.log('Added to total score!');
}

function simulateOutput(diceNumber, turn) {
    switch (diceNumber) {
        case 1:
            switchPlayer();
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Turn : ', turn);
            CurrentScore[turn] += diceNumber;
            console.log('Current Score : ', CurrentScore);
            if(turn === 0) {
                player0CurrentScoreElement.innerText = Number(CurrentScore[turn]);
            }
            else {
                player1CurrentScoreElement.innerText = Number(CurrentScore[turn]);
            }
            console.log('Added to current score!');
            break;
    }
}

diceImage.addEventListener('click', () => {
    let diceNumber = randomNumber();
    console.log(diceNumber);
    diceImage.src = `./media/dice-${diceNumber}.png`;
    simulateOutput(diceNumber, turn);
});

holdButton.addEventListener('click', () => {
    switchPlayer();
});

newGameButton.addEventListener('click', () => {
    init();
});
