'use strict';

//Introduction
alert('Hi there! My name is Amber Kim. Let\'s start with a fun game to break the ice. When you are ready, click \'OK\' to start.');
console.log('Welcomed user.');

//tally up the user points
var userPoints = 0;
console.log('Game Start');

//get user name
var user = prompt('What is your name?');
console.log('User name is: ' + user);

alert('Hi, ' + user + '! Nice to meet you! Let\'s test your guessing prowess!');
console.log('Greeting the new user.');

//random number guessing game.
var randomNum = Math.floor(Math.random() * 10);
var userAnswer1 = prompt('Guess a number between 1 and 10');//store user answer
var usersGuessDisplay = document.getElementById('usersGuessDisplay');
var userAnswer1Tries = 4;//number of tries
console.log(user + ' answer is: ' + userAnswer1);

console.log('userAnswer1 ***** ', userAnswer1);

do {
  if (isNaN(userAnswer1)){
    userAnswer1Tries = userAnswer1Tries - 1;
    alert('Please enter only numbers. You have ' + userAnswer1Tries + ' tries.');
    console.log('User Tries Left: ' + userAnswer1Tries + '. User answer is NaN.');
    userAnswer1 = prompt('Try again. How old am I? Please enter only numbers.');
  } else if (parseInt(userAnswer1) === randomNum) {
    alert('Yay! You got it!');
    usersGuessDisplay.innerHTML = 'You guessed the right number: ' + userAnswer1;
    console.log('User Tries Left: ' + userAnswer1Tries + '. User guessed correctly after ' + userAnswer1Tries + '.');
    userPoints = userPoints + 1;
    randomNum = userAnswer1; // ends while loop early
  } else if (parseInt(userAnswer1) < randomNum){
    userAnswer1Tries = userAnswer1Tries - 1;
    alert('Your guess is low! You have: ' + userAnswer1Tries + ' left.');
    console.log('User guessed low. User Tries Left: ' + userAnswer1Tries + '. User guessed: ' + userAnswer1 + ' vs. ' + randomNum + '.');
    userAnswer1 = prompt('Try again. Please enter only numbers.');
  } else {
    userAnswer1Tries = userAnswer1Tries - 1;
    alert('Your guess is high! You have: ' + userAnswer1Tries + ' left.');
    console.log('User is totally far off. User Tries Left: ' + userAnswer1Tries + '. User guessed: ' + userAnswer1 + ' vs. ' + randomNum + '.');
    userAnswer1 = prompt('Try again. Please enter only numbers.');
  }} while ((userAnswer1 !== randomNum) && (userAnswer1Tries > 1));

if (userAnswer1Tries === 1) {
  usersGuessDisplay.innerHTML = 'Your last guess: ' + userAnswer1 + '. The right guess: ' + randomNum + '.';
  alert('You ran out of tries. Your score so far is: ' + userPoints + '/2');
}

//upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers

// var statesILivedIn = ['washington', 'california', 'north carolina', 'florida']; //list of place i lived in
// var question7Tries = 5;//number of tries left to guess question 7
//
// console.log('question7 ***** ', question7);
//
// var question7 = prompt('Name one state I lived in.').toLowerCase();
// console.log('User answer to question 7 is: ' + question7);
// while (question7Tries > 0) {
//   if (statesILivedIn.indexOf(question7) > -1) {
//     alert('Hey! You got one right!');
//     console.log('User got question7 correctly');
//     userPoints = userPoints + 1;
//     question7Tries = -1; //ends while loop early
//   } else {
//     question7Tries = question7Tries - 1; //minus question 7 tries.
//     question7 = prompt('Try again. You have ' + question7Tries + ' tries left after this. Name one state I lived in.').toLowerCase();
//     console.log('User is asked question 7 again. ' + question7Tries + ' left.');
//   }
// }
//
// if (question7Tries === 0){
//   alert('You ran out of tries for quesiton 7. I\'ve lived in Washington, California, North Carolina, and Florida');
//   console.log('User ran out of tries for question 7. Listed the correct answers.');
// }

//Congrats and recap
if (userPoints === 2) {
  alert('Woohoo! Perfect score! You know me very well!');
  console.log('User got a perfect score!');
} else if (userPoints === 1) {
  alert('Great Job! You got ' + userPoints + ' out of 5!');
  console.log('User did ok. 4-6 points.');
} else {
  alert('Hey, ' + user + ', you got ' + userPoints + '. I know you can do better. Reload the page to try again.');
  console.log('User got less than 4. Encouraged to try again.');
}

//update page with user score
var updateScore = document.getElementById('scoreDisplay'); //get class scoreUpdate
console.log('grab scoreDisplay ID.');
updateScore.innerHTML = 'Your Score:' + userPoints + '/2'; //replace "Let's play" with latest score
console.log('Score displayed on web page.');
