//1. In the following code snippet, find all violations of the style guide. 
//Rewrite it so that it conforms with the guide.

// let ice_cream_taste = 'chocolate'
// let ice_cream_density = 10

// while(ice_cream_density > 0)
// {
//     console.log('Drip...');
//     ice_cream_density -= 1;
// }

// console.log('The '+ ice_cream_taste +' ice cream melted.');


// let iceCreamTaste = 'chocolate';
// let iceCreamDensity = 10;

// while (iceCreamDensity > 0) {
//     console.log('Drip...');
//     iceCreamDensity -= 1;
// }

// // console.log(`The ${iceCreamTaste} ice cream melted.`);
// console.log('The '+ iceCreamTaste +' ice cream melted.');


//2. Without looking into your notes, try to remember which primitive data types are defined in JavaScript. 
//Then find this information on MDN.

// string
// number
// null
// undefined
// boolean
// symbol
// bigint

// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// console.log(Number.MAX_VALUE);

//3. Find the MDN documentation on operator precedence, 
//and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.
//Ans:
//left to right and like in PEMDAS
// console.log((4 * 5) + ((3 ** 2) / 10)); // => 20.9

//4. What is the difference between the two methods and which one should you use?


// let today = new Date();

// today.getYear(); //method 1
// today.getFullYear(); // method 2
// 
// let today = new Date();

// console.log(today.getYear()); //Outputs: 123. i.e Current year minus 1900. But this method is deprecated
// console.log(today.getFullYear()); //Outputs: 2023. Current and should be used instead.

//5. How many arguments does the Array.prototype.join() method expect? 
//What happens if you call it with less or more arguments?

//Ans: It expects 1. None, default of ',' is used. More than one, only first is considered.

//6. String Concatenation - Find out how we can join two or more strings together.
//Ans: 
// console.log('string1' + ' string2'); // Using '+' operator returns: 'string1 string2' 
// console.log('string1'.concat(' string2'));  //Using String.prototype.concat()method returns 'string1 string2'

//7. SyntaxError - The below code raises a SyntaxError. If you run the code, you'll see the following error message:
// let speedLimit = 60;
// let currentSpeed = 80;
// //missing parentheses fort the if condition 

// if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
//   console.log('"People are so bad at driving cars ' +
//     'that computers don\'t have to be that good to be much better." ' +
//     '-- Marc Andreessen');
// }


//8. TypeError - Run the following code.

let tweet = 'Woohoo! :-)';


//.length property was expected and not the method which s the same with parentheses

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}