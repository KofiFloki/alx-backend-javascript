// Reading from stdin
const readline = require('readline');

const tack = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// Asking the user for their name
tack.question('Welcome to Holberton School, what is your name?\n', (name) => {
 console.log(`Your name is: ${name}`);

 // Ending the program
 tack.close();
});

// Catching the event when the user ends the program
tack.on('close', () => {
 console.log('\nThis important software is now closing');
 process.exit(0);
});