let bar = 1;
function foo() {
    let bar = 2;
}

foo();
console.log(bar);

//From the above, bar is => 1 because the bar in function foo is local to only function foo().