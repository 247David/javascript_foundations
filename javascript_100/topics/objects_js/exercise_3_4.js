/** 
* Use object literal syntax (e.g., { key: value, ... } notation) to create an object 
* that behaves as an array in a for statement. The object should contain at least 3 elements. 
* You should place your code between the braces in the let statement.
*/

let objectContainer = {};

for(let index = 0; index < 3; index +=1) {
    objectContainer[index] = index+1;
}

// console.log(objectContainer);

/**
 let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
 */

// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. 
// Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj).map(key => key.toUpperCase());

console.log(objKeys);