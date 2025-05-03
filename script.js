'use strict'
// secret question mark number 
const secretNumber = Math.trunc( Math.random() * 20 )+1;
document.querySelector('.number').textContent = secretNumber;
// score 
let score = 20; 
// eventListener
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
// null values in js is evaluated as boolean so '0' input value will be evaluated as falsy
    if (!guess){ // no number at all, there is no input
            document.querySelector('.message').textContent = 'Please input a number!'
    } else if (guess===secretNumber){ // number is equal hence player wins the game.
        document.querySelector('.message').textContent = "Correct Number!,You Won";
        document.querySelector('.number').textContent = secretNumber;
        // style property. styling attribute in camelcase and the value will be in a string
        document.querySelector('body').style.backgroundColor = '#60b347' 
        document.querySelector('.number').style.width = '30rem' 
    }
    // wrong scenarios from the user perspective 
    else if (guess>secretNumber){ // number is greater
        if (score>1) {
            document.querySelector('.message').textContent = "Number is High!";
            score -- // score decreased on the wrong guess    
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "Lost the Game!"
            document.querySelector('.score').textContent = 0
        }
    }else if (guess<secretNumber){ // number is smaller 
        if (score>1){
        document.querySelector('.message').textContent = "Number is Low!"
        score-- // score decresed on the wrong guess
        document.querySelector('.score').textContent = score
        } else {
        document.querySelector('.message').textContent = "Lost the Game!"
        document.querySelector('.score').textContent = 0
        }    
    }
})