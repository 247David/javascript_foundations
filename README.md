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
