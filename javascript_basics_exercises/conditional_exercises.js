//1. Truthy vs Falsy - Without looking at your notes or MDN, 
//try to recall all values that count as falsy in JavaScript.
//Ans: false
// null
// undefined
// 0
// NaN
// '' or ""
// -0 (negative zero)
// 0n (BigInt zero)

//2. Yes? No? Part 1 - The code provided below will randomly initialize randomNumber to either 0 or 1 
//each time it is executed. Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if 
//randomNumber is 0.
//Ans:
//start of code
// let randomNumber = Math.round(Math.random());
// if (randomNumber) {
//     console.log('Yes!');
// } else {
//     console.log('No.');
// }
//end of code

//alt : console.log(randomNumber ? 'Yes!' : 'No.'); - since ternary returns the consition true/passed value

//3. Yes? No? Part 2 (ternary operator) - Take your code from the previous exercise and rewrite the 
//conditional so that it uses the ternary if-then-else operator.
//condition ? expression1 : expression2
//Ans:
// let randomNumber = Math.round(Math.random());
// console.log(randomNumber ? 'Yes!' : 'No!');


//4. Check the Weather, Part 1 - Initialize a variable weather with a string value being "sunny", "rainy", or anything else.
// Write an if statement that logs:
// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.

// let weather = 'sunny';

// if (weather === 'sunny') {
//     console.log("It's a beautiful day!");
// } else if(weather === 'rainy') {
//     console.log("Grab your umbrella.");
// } else {
//     console.log("Let's stay inside.");
// }

// console.log('It\'s a beautiful day!'); -To use \'

//5. Switch - Take a look at the code below. Without running it, determine what it will log to the console. 
//If you're not sure, refer to the MDN documentation on switch statements.

// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// }

//Ans - No break hence:
//neigh
//tweet tweet
//*cricket*

//6. Check the Weather, Part 2 - Take your code from the previous Check the Weather exercise and 
//rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.

// let weather = 'sunny';

// switch (weather) {
//     case 'sunny':
//         console.log("It's a beautiful day!");
//         break;
//     case 'rainy':
//         console.log("Grab your umbrella.");
//         break;
//     default:
//         console.log("Let's stay inside.");
//}//end of switch case

//7. Logical Conditions 1 - Predict the output of the following code:
// if (false || true) {
//     console.log('Yes!');
//   } else {
//     console.log('No...');
//   }

//Ans: 'Yes!'

//8. Logical Conditions 2 - Predict the output of the following code:

// if (true && false) {
//     console.log('Yes!');
//   } else {
//     console.log('No...');
//   }

//Ans: No...

//9. Logical Conditions 3 - Without running the below code, determine what will be logged to the console

// let sale = true;

// let admissionPrice = !sale ? 5.25 : 3.99;

// console.log('$' + admissionPrice);

//Ans: $3.99

//10. Determine what the following code snippet logs. First solve it in your head or on paper, 
// and only then run it in your JavaScript console to check the result.

// let speed = 0;
// let acceleration = 24;
// let brakingForce = 19;

// let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

// console.log(isMoving);

//Ans: True

//11. Sum - Examine the example function invocation below. Write the function sum, such that it accepts 
//two arguments and returns the sum of its arguments. You may assume that the function arguments will always 
//be numbers.

// sum(22, 10); // 32

// let sum = (arg1, arg2) => arg1 + arg2;

// console.log(sum(22, 10));

//12. Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. 
// What is the return value of the function?
// Ans: 

// let brendanEichQuote = function () {
//     console.log('Always bet on JavaScript.');
// }

// brendanEichQuote();

//13. Cite the Author - Let's generalize the function from the previous exercise a bit. 
// Implement a function cite that takes two string arguments: the author of the quote and what 
// they said. It then logs the quote to the console, as in the following example.

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."