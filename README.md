# primes-coding-challenge

## Objective
* Write a program that prints out a multiplication table of the first 10 prime
numbers.
* The program must run from the command line and print one table to
STDOUT.
* The first row and column of the table should have the 10 primes, with each cell containing the product of the primes for the corresponding row and column.

## Getting setup
```
$ git clone https://github.com/lfr4704/primes-coding-challenge.git

```

## Installing Dependencies
```
$ npm install
```

## Running the server
```
$ node multiply.js
```

## Running the tests
```
$ npm test
```

## Logic to solve this challenge
### Definitions:
Prime Number: a natural number that is exactly divisible by 2 natural numbers; itself and 1.  

Composite Number: a natural number that can be formed by multiplying two smaller natural numbers and it has one at least one divisor other than 1 and itself.

### Background
The Sieve of Eratosthenes algorithm can be used to find all primes up to a limit _N_.  

  For all numbers a: from 2 to sqrt(n) and increments of a + 1
    If a is unmarked then
      a is prime
      for all multiples of a (a<n)
        mark multiples as Composite

  (Return) all unmarked numbers are prime.

### Solution

The Sieve will return all primes that are less than a limit N, you can't return the first N primes as the coding challenge called for.
I took the following approach to solve the challenge:

1. Broke the problem into different functions
* A function checks if a number _num_ is prime
* A function that creates an array of the first 10 prime numbers
* A function to format and print matrix array into a stringified table format
* A function that creates spacing in between table cells dynamically (still needs work!)
* A function that generates the products of the prime numbers
* A function that outputs the primes multiplication table
* Last but not least a function that takes a user input to change the number of N primes for multiplication table.

## Notes
* Consider complexity. How fast does your code run? How does it scale?
* Consider cases where we want N primes.
* Do not use the Prime class from stdlib (write your own code).
* Write tests. Try to demonstrate TDD/BDD.

## References
Ava Testing https://github.com/avajs/ava
Logic https://stackoverflow.com/questions/17382910/writing-first-100-prime-numbers-to-a-file-using-node-js?lq=1
