//1. Retrieve a Value (Part 1) - Write the code necessary to retrieve the value of the courses property 
//of our student object.
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

//Ans:
// console.log(student.courses);
//or
// console.log(student['courses']);

//2. Retrieve a Value (Part 2) - Given the below object jane, write code that retrieves the 
//country in which Jane is located.
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

//Ans:
// console.log(jane.location.country);
//or
// console.log(jane.location['country']);

//3. Add a Property - Below is a simple object representing our dog, Fido. On lines 8 and 9, 
//write code to add properties 'age' and 'favorite food' to the fido object.
// let fido = {
//     name: 'Fido',
//     species: 'Labrador Retriever',
//     color: 'brown',
//     weight: 16,
//   }; 
  // Add property 'age'.
  // Add property 'favorite food'.
//solution:
//   fido['age'] = 4;
//   fido.favoriteFoood = 'meat';
//   console.log(fido);

  //4. Greetings From Jane - Add a property to the below object, jane, so that 
  //the code on line 13 logs 'Hej, Bobby!' to the console.
//   let jane = {
//     firstName: 'Jane',
//     lastName: 'Harrelson',
//     age: 32,
//     location: {
//       country: 'Denmark',
//       city: 'Aarhus'
//     },
//     occupation: 'engineer',
//     greet(name){
//         console.log(`Hej, ${name}!`);
//     }
//   };
  
//   jane.greet('Bobby'); // Hej, Bobby!

//5. Dot Notation vs Bracket Notation - Before running any code, determine what difference 
//there will be in the output of the two code snippets below (if any).
// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); //output: {prefix:'Pacific'}
// //vs

// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // {Indian:'Pacific'}

//Solution: Not the same.

//6. Is it true? - We are experimenting with some code to get more comfortable working 
//with objects. Run the snippet below and explain why "It's true!" is never output.
// let obj = {
//     num: 42,
//     'property name': 'string value',
//     true: false,
//     fun: function() {
//       console.log('Harr Harr!');
//     },
//   };
  
//   for (let prop in obj) {
//     if (prop === true) {
//       console.log("It's true!");
//     } else {
//       console.log('Not true');
//     }
//   }

//Answer: No, it is false. Object properties are always strings. When omitted, it is added automatically. So true becomes 'true'.

//7. Car Keys - Write code that stores all of the vehicle property names in an array called keys.
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// output: ['manufacturer', 'model', 'year', 'range', 'seats']

// let keys = [];
// for (let prop in vehicle) {
//   keys.push(prop);
// }
// console.log(keys);

//alt solution:
// keys = Object.keys(vehicle);
// console.log(keys);

//8. Convert an object to a nested array - Convert the person object into a nested array nestedPerson, 
//containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = [];

for (let prop in person) {
  nestedPerson.push([prop,person[prop]]);
}

console.log(nestedPerson);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
