const fs = require('fs');

fs.writeFileSync('shohagh.txt', 'Hello Shohagh,');
fs.appendFileSync('shohagh.txt', ' How are you?');
const myFile = fs.readFileSync('shohagh.txt');
console.log(myFile.toString());
