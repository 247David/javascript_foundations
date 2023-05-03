//Use reduce to compute the sum of the squares of all of the numbers in an array:


let sumOfSquares = function(inputArray) {
    return inputArray.reduce(function(accumulator,element) {
        return accumulator + (element * element);
    },0);//0 for the sum initial value of accumulator
};




//test
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83