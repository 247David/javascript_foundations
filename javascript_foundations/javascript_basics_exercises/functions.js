//1. Greet 1 - How can we alter the function definition of greet so that the parameter 
//greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?
// function greet(greeting) {
//   console.log(greeting + ', world!');
// }
//solution: 
// function greet(greeting='Hello') {
//     console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// greet();              // logs: undefined, world!  // should log: Hello, world!

//2. Greet 2 - Change the function greet from the previous exercise, so that it takes 
// two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. 
//The behavior should then be as follows:

//solution:
// function greet (greetings='Hello', audience='world') {
//     console.log(`${greetings}, ${audience}!`);
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

//3. Greet 3 - Now we are going to outsource the greeting and recipient to functions. 
// Change the function greet from the previous exercise, so that it doesn't take any arguments, 
//and instead calls the functions greeting and recipient defined below.

// function greeting() {
//     return 'Good morning';
//   }
  
// function recipient() {
//     return 'Launch School';
//   }

// function greet() {
//     console.log(`${greeting()}, ${recipient()}!`);
// }

// greet();

//4. Calculate BMI - Create a function that calculates a person's body mass index (BMI). 
//It should take two parameters: someone's height (in cm) and weight (in kg). 
//The formula for calculating the BMI is as follows

// bmi = weightInKilograms / heightInMeters**2;


// function calculateBMI (heightInCm, weightinKg) {
//     return (weightinKg / (heightInCm * 0.01)**2).toFixed(2);
// }

// console.log(calculateBMI(180, 80));

//5. Calculate Cat Age - Implement a function catAge that takes a number of human years as 
//input and converts them into cat years. Cat years are calculated as follows:

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.
//output:
// catAge(0); // 0
// catAge(1); // 15
// catAge(2); // 24
// catAge(3); // 28
// catAge(4); // 32

// function catAge (humanYears) {
//     let catAge = 0; 
//     let count = humanYears;
//     while (count > 0) {

//         if (count === 1) {
//             catAge += 15;
//         } else if(count === 2) {
//             catAge += 9;
//         } else {
//             catAge +=4;
//         } 
//         count -= 1;
//     }

//     return catAge;
// }

// //alt solution:
// function catAge(humanYears) {
//     switch(humanYears) {
//       case 0:
//         return 0;
//       case 1:
//         return 15;
//       case 2:
//         return 24;
//       default:
//         return 24 + (humanYears - 2) * 4;
//     }
//   }
// console.log(catAge(0));
// console.log(catAge(1));
// console.log(catAge(2));
// console.log(catAge(3));
// console.log(catAge(4));


//6. Remove Last Char - Create a function removeLastChar that takes a string as an argument, 
// and returns the string without the last character.
//removeLastChar('ciao!'); // 'ciao'
// removeLastChar('hello'); // 'hell'

// function removeLastChar (inputString) {
//     return inputString.substring(0,(inputString.length - 1));
// }

//alt:
// function removeLastChar(inputString) {
//     return str.slice(0, -1);
//   }
// console.log(removeLastChar('ciao!'));
// console.log(removeLastChar('hello'));

//7 . Arrow Functions (Part 1) - Refactor the function below using arrow syntax. 
// Line 9 should still log the same sentence.

// const template = 'I VERB NOUN.';

// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

// let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

// console.log(sentence('like', 'birds'));

//8. Arrow Functions (Part 2) - The function initGame below returns an object. 
//Refactor it using arrow function syntax.


// let initGame = function () {
//     return {
//       level: 1,
//       score: 0
//     }
//   };

let initGame = () => ({
    level: 1,
    score: 0
  });
  
  let game = initGame();
  
  console.log('Level: ' + game.level);
  console.log('Score: ' + game.score);