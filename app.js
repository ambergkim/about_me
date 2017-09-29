'use strict';

//tally up the user points
var userPoints = 0;
console.log('Game Start');

//get user name
var user = prompt('What is your name?');
console.log('User name is: ' + user);

if (user === null) {
  alert('We need your name! Please refresh to start over.');
  console.log('User did not enter a name.');
}

alert('Hi, ' + user + '! Nice to meet you! Let\'s test your guessing prowess!');
console.log('Greeting the new user.');

//question 1 is my favorite fruit mangoes? Yes
var question1 = prompt('Is my favorite fruit mangoes?');
//check if user cancelled
if (question1 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled the question and interrupted game.');
}

//check user answer
if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
  userPoints = userPoints + 1;
  alert('Yay! You got one!');
  console.log('User got question 1 correct. New user score: ' + userPoints);
} else if (question1.toLowerCase() === 'no') {
  alert('Sorry! Incorrect!');
  console.log('User got question 1 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO');
  console.log('User did not input yes or no for question 1.');
}

//question 2 Is my favorite book "War and Peace"? No
var question2 = prompt('Is my favorite book WAR AND PEACE?');

//check if user cancelled
if (question2 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 2.');
}

//check user answer
if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
  userPoints = userPoints + 1;
  alert('Yay! You got question 2 correct! You now have ' + userPoints + ' out of 5.');
  console.log('User got question 2 correct. New user score: ' + userPoints);
} else if (question2.toLowerCase() === 'yes') {
  alert('Sorry! Incorrect!');
  console.log('User got question 2 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('User did not input yes or no for question 2.');
}

//question 3 Is my favorite color purple? No
var question3 = prompt('Is my favorite color purple?');

//check if user cancelled
if (question3 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 3.');
}

//check user answer
if (question3.toLowerCase() === 'no' || question3.toLowerCase() === 'n') {
  userPoints = userPoints + 1;
  alert('Yay! You got question 3 correct! You now have ' + userPoints + ' out of 5.');
  console.log('User got question 3 correct. New user score: ' + userPoints);
} else if (question3.toLowerCase() === 'yes') {
  alert('Sorry! Incorrect!');
  console.log('User got question 3 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('User did not input yes or no for question 3.');
}

//question 4 Do I love to hike? Yes.
var question4 = prompt('Do I love to hike?');

//check if user cancelled
if (question4 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 4.');
}

//check user answer
if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
  userPoints = userPoints + 1;
  alert('Yay! You got question 4 correct! You now have ' + userPoints + ' out of 5.');
  console.log('user got question 4 correct. New user score: ' + userPoints);
} else if (question4.toLowerCase() === 'no') {
  alert('Sorry! Incorrect!');
  console.log('User got question 4 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('user did not input yes or no for question 4.');
}

//question 5 Is my favorite dessert ice cream? yes
var question5 = prompt('Is one of my favorite desserts chocolate ice cream?');

//check if user cancelled
if (question5 === null) {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO then press OK. Reload to try again.');
  console.log('User cancelled question and interrupted game. Game ended at question 5.');
}

//check user answer
if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
  userPoints = userPoints + 1;
  alert('Yay! You got the last question correct!');
  console.log('user got question 5 correct');
} else if (question5.toLowerCase() === 'no') {
  alert('Sorry! Incorrect!');
  console.log('User got question 5 incorrect.');
} else {
  alert('Hey, ' + user + ', ' + 'please type in only YES or NO.');
  console.log('User did not input yes or no for question 5.');
}

//Congrats and recap
if (userPoints === 5) {
  alert('Woohoo! Perfect score! You know me very well!');
  console.log('User got a perfect score!');
} else if (userPoints < 5 && userPoints >= 3) {
  alert('Great Job! You got ' + userPoints + ' out of 5!');
  console.log('User did ok. 3 or 4 points.');
} else {
  alert('Hey, ' + user + ', you got ' + userPoints + '. I know you can do better. Reload the page to try again.');
  console.log('User got 0, 1 or two points. Encouraged to try again.');
}

//update page with user score
var updateScore = document.getElementById('scoreDisplay'); //get class scoreUpdate
console.log('grab scoreDisplay ID.');
updateScore.innerHTML = 'Your Score:' + userPoints + '/5'; //replace "Let's play" with latest score
console.log('update updateScore inner html.');
