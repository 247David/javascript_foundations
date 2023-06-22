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

// console.log(string1.toUpperCase() === string2.toUpperCase());
// console.log(string2.toUpperCase() === string3.toUpperCase());
// console.log(string1.toUpperCase() === string3.toUpperCase());

//6. Write code that checks whether the string byteSequence contains the character x.

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu'

// console.log(byteSequence.includes('x'));

//7. Write a function that checks whether a string is empty or not. For example:
// isBlank('mars'); // false
// isBlank('  ');   // false
// isBlank('');     // true

// function isBlank (inputString) {
//     return (inputString.length) ? false : true ;
// }

//8. Blank? Version 2 - Change your isBlank function from the previous exercise to return true 
//if the string is empty or only contains whitespace. For example:

// function isBlank (inputString) {
//     return inputString.trim() ? false: true;
// }

//9. Capitalize Words - Write code that capitalizes the words in the string 
// 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'

let capitalizedWords = function (string) {
    let stringArray = string.split(' ');

    capitalizedArray = stringArray.map(element => (element.charAt(0).toUpperCase()+ element.substring(1)));

    return (capitalizedArray.join(' '));
};

console.log(capitalizedWords('launch school tech & talk'));
