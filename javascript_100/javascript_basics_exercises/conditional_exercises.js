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