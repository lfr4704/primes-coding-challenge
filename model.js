//
//
// function nPrimes(number) {
//   Console.log("Enter the number of prime numbers for multiplication table: ")
// }


//function to check if the number is primes
function isPrime(n) {
  let max = Math.sqrt(n);
  for(let i = 2; i <= max; i++) {
    if(n % i === 0 ) {
      return false;
    }
  }
  return true;
}


function listPrimes ( nPrimes ) {
  let arrayPrimes = [];
  for(let n = 2; nPrimes > 0; n++) {
    if( isPrime(n) ) {
      arrayPrimes.push(n);
      --nPrimes;
    }
  }
  return arrayPrimes;
}

// list the prime numbers to a string
function primeTable2() {
  let arrayPrimes = listPrimes(10);

  let primes = ' x   ';
    for (let rowIndex = 0; rowIndex < arrayPrimes.length; rowIndex++) {
      for(let n = 0; n < arrayPrimes.length; n++) {
        if( rowIndex == 0 && n > 0 ) {
          primes +='[' + arrayPrimes[n] + ']' + ' ';
          console.log(primes);
        }
        else if( n == 0 && rowIndex > 0){
          primes += '[' + arrayPrimes[rowIndex] + ']';
          console.log("entered second loop");
        }
        else if( rowIndex > 0 && n > 0 ) {
          primes += "    " + arrayPrimes[rowIndex]*arrayPrimes[n];
          console.log("entered third loop");
        }

      }
      primes += '\n';
    }
  return primes;
  }


// primeTable2();
let x = [
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
]

function printMatrix(matrixArray, horizontalLabels, verticalLabels) {
  const horizontalLabelString = ' x ' + horizontalLabels.map(label => `[${label}]`).join(" ");

  let stringifiedArray = matrixArray.map(
    (row, index) => `[${verticalLabels[index]}] ` + row.join(" ")
  );

  stringifiedArray.unshift(horizontalLabelString);
  console.log(stringifiedArray.join(" \n"))
}

let result =' x   ';

// function primeTable(listOfPrimes) {
//     let matrixArray = [];
//     listOfPrimes.forEach(function(rowPrimeNumber, rowIndex) {
//       matrixArray.push([]);
//       listOfPrimes.forEach(function(columnPrimeNumber, columnIndex) {
//         let product = rowPrimeNumber * columnPrimeNumber;
//         matrixArray[rowIndex].push(product);
//       })
//     })
//     return matrixArray;
// }

function primeTable(listOfPrimes) {
    let matrixArray = listOfPrimes.map((rowPrimeNumber, rowIndex) => {
      return listOfPrimes.map((columnPrimeNumber, columnIndex) => {
        return rowPrimeNumber * columnPrimeNumber;
      })
    })
    return matrixArray;
}

const primesMultiplicationTable = (numberOfPrimes) => {
  const listOfPrimes = listPrimes(numberOfPrimes);
  const primeTableMatrix = primeTable(listOfPrimes);
  printMatrix(primeTableMatrix, listOfPrimes, listOfPrimes);
}

primesMultiplicationTable(10);


// isPrime();
// primeTable();

module.exports = {
    // space,
    isPrime,
    primeTable,
}
