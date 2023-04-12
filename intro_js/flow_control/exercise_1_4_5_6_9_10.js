// //1. what does the following evaluate to

// false || (true && false);
// true || (1 + 2);
// (1 + 2) || true;
// true && (1 + 2);
// false && (1 + 2);
// (1 + 2) && true;
// (32 * 4) >= 129;
// false !== !true;
// true === 4;
// false === (847 === '847');
// false === (847 == '847');
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;


// //------


// false || (true && false); // => false
// true || (1 + 2); // => true
// (1 + 2) || true; // ==> 3
// true && (1 + 2); // ==> 3
// false && (1 + 2); // //==> false
// (1 + 2) && true; // ==> true
// (32 * 4) >= 129; // ==> false
// false !== !true; // ==> false
// true === 4; // ==> false
// false === (847 === '847');//==> true
// false === (847 == '847'); // ==> false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // ==> true




// 4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113'); 
//==> 
/***
Product2
Product3
Product not found! 
***/


//5. Refacor with if statement
return foo() ? 'bar' : qux();
//==>
// if(foo()) {
//   return 'bar';
// } else {
//   return qux();
// }


//6. What is the output

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

//==> 
//Not Empty -- empty arrat returns true unlike empty string('')


//9. Without running this code, what will it print?

console.log(false ?? null); //==> false
console.log(true ?? (1 + 2)); //==> true
console.log((1 + 2) ?? true); //==> 3
console.log(null ?? false); //==> false
console.log(undefined ?? (1 + 2)); // ==> 3
console.log((1 + 2) ?? null); //==> 3
console.log(null ?? undefined); //==> undefined
console.log(undefined ?? null); //==> null

//10. Without running this code, what will it print?
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); //==> foo is 5, bar is 7
show(0, 0); //==> foo is 0, bar is 0
show(4); // ==> foo is 4, bar is 42
show(); // ==> foo is 3, bar is 42

