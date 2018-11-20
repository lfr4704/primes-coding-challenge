import test from 'ava';
import { isPrime } from './model';

test('two is a prime number', t => {
  t.is(isPrime(2), true);
});

test('four is not a prime number', t => {
  t.is(isPrime(4), false);
});

test('one is not prime number', t => {
  t.is(isPrime(1), false);
});
