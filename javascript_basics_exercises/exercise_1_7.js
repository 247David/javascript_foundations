//1. What is an excellent destination when looking for JavaScript documentation?

// Ans: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

//2. Find out whether JavaScript has a method to lowercase a string, for example converting 
//'Aloha, World!' into 'aloha, world!.
//Ans: .toLowerCase()

let lowerString ='Aloha, World!'.toLowerCase();

console.log(lowerString);

//3. Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

let capitalizeString = 'Mountain'.charAt(0).toUpperCase()+ 'Mountain'.slice(1);

console.log(capitalizeString);


//3. How can we access the element 'and' in the array ['fish', 'and', 'chips']?

let element = ['fish', 'and', 'chips'];

console.log(element[1]);

//4. What happens if we take the array ['fish', 'and', 'chips'] and try to access the element 
//at index position 10? Try this in your JavaScript console.

//Ans: undefined 

//5. What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation 
// about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

//line 3 for question reference
trees[trees.length - 1]; //=>'palm tree'
trees.pop(); //=> 'palm tree'
trees[trees.length - 1];// => 'sequoia'

//6. Look up the MDN documentation for the typeof operator. 
//What is its return value? Determine what the following statements will return:


// typeof 23.5; // => number
// typeof 'Call me Ishmael.'; // => String
// typeof false; //=> boolean
// typeof 0; //=> number
// typeof null; // => Object
// typeof undefined; //=> undefined

//No 6 Tester: 
console.log(typeof undefined);

//7. Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

//What will the following statements return?

typeof tweet; // => string
typeof words; // => object
typeof isValid; // => boolean



