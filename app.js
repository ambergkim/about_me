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

//question 1 is my favorite fruit mangoes? Yes
var question1 = prompt('Is my favorite fruit mangoes?').toLowerCase();
//check if user cancelled
if (question1 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled the question and interrupted game.');
}

//check user answer
if (question1 === 'yes' || question1 === 'y') {
  userPoints = userPoints + 1;
  alert('Yay! You got one!');
  console.log('User got question 1 correct. New user score: ' + userPoints);
} else if (question1 === 'no') {
  alert('Sorry! Incorrect!');
  console.log('User got question 1 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO');
  console.log('User did not input yes or no for question 1.');
}

//question 2 Is my favorite book "War and Peace"? No
var question2 = prompt('Is my favorite book WAR AND PEACE?').toLowerCase();

//check if user cancelled
if (question2 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 2.');
}

//check user answer
if (question2 === 'no' || question2 === 'n') {
  userPoints = userPoints + 1;
  alert('Yay! You got question 2 correct! You now have ' + userPoints + ' out of 5.');
  console.log('User got question 2 correct. New user score: ' + userPoints);
} else if (question2 === 'yes') {
  alert('Sorry! Incorrect!');
  console.log('User got question 2 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('User did not input yes or no for question 2.');
}

//question 3 Is my favorite color purple? No
var question3 = prompt('Is my favorite color purple?').toLowerCase();

//check if user cancelled
if (question3 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 3.');
}

//check user answer
if (question3 === 'no' || question3 === 'n') {
  userPoints = userPoints + 1;
  alert('Yay! You got question 3 correct! You now have ' + userPoints + ' out of 5.');
  console.log('User got question 3 correct. New user score: ' + userPoints);
} else if (question3 === 'yes') {
  alert('Sorry! Incorrect!');
  console.log('User got question 3 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('User did not input yes or no for question 3.');
}

//question 4 Do I love to hike? Yes.
var question4 = prompt('Do I love to hike?').toLowerCase();

//check if user cancelled
if (question4 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 4.');
}

//check user answer
if (question4 === 'yes' || question4 === 'y') {
  userPoints = userPoints + 1;
  alert('Yay! You got question 4 correct! You now have ' + userPoints + ' out of 5.');
  console.log('user got question 4 correct. New user score: ' + userPoints);
} else if (question4 === 'no') {
  alert('Sorry! Incorrect!');
  console.log('User got question 4 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('user did not input yes or no for question 4.');
}

//question 5 Is my favorite dessert ice cream? yes
var question5 = prompt('Is one of my favorite desserts chocolate ice cream?').toLowerCase();

//check if user cancelled
if (question5 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 5.');
}

//check user answer
if (question5 === 'yes' || question5 === 'y') {
  userPoints = userPoints + 1;
  alert('Yay! You got the question 5 correct!');
  console.log('user got question 5 correct. New user score: ' + userPoints);
} else if (question5 === 'no') {
  alert('Sorry! Incorrect!');
  console.log('User got question 5 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('User did not input yes or no for question 5.');
}

//question 6.
var question6Answer = 33;
var question6 = prompt('How old am I? Please enter only numbers.');//store user answer
var question6Tries = 4;//number of tries
console.log(user + ' answer is: ' + question6);

console.log('question6 ***** ', question6);

do {
  if (isNaN(question6)){
    question6Tries = question6Tries - 1;
    alert('Please enter only numbers. You have ' + question6Tries + ' tries.');
    console.log('User Tries Left: ' + question6Tries + '. User answer is NaN.');
    question6 = prompt('Try again. How old am I? Please enter only numbers.');
  } else if (parseInt(question6) === 33) {
    alert('Yay! You got it!');
    console.log('User Tries Left: ' + question6Tries + '. User guessed correctly after ' + question6Tries + '.');
    userPoints = userPoints + 1;
    question6 = question6Answer; // ends while loop early
  } else if (parseInt(question6) < 33){
    question6Tries = question6Tries - 1;
    alert('Your guess is low! You have: ' + question6Tries + ' left.');
    console.log('User guessed low. User Tries Left: ' + question6Tries + '. User guessed: ' + question6 + ' vs. ' + question6Answer + '.');
    question6 = prompt('Try again. How old am I? Please enter only numbers.');
  } else {
    question6Tries = question6Tries - 1;
    alert('Your guess is high! You have: ' + question6Tries + ' left.');
    console.log('User is totally far off. User Tries Left: ' + question6Tries + '. User guessed: ' + question6 + ' vs. ' + question6Answer + '.');
    question6 = prompt('Try again. How old am I? Please enter only numbers.');
  }} while ((question6Answer !== question6) && (question6Tries > 1));

if (question6Tries === 1) {
  alert('You ran out of tries. Your score so far is: ' + userPoints + '/7');
}

//upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers

var statesILivedIn = ['washington', 'california', 'north carolina', 'florida']; //list of place i lived in
var question7Tries = 5;//number of tries left to guess question 7

console.log('question7 ***** ', question7);

var question7 = prompt('Name one state I lived in.').toLowerCase();
console.log('User answer to question 7 is: ' + question7);
while (question7Tries > 0) {
  if (statesILivedIn.indexOf(question7) > -1) {
    alert('Hey! You got one right!');
    console.log('User got question7 correctly');
    userPoints = userPoints + 1;
    question7Tries = -1; //ends while loop early
  } else {
    question7Tries = question7Tries - 1; //minus question 7 tries.
    question7 = prompt('Try again. You have ' + question7Tries + ' tries left after this. Name one state I lived in.').toLowerCase();
    console.log('User is asked question 7 again. ' + question7Tries + ' left.');
  }
}

if (question7Tries === 0){
  alert('You ran out of tries for quesiton 7. I\'ve lived in Washington, California, North Carolina, and Florida');
  console.log('User ran out of tries for question 7. Listed the correct answers.');
}

//Congrats and recap
if (userPoints === 7) {
  alert('Woohoo! Perfect score! You know me very well!');
  console.log('User got a perfect score!');
} else if (userPoints < 7 && userPoints >= 4) {
  alert('Great Job! You got ' + userPoints + ' out of 5!');
  console.log('User did ok. 4-6 points.');
} else {
  alert('Hey, ' + user + ', you got ' + userPoints + '. I know you can do better. Reload the page to try again.');
  console.log('User got less than 4. Encouraged to try again.');
}

//update page with user score
var updateScore = document.getElementById('scoreDisplay'); //get class scoreUpdate
console.log('grab scoreDisplay ID.');
updateScore.innerHTML = 'Your Score:' + userPoints + '/7'; //replace "Let's play" with latest score
console.log('Score displayed on web page.');
