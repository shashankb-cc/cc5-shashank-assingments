import { input } from "@inquirer/prompts";

import assert from "assert";

function generatePrimeSeries(count) {
  //pre-condition
  //must be a number
  if (typeof count !== "number") {
    return false;
  }
  //must be a positive integer or greater that or equal to 1
  if (count < 1) {
    return [];
  }

  const primeNumbers = [];
  let firstNum = 2;
  while (primeNumbers.length < count) {
    if (isPrime(firstNum)) {
      primeNumbers.push(firstNum);
    }
    firstNum++;
  }
  return primeNumbers;
}

function isPrime(num) {
  // pre conditions
  //its must always a number
  if (typeof num !== "number") {
    return false;
  }
  //  primes are always > 1, and they will have a factor other than themselves or 1
  if (num < 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Post-conditions for isPrime function

//Test cases (postive)
assert(isPrime(2), "2 is a prime number");
assert(isPrime(4), "4 is not a prime number");
assert(isPrime(5), "5 is a prime number");
assert(isPrime(6), "6 is not a prime number");
assert(isPrime(29), "29 is  a prime number");

//Test cases (negativr)
assert(isPrime(-2), "-2 is not a prime number");
assert(isPrime(0), "0 is not a prime number");
assert(isPrime(-7), "-7 is not a prime number");

//Test cases (non-numbers)
assert(isPrime("a"), "a is not a number");
assert(isPrime(), "Undefined is not an integer");
assert(isPrime("*"), "* is not an integer");

//Post-conditions for generatePrimeSeries

assert.deepStrictEqual(
  generatePrimeSeries(5),
  [2, 3, 5, 7, 11],
  "Count 5 must return [2,3,5,7,11]"
);
assert.deepStrictEqual(
  generatePrimeSeries(0),
  [],
  "It should be an empty array"
);
assert.deepStrictEqual(generatePrimeSeries(1), [2], "Count 2 must return [2]");
assert.deepStrictEqual(
  generatePrimeSeries(3),
  [2, 3, 5],
  "Count 5 must return [2,3,5]"
);
// assert.deepStrictEqual(generatePrimeSeries("a"), [], "Input must be a number");
assert.deepStrictEqual(
  generatePrimeSeries(-3),
  [],
  "Input must be greater than or equal to 1"
);
