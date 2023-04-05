let notifyPrompt = require('readline-sync');

let firstName = notifyPrompt.question(`What is your first name? `);
let lastName = notifyPrompt.question('What is your last name?')

console.log(`Hello, ${firstName} ${lastName}!`);

