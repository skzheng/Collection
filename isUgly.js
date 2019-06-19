function isUgly(num) {
  if (num <= 0) {
    return false;
  }
  let factors = findFactors(num);
  let uglyPrimes = [1, 2, 3, 5];
  let result = true
  factors.forEach(item => {
    let f = findFactors(item);
    if (f.length === 2 || item === 1) { 
      if (!uglyPrimes.includes(item)) {
        result = false;
      }
    }
  });
  return result;
}

function findFactors(num) {
  let root = Math.floor(Math.sqrt(num));
  let factors = [];
  for (let i = 0 ; i <= root ; i++) {
    if (num % i === 0) {
      factors.push(i, num / i);
    }
  }
  return factors;
}


/*
// i // num // number that may just be ugly
// o // bool // true or false whether or not number is uggggly
// c // ---
// e // ---

A number is ugly if it is 
  1. Positive
  2. Prime factors are only either 2,3,5

We can find a number's factors by iterating from 1 to the sq rt of n
Using a similar helper function we can find out if any of the numbers is prime because they only have factors 1 and itself
*/
