# Non code Solutions and Notes

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

### _Array

Ordered list of elements. Each elemnet has any tpe of value. Each element has unique index number. Arrays are indexed list and ordered lists.

```javascript
const myArray = [1,2,3];
```
The array content is mutable. 

Obejct.freeze array method to make array element const. E.g:
```javascript
const myArrat = Object.freeze ([1,2,3]);
```
Sub array(array stored in an array index) can be changed and will have to be freezed also as the main array.

aray.push(element) - pushes element to array and retruns updated length e.g ('a'), array.push(null, 'xyz').

array.concat(element) - adds/concatinates array(2,'abc') 

array.pop() - removes and returns the last element


slice(start, end)

splice(start, deleteCount, item1, item2, itemN)

```javascript

```end
