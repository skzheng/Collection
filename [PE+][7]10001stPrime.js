function primeFinder(n){
  let result, counter = 0, i = 0;
  while(counter < n){
    if(isPrime(i)){
      result = i;
      counter++;
    }
    i++;
  }
  return result;
}

// Check if a number is prime
function isPrime(n){
  let factors = [];
  if(n === 0 || n === 1) return false;
  for(let i = 0 ; i <= Math.sqrt(n) ; i++){
    if(n % i === 0){
      factors.push(i, n / i);
    }
  }
  return factors.length === 2;
}

console.log(primeFinder(1)); // 2 
console.log(primeFinder(2)); // 3
console.log(primeFinder(3)); // 5
console.log(primeFinder(4)); // 7
console.log(primeFinder(5)); // 11
console.log(primeFinder(10001)); // 104743

/*  ====================================================================
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the Nth prime number?

// i // num // number N , [1, ... N]
// o // num // Nth prime number
// c // ---
// e // ---

The Strategy: 
1) Create a helper function to check prime numbers.

Create count that increments until n
Iterate on a number i
Check if current i is a prime number
  TRUE: Increment count, set current prime number
  FALSE: Continue
Once we reach counter === n, we can break
Return the latest result
*/
