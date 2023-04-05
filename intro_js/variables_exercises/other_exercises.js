/*
What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

Ans: 
Error because it is out of the code block. Out of scope.
*/

/****
What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

Error - 

****/


/**** 
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

output => 'bar'

*/

/**** 
 const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

Ans: FOO => bar .. 
*/
