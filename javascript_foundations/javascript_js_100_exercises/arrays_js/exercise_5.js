//Write a findIntegers function that takes an array argument and returns an array that 
//contains only the integers from the input array. Use the filter method in your function.

let findIntegers = (inputArray => {
    return inputArray.filter(input => Number.isInteger(input));
});

//soln-2
/**
function findIntegers(array) {
    return array.filter(function(element) {
      return Number.isInteger(element);
    });
  }
*/

/**
 function findIntegers(array) {
    return array.filter(function(element) {
        return Number.isInteger(element);
  });
}
 */

//Test
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);