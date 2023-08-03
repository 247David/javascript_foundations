function factorial (number) {
    let factorial_number = 1;

    for(let counter = number; counter > 0; counter--) {
        factorial_number *= counter ;
    }
    return factorial_number;
}


function recursionFactorial(number) {

    return (number === 1) ? 1 : number * recursionFactorial(number - 1) ;
}

console.log(factorial(8));
console.log(recursionFactorial(8));
