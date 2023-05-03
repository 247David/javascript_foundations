//Use map and filter to first determine the lengths of all the elements in an array of string values, 
//then discard the even values (keep the odd values).


//???
// let oddLengths2 = inputArray => {
//     return inputArray.map(x => x.filter(x.length % 2 === 0 ));
// };

let oddLengths = function(inputArray){
    let arrayLength = inputArray.map(x => x.length);
    let discardEven = arrayLength.filter(num => (num % 2 !== 0));
    return discardEven;
};



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

