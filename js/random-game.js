'use strict';

//Introduction
alert('Hi there! My name is Amber Kim. Can you guess what number I\'m thinking of? When you are ready, click \'OK\' to start.');
console.log('Welcomed user.');

//tally up the user points
var userWin = false;
console.log('Game Start');

//get user name
var user = prompt('What is your name?');
console.log('User name is: ' + user);

alert('Hi, ' + user + '! Nice to meet you! Let\'s test your guessing prowess!');
console.log('Greeting the new user.');

//random number guessing game.
var randomNum = Math.floor(Math.random() * 10);
var userAnswer1 = prompt('Guess a number between 0 and 10');//store user answer
var usersGuessDisplay = document.getElementById('scoreDisplay');
var onPageGreeting = document.getElementById('greeting');
var userAnswer1Tries = 4;//number of tries
console.log(user + ' answer is: ' + userAnswer1);

var checkNumber = function() {
  if (isNaN(userAnswer1)){//checks if user answer is not a number
    alert('Please enter only numbers. You have ' + userAnswer1Tries + ' tries.');
    console.log('User Tries Left: ' + userAnswer1Tries + '. User answer is NaN.');
    userAnswer1 = prompt('Try again. How old am I? Please enter only numbers.');
    userAnswer1Tries = userAnswer1Tries - 1;
  } else if (parseInt(userAnswer1) === randomNum) { //checks if user got the answer correctly
    alert('Yay! You got it!');
    usersGuessDisplay.innerHTML = 'You guessed the right number: ' + userAnswer1 + '.<br>Congratulations! You win!';//display congrats
    onPageGreeting.innerHTML = 'Woohoo!';
    console.log('User Tries Left: ' + userAnswer1Tries + '. User guessed correctly and had ' + (userAnswer1Tries - 1) + ' left.');
    userWin = true;
    randomNum = userAnswer1; // ends while loop early
  } else if (parseInt(userAnswer1) < randomNum){ //if answer is less than the random number
    alert('Your guess is low! You have ' + userAnswer1Tries + ' tries left.');
    console.log('User guessed low. User Tries Left: ' + userAnswer1Tries + '. User guessed: ' + userAnswer1 + ' vs. ' + randomNum + '.');
    userAnswer1 = prompt('Try again. Please enter only numbers.');
    userAnswer1Tries = userAnswer1Tries - 1;
  } else {
    alert('Your guess is high! You have ' + userAnswer1Tries + ' tries left.');
    console.log('User guessed high. User Tries Left: ' + userAnswer1Tries + '. User guessed: ' + userAnswer1 + ' vs. ' + randomNum + '.');
    userAnswer1 = prompt('Try again. Please enter only numbers.');
    userAnswer1Tries = userAnswer1Tries - 1;//if answer is greater than the random number
  }
};

if (userAnswer1Tries === 0) {
  usersGuessDisplay.innerHTML = 'Your last guess: ' + userAnswer1 + '.<br>The right answer: ' + randomNum + '.';
  onPageGreeting.innerHTML = 'Game Over.';
  alert('You ran out of tries. The correct answer was: ' + randomNum + '.\nGame Over.');
  console.log('User ran out of tries. Game over.');
}

do {
  checkNumber();
} while ((userWin !== true) && (userAnswer1Tries > -1));
