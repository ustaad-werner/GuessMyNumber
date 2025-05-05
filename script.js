'use strict'

// secret question mark number

let secretNumber = Math.trunc( Math.random() * 20 )+1; // algo-method for the secret number

// document.querySelector('.number').textContent = secretNumber
// score 

let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
};  
// eventListener
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
// null values in js is evaluated as boolean so '0' input value will be evaluated as falsy

    if (!guess){ // no number at all, there is no input
            displayMessage("Please input a number!")
    } 
    else if (guess===secretNumber){ // when guess is wrong--number is equal hence player wins the game.
        // document.querySelector('.message').textContent = "Correct Number!,You Won";
        displayMessage("Correct Number you Won!")
        document.querySelector('.number').textContent = secretNumber;
        
        // style property. styling attribute in camelCase and the value will be in a string
        document.querySelector('body').style.backgroundColor = '#60b347' 
        document.querySelector('.number').style.width = '30rem' 

        

        if (score > highScore){
            highScore = score ;
            document.querySelector('.highscore').textContent = highScore;    
        }

    }
    // wrong scenarios from the user perspective 
    // refactoring using DRY(don't repeat yourself) principle

    else if (guess !== secretNumber){ // guess is wrong
            if (score>1) {
            // document.querySelector('.message').textContent = 
            // guess > secretNumber ? "Number is High!" : "Number is Low!" ;
            displayMessage(guess > secretNumber ? "Number is High!" : "Number is Low!")
            score -- // score decreased on the wrong guess    
            document.querySelector('.score').textContent = score
        }else{
            // document.querySelector('.message').textContent = "Lost the Game!"
            displayMessage("Lost the Game!")
            document.querySelector('.score').textContent = 0
        }
    }


    // else if (guess>secretNumber){ // number is greater
    //     if (score>1) {
    //         document.querySelector('.message').textContent = "Number is High!";
    //         score -- // score decreased on the wrong guess    
    //         document.querySelector('.score').textContent = score
    //     }else{
    //         document.querySelector('.message').textContent = "Lost the Game!"
    //         document.querySelector('.score').textContent = 0
    //     }
    // }else if (guess<secretNumber){ // number is smaller 
    //     if (score>1){
    //     document.querySelector('.message').textContent = "Number is Low!"
    //     score-- // score decresed on the wrong guess
    //     document.querySelector('.score').textContent = score
    //     } else {
    //     document.querySelector('.message').textContent = "Lost the Game!"
    //     document.querySelector('.score').textContent = 0
    //     }    
    // }
})


/* 
coding challenge number #1
- implement the game reset functionality so that the player can reset the game using the AGAIN button
steps----> 
- in the again event handler function restore the initial values of the score and number variables
- restore the initial conditions of the message, number, score and the guess input field 
- also restore the original background color (#222) and number width (15 rem)    
--------------------------------------------
return the score value to 20;
reset the highScore 
restore the bg color and width
*/

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc( Math.random() * 20 )+1;
    const guess = Number(document.querySelector('.guess').value);


    document.querySelector('.score').textContent = score ;

    document.querySelector('.number').textContent = '?';

    // document.querySelector('.message').textContent = 'Start guessing!';
    displayMessage("Start Guessing!")

    document.querySelector('.guess').value = '';
      
    document.querySelector('.label-highscore').textContent = '🥇 Highscore: 0';

    
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('number').style.width = '15rem';

})