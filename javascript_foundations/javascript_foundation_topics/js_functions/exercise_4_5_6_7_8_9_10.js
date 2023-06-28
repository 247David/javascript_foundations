//What does the following codes log to the console
function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
  scream('Yipeee');
  //=> Nothing... returns before the console.log


  function scream(words) {
    return words + '!!!!';
  }
  
  scream('Yipeee');
  //=> Nothing


function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/****
 * Solution is for the function above
In the code shown below, identify the following items:
-the function arguments => 2,3,4
-the function body 
=>everything between {}
=> let result = num1 * num2 * num3;
  return result;
-the function declaration
=>everything about the function from 1st line from declaration ('function' .. to end '}')
=>function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}
-the function invocation => multiplyNumbers(2, 3, 4)
-the function name => multiplyNumbers
-the function parameters => num1, num2, num3
-the function return value => num1 * num2 * num3 => 24
-the names of all variables in this program => num1, num2, num3, result
****/


/****
Without running the following code below, what do you think it will output?
****/
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
// Ans:=>
//Hello
//undefined


function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
//=>42
//3.1415 ... 2.718 is ignored as function takes only two parameters.




/***
 Identify all of the variables named on each line of the following code. 
 You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written). 
 ***/
function multiply(left, right) { //variables - multiply references the function, left, right 
  let product = left * right; //variable product storing left * right
  return product; // variable product return
}

function getNumber(prompt) { //variables - getNumber, prompt
  return parseFloat(question(prompt)); // variables - parseFloat, question, prompt
}

let left = getNumber('Enter the first number: '); //variable left, getNumber
let right = getNumber('Enter the second number: '); // variable right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); //console,left,right, multiply.. concole.log is a method in the

/***
 
Classify each variable name as either global or local. 

***/
function multiply(left, right) { //multiply - global, left - local, right - local
  let product = left * right; //product - local
  return product; //product - local
}

function getNumber(prompt) { //getNumber - global, prompt - local
  return parseFloat(question(prompt)); //parseFloat - global, question - global, 
}

let left = getNumber('Enter the first number: '); // left -global
let right = getNumber('Enter the second number: ');//right - global
console.log(`${left} * ${right} = ${multiply(left, right)}`);//console - global

/**
 Global Variables: multiply, getNumber, left, right, console, parseFloat, question.
Local Variables: left, right, product, prompt 
 **/