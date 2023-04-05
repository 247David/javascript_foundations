let myName = 'David' + ' ' + 'Jaiyeola';

console.log(myName);


let number = 4936;

let ones = 4936 % 10 ;

number = (number - ones) / 10;

let tens = number % 10;

number = (number - tens) / 10;

let hundreds = number % 10;

number = (number - hundreds) / 10

thousands = number;

/* Identify the data type for each of the following values:

'true' => String
false => boolean
1.5 => Number
2 => Number
undefined => undefined
{ foo: 'bar' } => Object

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:
*/



/* Create an array named names that contains a list of pet names

Name
asta
butterscotch
pudding
neptune
darwin 

*/



//Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

console.log(`The value of 5 + 10 is ${Number('5')+ 10}.`);

/**
Will an error occur if you try to access an array element with an index that is greater than or equal to the length 
of the array? For example:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
Ans = No .. It will be undefined.
 */

let names = ['asta','butterscotch','pudding','neptune','darwin'];

let pets = {'asta':'dog','butterscotch':'cat','pudding':'cat','neptune':'fish','darwin' :'lizard'};

// 'foo' === 'Foo' => false
console.log(`${'foo' === 'Foo'}`);