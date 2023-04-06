/***
 * 
Write a program that uses a multiply function to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
  
***/
let requirePrompt = require('readline-sync');

let multiply = (a,b) => ('Answer is: ' + a * b); //arrow function for multiplication

console.log('Multiplicator app \n');
let firstNumber = requirePrompt.question('Enter first number: \n');//user prompt for first input
let secondNumber = requirePrompt.question('Enter second number:\n');// user prompt for second input
console.log(multiply(firstNumber,secondNumber));//function call for multiplication
