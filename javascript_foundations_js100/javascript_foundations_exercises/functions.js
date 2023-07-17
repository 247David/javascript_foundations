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

function greeting() {
    return 'Good morning';
  }
  
function recipient() {
    return 'Launch School';
  }

function greet() {
    console.log(`${greeting()}, ${recipient()}!`);
}

greet();