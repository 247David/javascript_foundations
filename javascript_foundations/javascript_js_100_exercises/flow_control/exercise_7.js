function toAllCaps(input) {
    if (input.length > 10) {
        return input.toUpperCase();
    } else {
        return input;
    }
}
//alternate solution
function toAllCaps2(input) {
    return ((input.length > 10) ? input.toUpperCase() : input);
}

//Logging to console to test the function
console.log(toAllCaps2('How are you doing today? '));