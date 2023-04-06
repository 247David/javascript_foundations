/***
Function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. 
Use the return values to greet the user with their full name.
***/
let notifyPrompt = require('readline-sync');

function getName () {
    let firstName = notifyPrompt.question(`Enter first name:\n`);
    let lastName = notifyPrompt.question(`Enter last name\n`);

    return "Welome " + firstName + " " + lastName +"!";

}

console.log(getName());