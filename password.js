const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator tool.", function(input){
    password = input(' ');
    
    usersPassword = (password[0]);

    console.log('password', usersPassword);

    if (usersPassword.length = 10){
       console.log('Valid password'); 
       }
    else { console.log('Invalid password');
    }
})