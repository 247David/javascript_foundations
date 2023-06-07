//1. Loop and Log - Add some code inside of the for loop below that logs 
//the current value of i to the console on each iteration. 
//Before you run the code: What sequence of numbers do you expect to be logged?
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }

  //output:
  //0
  //2
  //4
  //6
  //8
  //10

  //2. Countdown - The code below logs the numbers from 1 to 10. 
  //Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, 
  //and then logs 'Launch!'.

//   for (let i = 10; i >= 1; i -= 1){
//     console.log(i);
//   }


//3. Triple Greeting - Write a loop that logs greeting three times 

// let greeting = 'Aloha!';

// for (let i = 0; i < 3; i += 1) {
//     console.log(greeting);
// }

//4. Take Two - Write a for loop that iterates over all numbers from 1 to 100, and 
//outputs the result of multiplying each element by 2.

// for (let i = 1; i <= 100; i += 1) {
//     console.log(i * 2);
// }

//5. Looping over Array Elements - Using the code below as a starting point, write a while loop that 
//logs the elements of array at each index, and terminates after logging the last element of the array.

// let array = [1, 2, 3, 4];
// let index = 0;

// while(index < array.length) {
//   console.log(array[index]);
//   index += 1;
// }


//6. Continue - Take a moment to read the MDN documentation on the continue statement.
//Then write a for loop that loops over the elements of the array cities and logs the length of each string 
//to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

//continue is like skip

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// cities.forEach(function(element){
//   if(element === null) {
//     // continue; //forEach does not accept break or continue. ONLY return to break out
//   }
//   console.log(element);
// });

// for (let element = 0; element < cities.length; element +=1) {
//   if (cities[element] === null){
//     continue; 
//   }
//   console.log(cities[element]);
// }
//  if (!cities[i]) continue;

//7. And on and on and on - The following code keeps looping forever. (You can hit Ctrl-C to stop it.) 
//Why is that? Also modify it so that it stops after the first iteration.
//Ans: No terminating condition
// for (let i = 0; i < 1; i += 1) {
//   console.log("and on");
// }

// //OR
// for (let i = 0; ; i += 1) {
//   console.log("and on");
//   break;
// }

//8 . That's Odd - Write a while loop that logs all odd natural numbers between 1 and 40.
// let number = 1;

// while (number <= 40) {
//   if (number % 2 === 1){
//     console.log(number);
//   }
//   number += 1;
// }

//9. Finding Nemo - Loop over the elements of the array fish, logging each one. Terminate the loop immediately 
// after logging the string 'Nemo'.

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let element = 0; element < fish.length; element += 1) {

//   console.log(fish[element]); //to allow logging 'Nemo' before the terminating condition

//   if (fish[element] === 'Nemo') {
//        break;
// }

// }

//10. Do...While - What is the difference between the following two code snippets? 
//Check the MDN documentation on while and do...while
//Ans: Difference is that while loop runs based on the given condition while the do while loop runs at least once regardless of the condition. 
//The 2nd code(do...while) snippet logs 'Woooot'!
// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }

// let counter = 0;

// do {
//   console.log('Woooot!');
//   counter -= 1;
// } while (counter > 0);
