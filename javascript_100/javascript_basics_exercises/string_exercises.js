//1. Length - Determine the length of the string "These aren't the droids you're looking for.".

// console.log("These aren't the droids you're looking for.".length);

//2. ALL CAPS - Take the string 'confetti floating everywhere' and transform it to upper case.

// console.log('confetti floating everywhere'.toUpperCase());

//3. Repeat - Implement a function repeat that repeats an input string a given number of times, 
//as shown in the example below; without using the pre-defined string method String.prototype.repeat().

// let repeat = function (numberOfTimes, string) {
//     let repeatString = '';
//     while (numberOfTimes > 0) {
//         repeatString += string;
//         numberOfTimes --;
//     }
//     return repeatString;
// };

// console.log(repeat(2, 'ha'));

//4. Multiline String - Take the following rhyme:
// A pirate I was meant to be!
// Trim the sails and roam the sea!

// let multi_string = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';

// console.log(multi_string);

//5. Case-insensitive Equality - Given strings like the following, how can you check whether 
//they're equal irrespective of whether the characters they contain are upper or lower case?

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

console.log(paragraph);

const regrex = /[A-Z]/g;