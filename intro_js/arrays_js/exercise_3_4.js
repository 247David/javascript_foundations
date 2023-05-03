//In this problem, we're again interested in even numbers, 
//but this time the numbers are in nested arrays in a single outer arra
 
let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

myArray.forEach(x => {
    return x.forEach(y => (y % 2 === 0) ? console.log(y) : false);
});


//method 2
myArray.forEach(function(x){
    x.forEach(function(y){
        if(y % 2 === 0){
            console.log(y);
        }
    });
});


//Question 4. Let's try another variation on the even-numbers theme.

let mapArray2 = myArray.map(x => (x % 2 === 0) ? 'even': 'odd');

console.log(mapArray);
