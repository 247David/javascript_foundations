//1. What's my value? (Part 1) - What will the following code log to the console and why? 
//Don't run it until you have tried to answer.

// console.log(greeting);

// var greeting = 'Hello world!';

//ans: undefined
// hosting in javascript allows undeclared variables to be used.
//alt ans:
//All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. 

//2. What's my value? (Part 2) - What will the following code log to the console and why? 
//Don't run it until you have tried to answer

// console.log(greeting);

// let greeting = 'Hello world!';
// ReferenceError - Unlike var, let variables are not hoisted.

//3. What's my value? (Part 3) - What will the following code log to the console and why? 
//Don't run it until you have tried to answer.

// if (true) {
//     let myValue = 20;
//   }
  
//   console.log(myValue);

//ReferenceError
//variables declared with `let` are block scoped.


//4. What's my value? (Part 4) - What will the following code log to the console and why? Don't run it until you have tried to answer.

// function myFunction() {
//     let a = 1;
  
//     if (true) {
//       console.log(a);
//     }
//   }
  
//   myFunction();

  //Ans: 1

//5. What's my value? (Part 5) -  What will the following code log to the console and why? Don't run it until you have tried to answer.
//   function myFunction() {
//     let a = 1;
  
//     if (true) {
//       console.log(a);
//       let a = 2;
//       console.log(a);
//     }
//   }
  
//   myFunction();
//Ans: ReferenceError- cant  use 'a' before declaring/initailization


//6. What's my value? (Part 6) - What will the following code log to the console and why? Don't run it until you have tried to answer.

// let a = 5;
// let b = false;

// if (a > 4) {
//   let b = true;
// }

// console.log(b);
// console:
// false
// why:
// 'b' was only changed within the if scope

//7. What's my value? (Part 7) - What will the following code log to the console and why? Don't run it until you have tried to answer.

// let a = 1;

// function myFunction() {
//   console.log(a);
// }

// myFunction();

// Console:
// 1

// Why:
// 'a' defined before the function

//8. What's my value? (Part 8) - What will the following code log to the console and why? Don't run it until you have tried to answer.
// let a = 1;

// function myFunction(a) {
//   console.log(a);
// }

// let b = 2;

// myFunction(b);
// output:
// 2
// Why:
// function call takes 2 as an argument.

//9. What's my value? (Part 9) - What will the following code log to the console and why? Don't run it until you have tried to answer.

// const a = 1;

// function myFunction() {
//   a = 2;
// }

// myFunction(a)
//Ans:
// TypeError

// Why:
// Const variable can not be reassigned.

//10. What's my value? (Part 10) - What will the following code log to the console and why? Don't run it until you have tried to answer.
// const a = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// function myFunction() {
//   a.firstName = 'Jane';
// }

// myFunction();

// console.log(a);

// Output:
// {
//   firstName: 'Jane',
//   lastName: 'Doe'
// }
// Why: 
// cont object values are mutable