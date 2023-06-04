//Without using a for, while, or do/while loop, 
//write some code that checks whether the number 3 appears inside these arrays:

let checkNumber = (function(arr) {
    return arr.filter(numCheck => numCheck ===3) ? 'It apears' : 'It does not appear';
});




let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// console.log(checkNumber(numbers1));
console.log(numbers1.includes(3));



//Write some code to replace the value 6 in the following array with 606:
let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

  //solution
  arr[1][3] = 606;