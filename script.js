'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //when we have an HTML input we use .value instead of .textContent
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//EVENT LISTENER

//Math.random - liczba od 0 do 1 np. 0.98786
//Math.random * 20 - liczba od 0 do 19.9999
//Math.trunc - pozbywamy się liczb po przecinku, czyli od 0 do 19
// + 1, czyli od 1 do 20

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //When there is no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When the number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    //Changing CSS styles with JS
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When the number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score = score - 1; //score--
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //When the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score = score - 1; //score--
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
