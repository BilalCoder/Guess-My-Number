'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let highScore = 0;
let score = 6;

document.querySelector('.left .check').addEventListener('click', function () {
    let enteredValue = document.querySelector('.guess').value;
    let enteredNumber = Number(enteredValue);
    let message = document.querySelector('.right .message');
    if (!enteredValue) {
        message.textContent = 'Please enter a valid number';
    }
    else if (enteredNumber == secretNumber) {
        message.textContent = 'You Won';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess').disabled = true;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.right .highscore').textContent = highScore;
        }
    } else if (enteredNumber != secretNumber) {
        if (score > 1) {
            if (enteredNumber > secretNumber) message.textContent = 'Number too high';
            else message.textContent = 'Number too low';
            score--;
            document.querySelector('.right .score').textContent = score;
        } else {
            message.textContent = 'You lost the game';
            document.querySelector('.right .score').textContent = 0;
        }
    }
});
