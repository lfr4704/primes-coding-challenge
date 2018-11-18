

function nPrimes(number) {
  Console.log("Enter the number of prime numbers for multiplication table: ")
}

let result = ' x   ';

function space(val) {
  let space = '';
  let pad = 4 - val;
  while(pad-- > 0){
    space += ' ';
  }
  return space;
  console.log(val);
}
space();

function isPrime() {

    for(let r = 0; r < 11; r++) {
      for(let c = 0; c < 11; c++) {
        if(r == 0 && c > 0) {
          result +='[' + c + ']' + space((c + '').length+2);
        } else if(c == 0 && r > 0) {
          result += '[' + r + ']';
        } else if(r > 0 && c > 0) {
          result += space((r*c+ '').length) + r*c;
        }
      }
      result += '\n'
    }

  }

isPrime();
console.log(result);

module.exports = {
    space,
    isPrime,
}
