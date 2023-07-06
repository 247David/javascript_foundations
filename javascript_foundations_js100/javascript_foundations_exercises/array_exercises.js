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
// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2);

//Ans: No, array are objects and when you compare objects with '===', you get false.

//8. Type - How can you check whether a variable holds a value that is an array? For example, 
//imagine you start writing a function and want to check whether its argument is an array:

// function filter(input) {
//     if (Array.isArray(input)){
//         console.log('Array input')
//     } else {
//         console.log('not an array');
//     }
//   }

//   filter([1,2,3,4]); //output: Array input

//9. Travel - The destinations array contains a list of travel destinations.

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];
//Write a function that checks whether or not a particular destination is included within 
//destinations, without using the built-in method Array.prototype.includes().
//contains('Barcelona', destinations); // true

// let contains = function (inputSearch, destinations) {
//     let found = 0;
//     for (let i = 0; i < destinations.length; i+=1) {
//         if (destinations[i] === inputSearch) {
//             found +=1;
//         } 
//     }
//     return found ? true : false;
// };

//or 
// contains = function (stringInput, provinces) {
//     return !provinces.every(x => x !== stringInput )
// };
//or 
// function contains(element, list) {
//     return list.indexOf(element) >= 0;
//   }

// console.log(contains('Barcelona', destinations));//true
// console.log(contains('Nashville', destinations));//false

//10. Passcode - We generated parts of a passcode and now want to combine 
//them into a string. Write some code that returns a string, with each portion of the 
//passcode separated by a hyphen (-).
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// console.log(passcode.join('-'));

//11. Checking items off the grocery list - We have made a grocery list, and as we check off items on 
// that list, we would like to remove them.
// Write code that removes the items from 'groceryList' one by one, 
//until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// while (groceryList.length > 0) {
//     console.log(groceryList.pop());
// }

while (groceryList.length > 0) {
    let removedItem = groceryList.shift();
  
    console.log(removedItem);
  }
