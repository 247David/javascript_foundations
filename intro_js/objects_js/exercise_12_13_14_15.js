  //12. Consider the following code:

  function foo(bar) {
    console.log(bar, bar, bar);
  }
  
  bar = foo;
  
  foo("hello"); // should print "hello hello hello"
  bar("hi");    // should print "hi hi hi"
// As written, this code will raise an error on line 6. 
// Without creating a new function or changing lines 5 or 6, update this code to work as intended.
// Ans:



// 13. Consider the following code:


// function foo(bar) {
//     console.log(bar());
//   }

// foo(function() { return 'Welcome'});   //line 23 // Should print 'Welcome'

  function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });
  // foo();    // Should print 3.1415
  // foo();    // Should print [1, 2, 3]

// As written, this code will raise an error on line 23. 
// Without modifying foo, update this code to print the desired text.


/**
* 14. Identify all of the variables, object property names, primitive values, and objects 
* shown in the following code (assume the code has not been executed). 
* Don't panic if you miss a few items - this exercise is more challenging than it looks.
*/

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

//variables - howdy, foo, greeting, name, hello, xyzzy
//object property a, b, c, d, 
//primitive values - 1, 2, 3, 4, 5, ' ', 'Grace', 'Hi' 
//objects - hello, xyxxy, c,d, { a: 1, b: 2, c: [3, 4, 5], d: {} }


//15. Identify all of the variables, object property names, primitive values, and objects in the following code. 
//This problem is even more challenging than the previous one.


function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

//Variables - bar, arg1, arg2, foo, qux, result

//property names - abc, def, ghi, jkl, mno, pqr

//primitive values - 'Hello', 1,2,3,4,5,6, null, NaN, 'Victoria', 'Antonina'

//objects - bar, qux, abc, [4,5,6]