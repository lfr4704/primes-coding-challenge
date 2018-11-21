const readline = require('readline');

//
console.log("the server is running!\n");

const model = require('./model');
// console.log(model);
model.primesMultiplicationTable(10);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a different prime number limit: \n', (answer) => {
  model.primesMultiplicationTable(answer);

  rl.close();
});
