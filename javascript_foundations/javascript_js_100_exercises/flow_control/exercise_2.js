function evenOrOdd (input) {
    if (!(Number.isInteger(input))) {
        console.log('Invalid input');
        return;
    }
    
    if (input % 2 === 0){
        console.log('Even');
    } else {
        console.log('Odd');
    }
}