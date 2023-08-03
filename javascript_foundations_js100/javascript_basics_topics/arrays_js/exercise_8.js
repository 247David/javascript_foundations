//Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. 
//Instead, try to use the reduce method.

// let oddLengths = function(inputArray){
//     let arrayLength = inputArray.map(x => x.length);
//     let discardEven = arrayLength.filter(num => (num % 2 !== 0));
//     return discardEven;
// };

let oddLengths = inputArray => {
    return inputArray.reduce((accumulator, element) => {
        if (element.length % 2 !== 0) {
            accumulator.push(element.length);
        }
        return accumulator;
    }, []);
};



//Test
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
