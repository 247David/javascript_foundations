# Javascript Notes

## Preparation Exercises

### _Constructors for each of the methods and if Static or Prototype method_

| Method| Constructor | Static or Prototype |
| ----------- | ----------- | -------------- |
| substring | String | Prototype
| create | Object | Static
| fromCharCode | String | Static |
| slice | Array, String | Prototype |
| toString | String, Array, Object | Prototype |


- Static method - You call on the Object/Constructor
- Prototype method - Instance method that can be called directly on e.g String, Array (e.g. Array.prototype.toString())



### _Names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables_
- index
- lazyDog
- operand2



### _Names satisfy the style guidelines for function names_
- index
- CatName // Constructor functions use PascalCase
- lazyDog
- operand2



### _Names satisfy the style guidelines for constants used to represent magic numbers(unchanging number)_

- BIG_NUMBER

### _Names don't satisfy the style guidelines for naming variables, functions, or constants?_

- 1stCharacter - Starts with a number.
- snake_name - underscore not allows. Allowed for file names. Screaming snake case(BIG_NUMBER) for constants
### Input/Output
Make sure there is a package.json file, then install and save readline-sync.
- npm install readline-sync --save
```javascript
let input = require('readline-sync');
let input1 = input.question('Enter input 1');
console.log(input1);

```
### _String_

.split() - .split('')


### _Array_

Ordered list of elements. Each element has any tpe of value. Each element has unique index number. Arrays are indexed list and ordered lists.

```javascript
const myArray = [1,2,3];
```
The array content is mutable. 

Obejct.freeze array method to make array element const. E.g:
```javascript
const myArray = Object.freeze ([1,2,3]);
```
Sub array(array stored in an array index) can be changed and will have to be freezed also as the main array.

array.length - returns array length

aray.push(element) - pushes element to array and returns updated length e.g array.push('a'), array.push(null, 'xyz').

array.concat(element) - adds/concatinates array(2,'abc') 

array.pop() - removes and returns the last element

array.shift(); returns first element


slice(start, end)

splice(start, deleteCount, item1, item2, itemN)

#### Array methods that help with iteration

.forEach:
```javascript
let numbers = [1,2,3];
array.forEach(function(num){
    console.log(num);
}); 

//forEach executes the function and returns undefined.
//forEach modifies/edits the 'numbers' array (which is not part of the call back function).
//forEach method parameters: callbackFn, element, index, array, thisArg

```
.every:
```javascript
const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);

let array1 = [11, 22, 33];
let array2 = [21, 22, 23];
let array3 = [11, 22, 33];

console.log(compareArrays(array1, array2)); //false
console.log(compareArrays(array1, array3)); //true

let provinces = ['Ontario', 'Alberta', 'Saskatchewan'];

let contains = function (stringInput, provinces) {
    return !provinces.every(x => x !== stringInput )
};

console.log(contains('Manitoba', provinces)); //false

//every returns true if callbackFn returns a truthy
//every method parameters: callbackFn, element, index, array, thisArg

const nums = [80, 7, 37, 98, 12, 42];

nums.every(n => n < 100); // true

nums.some(n => n % 2 == 1); // true

```
.map:
```javascript
let numbers = [1,2,3];
let squares = numbers.map(function(num){
    return num * num;
});
//map returns a new 'numbers' array.
//map's callback function will not update the original numbers array.
//map method paramenters: callbackFn, element, index, array, thisArg

["1", "2", "3"].map((string) => parseInt(string));
//output:[1,2,3]
```
.filter:
```javascript
let numbers = [1,2,3,4,5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
//does not mutate the original array.
//filter method returns new array all truthy values(pass the given condition)
//filter method paramenters: callbackFn, element, index, array(array filter() is called upon), thisArg(value of 'this')
```
.reduce:
```javascript
reduce(function(accumulator/previouIteration,task/currentValue, index, array){

});

[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
//Above returns 95:10(initial)+15(currentValue)+...
//forEach,map and filter can be built with the reduce method.
//reduce parameters: callbackFn,accumulatoe, currentValue,currentIndex,array, initialValue
```
Comparing Arrays:
Using operators like '==' and '===' to compare arrays will retrun false even when they are the same just like with objects.
The array values will have to be compared instead or arrays converted to string and the compared.

```javascript
let array1 = [1,2,3,4];
let array2 = [1,2,3,4];

console.log(array1 == array2); //output: false

console.log(array1.toString() === array2.toString()); // output: true ('1,2,3,4' === '1,2,3,4')

console.log(JSON.stringify(array1) === JSON.stringify(array2)); //output: true ('[1,2,3,4]' === '[1,2,3,4]')

```
### _Side Note_
```javascript
typeof [1,2,3,4]; // Object: this will return Object and not array

Array.isArray([1,2,3,4]); // true

Array.isArray('string input'); // false

```

```javascript
Array.prototype.includes()
```

### _Functions_

Default Paramenter:

```javascript
function find (name='Nemo') {
  console.log(`Finding ${name}!`);
}
find()// Finding Nemo!
find('Jesse') // Finding Jesse!

```