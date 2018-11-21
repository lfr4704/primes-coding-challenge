
//function to check if a given number is prime
const isPrime = num => {
  let max = Math.sqrt(num);
  for(let i = 2; i <= max; i++) {
    if(num % i === 0 ) {
      return false;
    }
  }
  return num !== 1 && num !==0 && num > 0 ;
}

//Function to list the first N primes into an array
function listPrimes( nPrimes ) {
  let arrayPrimes = [];
  for(let n = 2; nPrimes > 0; n++) {
    if( isPrime(n) ) {
      arrayPrimes.push(n);
      --nPrimes;
    }
  }
  return arrayPrimes;
}

// Function to add spacing in between each number in table
function space(val) {
  let space = '';
  let pad = 4 - val;
  while(pad > 0){
    space += ' ';
    pad--;
  }
  return space;
}

//function to format the prime array into multiplication table
function printMatrix(matrixArray, horizontalLabels, verticalLabels) {
  const horizontalLabelString = ' x   ' + horizontalLabels.map(label => `[${label}]`).join(" ");

  let stringifiedArray = matrixArray.map(
    (row, index) => `[${verticalLabels[index]}]` + space((verticalLabels[index]+'').length) + row.join(" ")
  );

  stringifiedArray.unshift(horizontalLabelString);
  console.log(stringifiedArray.join(" \n"))
}

// Alternate ES6 utilizing forEach Method
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

let result =' x   ';


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

module.exports = {
    isPrime,
    primeTable,
}



// ES5 Alternate to print primes multiplication table, not efficient!

//function to check if a given number is prime
// function isPrime(n) {
//   let max = Math.sqrt(n);
//   for(let i = 2; i <= max; i++) {
//     if(n % i === 0 ) {
//       return false;
//     }
//   }
//   return true;
// }

//Function to add spacing in between each number in table
// function space(val) {
//   let space = '';
//   let pad = 4 - val;
//   while(pad-- > 0){
//     space += ' ';
//   }
//   return space;
//   console.log(val);
// }


//function to print prime number multiplication table
// function primeTable2() {
//   const arrayPrimes = listPrimes(10);
//   console.log(arrayPrimes.length);
//   let primes = ' x   ';
//     for (let rowIndex = 0; rowIndex < arrayPrimes.length+1; rowIndex++) {
//       for(let n = 0; n < arrayPrimes.length; n++) {
//         if( rowIndex === 0 && n >= 0 ) {
//           primes +='[' + arrayPrimes[n] + ']' + space((n + '').length+2);
//           console.log(" the first number is " +  arrayPrimes[n]);
//         }
//         else if( n === 0 && rowIndex >= 0){
//           primes += '[' + arrayPrimes[rowIndex-1] + ']';
//         }
//         else if( rowIndex >= 0 && n >= 0 ) {
//           primes += space((arrayPrimes[rowIndex-1]*arrayPrimes[n] + '').length) + arrayPrimes[rowIndex-1]*arrayPrimes[n];
//         }
//       }
//       primes += '\n';
//     }
//   return primes;
//   }
// primeTable2();
