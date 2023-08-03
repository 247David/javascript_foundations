//Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. 
//You can also use Object.is(value, NaN) to make the same determination.

//Without using either of those methods, write a function named isNotANumber that returns true if 
//the value passed to it as an argument is NaN, false if it is not.

let isNotANumber = function (input) {
    return (typeof input !== 'number') ? 'true':'false';
}

console.log(isNotANumber(7));

// NaN compared to itself returns false unlike any other object in JS
// Infinity === Infinity => true, 0 === 0 => true, null === null =>true e.t.c
// function isNotANumber(value) {
//     return value !== value;
//   }