//5.Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

  let newObj = Object.create(myProtoObj);

/** 
* 6. Which of the following values are primitive values? Which are objects? Which are neither?
* 
* "foo" - Primitive
* 3.1415 - Primitive
* [ 'a', 'b', 'c' ] - Objects
* false - Primitive
* foo - N - Identifier to name things
* function bar() { return "bar"; } - Object
* undefined - Primitive
* { a: 1, b: 2 } - Object
*/

/**
 * 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. 
 * Now, examine the following code snippets:
 * 
 */



newObj.qux = 3; // add property to newly created object newObj

let objKeys = Object.keys(newObj); // objKeys stores array with newObj keys


objKeys.forEach(function(key) {
  console.log(key);
});


for (let key in newObj) { // this will desplay properties including the properties of the prototype/ inherited object 
    // console.log(key);
  }

for (let key in newObj) {
    if(newObj.hasOwnProperty(key)){ //display only newObj properties
        console.log(key);
    }
}

  // Ans: myObj.qux = 3;
  // Without running this code, can you determine whether these two snippets produce the same output? No
  // Why? 1st on shows the keys while the second one prints current object


