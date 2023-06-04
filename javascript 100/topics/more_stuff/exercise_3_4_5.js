//3. Write some code to output the square root of 37

console.log(Math.sqrt(37));

//4. Given a list of numbers, write some code to find and display the largest numeric value in the list.

console.log(Math.max(1, 6, 3, 2));


//5. What does the following function do?

function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
  }

// split into array seperated at ' '. then array is reversed. with map a new array is returned containing 
// length of each array element