//Refactor

// let readLine = require('readline-sync');
// let age = readLine.question(`How old are you? `);
// age = parseInt(age);
// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

let readLine = require('readline-sync');
let age = readLine.question(`How old are you? `);
age = parseInt(age);
console.log(`You are ${age} years old.`);
let yearsCount = 10;
while (yearsCount <= 40) {
    console.log(`In ${yearsCount} years, you will be ${age + yearsCount} years old.`);
    yearsCount +=10;
}



//Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10.

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let tries = 0;
  let result = randomNumberBetween(1, 6);
  tries += 1;
  
  while (result <= 2) {
    result = randomNumberBetween(1, 6);
    tries += 1;
  }
  
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');