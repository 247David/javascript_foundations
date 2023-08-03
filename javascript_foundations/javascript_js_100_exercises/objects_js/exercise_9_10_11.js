//9. What does the following program log to the console? Why?

let foo = {
    a: 'hello',
    b: 'world',
  };
  
  let qux = 'hello';
  
  function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
  }
  
  bar(foo, qux);
  
  console.log(foo.a);
  console.log(qux);

  //Ans: hi - Objects are mutable
  //qux = 'hello' - Strings are primitive, primitives are not mutable

// 10 . How many primitive values are there in the following expression? Identify them. 
//How many objects are there in the expression? Identify those objects.

//[1, 2, ["a", ["b", false]], null, {}]
// 6 primitive
// 4 objects

//11. Write some code to replace the value 6 in the following object with 606
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

  //Ans: obj.bar[3].xyz = 606;
  //or
  //obj['bar'][3]['xyz'] = 606;




