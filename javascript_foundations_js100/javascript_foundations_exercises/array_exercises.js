//1. First Element - Write a function that returns the first element of an input array. 
// first(['Earth', 'Moon', 'Mars']); // 'Earth'

// function first (inputArray) {
//     return inputArray[0];
// }

// console.log(first(['Earth', 'Moon', 'Mars']));

//2. Last Element - Write a function that returns the last element of an input array. For example:
// last(['Earth', 'Moon', 'Mars']); // 'Mars'

// function last (inputArray) {
//     return inputArray[inputArray.length - 1];
// }

// console.log(last(['Earth', 'Moon', 'Mars']));

//3. Add + Delete - We are given the following array of energy sources
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
//Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// energy.push('geothermal');

// console.log(energy.filter(element => element !== 'fossil'));
//or

// energy.push('geothermal');
// energy.shift();//or //energy.splice(0, 1) //or //energy = energy.slice(1);
// console.log(energy);


//4. Alphabet - Split the string alphabet into an array of characters
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet.split(''));

//5. Filter - Count the number of elements in scores that are 100 or above.
// let scores = [96, 47, 113, 89, 100, 102];

// console.log(scores.filter(function(score){
//     return score >= 100;
// }).length);

//or
// let count = 0;
// for (let i = 0; i < scores.length; i+=1) {
//     if (scores[i] >=100) {
//         count +=1;
//     }
// }
// console.log(count);

//6. Vocabulary - We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
// This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays 
//and logs each vocabulary word to the console.

// let vocabulary = [
//     ['happy', 'cheerful', 'merry', 'glad'],
//     ['tired', 'sleepy', 'fatigued', 'drained'],
//     ['excited', 'eager', 'enthused', 'animated']
//   ];
// Expected output:
// happy
// etc...

// vocabulary.forEach(function(subArray){
//   subArray.forEach(function(word){
//     console.log(word);
//   })
// });

//7. Equality - Predict the output of the below code. When you run the code, 
//do you see what you expected? Why or why not?
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

//Ans: No, array are objects and when you compare objects with '===', you get false.