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

alert('Hi, ' + user + '! Nice to meet you! Let\'s test your guessing prowess! Answer true or false');
console.log('Greeting the new user.');

var quiz = [
  ['My favorite fruit is mangoes?', true],
  ['My favorite book is "War and Peace?"', false],
  ['My favorite color is purple?', false],
  ['I love to hike?', true],
  ['My favorite dessert is chocolate ice cream?', true]
];

var displayQuestions = document.getElementById('questions');

var callQuestions = function(q,a){
  var userPrompt = prompt(q).toLowerCase();
  var userAnswer;
  console.log('The question is ' + q + ' and the user answer is ' + userPrompt);
  if(userPrompt === 'true'){//convert user answer to boolean
    userAnswer = true;
    console.log('User answer is ' + userPrompt + ' vs ' + a + '.');
  } else if (userPrompt === 'false') {
    userAnswer = false;
    console.log('User answer is ' + userPrompt + ' vs ' + a + '.');
  } else {
    userAnswer = null;
    console.log('User did not enter true or false.');
  }
  if (userAnswer == a) {
    userPoints = userPoints + 1;
    console.log('User answered correctly: ' + userAnswer + '. User points: ' + userPoints + '.');
  } else {
    console.log('User answered incorrectly: ' + userAnswer + '. User points: ' + userPoints + '.');
  }
};
for (var i = 0; i < quiz.length; i++){
  callQuestions(quiz[i][0], quiz[i][1]);
  console.log(' This is the ' + i + ' iteration');
  var p = document.createElement('p');//create paragraph element
  var t = document.createTextNode((i + 1) + '. ' + quiz[i][0] + ' ' + quiz[i][1]);//create a new text node
  p.appendChild(t);//attach the text node to the paragraph element
  displayQuestions.appendChild(p);//attach the paragraph element to the #questions
}

//   var userPrompt = prompt(quiz[i][0]).toLowerCase();
//   console.log('User\'s orignal answer: ' + userPrompt + '.');
//   var userAnswer;//initialize user's converted answer.
//   if(userPrompt === 'yes' || userPrompt === 'y'){//convert user answer to boolean
//     userAnswer = true;
//     console.log('User answer is ' + userAnswer + ' vs ' + quiz[i][1] + '. User Points: ' + userPoints + '.');
//   } else if (userPrompt === 'no' || userPrompt === 'n') {
//     userAnswer = false;
//     console.log('User answer is ' + userAnswer + ' vs ' + quiz[i][1] + '. User Points: ' + userPoints + '.');
//   } else {
//     userAnswer = null;
//     console.log('User did not enter yes/no or y/n. User Points: ' + userPoints + '.');
//   }
//   if (userAnswer === quiz[i][1]){//check if answer is correct
//     userPoints = userPoints + 1;
//     console.log('User answered correctly: ' + userAnswer + '. User points: ' + userPoints + '.');
// var p = document.createElement('p');//create paragraph element
// var t = document.createTextNode((i + 1) + '. ' + quiz[i][0] + ' ' + quiz[i][1]);//create a new text node
// p.appendChild(t);//attach the text node to the paragraph element
// displayQuestions.appendChild(p);//attach the paragraph element to the #questions
//   } else {
//     var p = document.createElement('p');//create paragraph element
//     var t = document.createTextNode((i + 1) + '. ' + quiz[i][0] + ' ' + quiz[i][1]);//create a new text node
//     p.appendChild(t);//attach the text node to the paragraph element
//     displayQuestions.appendChild(p);//attach the paragraph element to the #questions
//   }
// }
//
// var statesILivedIn = ['washington', 'california', 'north carolina', 'florida']; //list of place i lived in
// var question6Tries = 5;//number of tries left to guess question 7
//
// console.log('question6 ***** ', question6);
//
// var question6 = prompt('Name one state I lived in.').toLowerCase();
// console.log('User answer to question 6 is: ' + question6);
// while (question6Tries > 0) {
//   if (statesILivedIn.indexOf(question6) > -1) {
//     alert('Hey! You got one right!');
//     console.log('User got question6 correctly');
//     userPoints = userPoints + 1;
//     question6Tries = -1; //ends while loop early
//     var p = document.createElement('p');//create paragraph element
//     var t = document.createTextNode('6. One state I lived in: ' + question6 + '.');
//     p.appendChild(t);
//     displayQuestions.appendChild(p);
//   } else {
//     question6Tries = question6Tries - 1; //minus question 7 tries.
//     question6 = prompt('Try again. You have ' + question6Tries + ' tries left after this. Name one state I lived in.').toLowerCase();
//     console.log('User is asked question 6 again. ' + question6Tries + ' left.');
//     var p = document.createElement('p');//create paragraph element
//     var t = document.createTextNode('6. One state I lived in: ' + question6 + '.');
//     p.appendChild(t);
//     displayQuestions.appendChild(p);
//   }
// }
//
// if (question6Tries === 0){
//   alert('You ran out of tries for quesiton 6. I\'ve lived in Washington, California, North Carolina, and Florida.');
//   console.log('User ran out of tries for question 6. Listed the correct answers.');
// }
//
// //Congrats and recap
// if (userPoints === 6) {
//   alert('Woohoo! Perfect score! You know me very well!');
//   console.log('User got a perfect score!');
// } else if (userPoints < 6 && userPoints >= 4) {
//   alert('Great Job! You got ' + userPoints + ' out of 6!');
//   console.log('User did ok. 3-5 points.');
// } else {
//   alert('Hey, ' + user + ', you got ' + userPoints + '. I know you can do better. Reload the page to try again.');
//   console.log('User got less than 3. Encouraged to try again.');
// }
//
// //update page with user score
// var updateScore = document.getElementById('scoreDisplay'); //get class scoreUpdate
// console.log('grab scoreDisplay ID.');
// updateScore.innerHTML = 'Your Score:' + userPoints + '/6'; //replace "Let's play" with latest score
// console.log('Score displayed on web page.');
