'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let highScore = 0;
let score = 10;

document.querySelector('.left .check').addEventListener('click', function () {
    let enteredValue = document.querySelector('.guess').value;
    let enteredNumber = Number(enteredValue);
    if (!enteredValue) {
        displayMessage('Please enter a valid number');
    }
    else if (enteredNumber == secretNumber) {
        displayMessage('🎉 You Won the game');
        blinkMessage('greenyellow');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('canvas').classList.remove('d-none');
        displaySecretNumber();
        if(score > highScore) {
            highScore = score;
            document.querySelector('.right .highscore').textContent = highScore;
        }
    } else if (enteredNumber != secretNumber) {
        if (score > 1) {
            if (enteredNumber > secretNumber) displayMessage('Number too high');
            else displayMessage('Number too low');
            score--;
            updateScore(score);
        } else {
            displayMessage('🙁 You lost the game!!!');
            blinkMessage('red');
            updateScore(0);
            document.querySelector('.guess').disabled = true;
            displaySecretNumber();
        }
    }
});

document.querySelector('header .again').addEventListener('click', function() {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('canvas').classList.add('d-none');
    document.querySelector('.guess').value = '';
    document.querySelector('.right .message').classList.remove('blink');
    document.querySelector('.right .message').style.color = '';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    updateScore(10);
})

function displaySecretNumber() {
    document.querySelector('header .number').textContent = secretNumber;
}

function displayMessage(messageString) {
    let message = document.querySelector('.right .message');
    message.textContent = messageString;
}

function blinkMessage(color) {
    let message = document.querySelector('.right .message');
    message.classList.add('blink');
    message.style.color = color;
}

function updateScore(score) {
    document.querySelector('.right .score').textContent = score;
}