'use strict';

let secretNumber = Math.trunc(Math.random() * 6) + 1;
let highScore = 0;

document.querySelector('.left .check').addEventListener('click', function () {
    let enteredNumber = Number(document.querySelector('guess').value);
    let message = document.querySelector('.right .message');
    if (enteredNumber == secretNumber) {
        message.textContent = 'You Won ';
        document.querySelector('body').style.backgroundColor = 'green';
    } else if (enteredNumber != secretNumber) {
        if(enteredNumber > secretNumber)
            message.textContent = 'Number too high';
        else 
            message.textContent = 'Number too low';
        
    }
});
