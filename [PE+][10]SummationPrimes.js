function summationPrimes(n){
  let sum = 0;
  for(let i = 0 ; i <= n ; i++){
    if(primeChecker(i)){
      sum += i;
    }
  }
  return sum;
}

function primeChecker(num){
  if(num < 2) return false;
  return getFactors(num).length === 2;
}

function getFactors(num){
  let factors = [];
  let root = Math.floor(Math.sqrt(num));
  for (let i = 0 ; i <= root ; i++){
    if(num % i === 0){
      factors.push(i, num / i);
    }
  }
  return factors;
}

summationPrimes(10); // 17
summationPrimes(2000000); // 142913828922

/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

// i // num // n the maximum of our range 
// o // num // sum of all primes up to n 
// c // --- 
// e // 

The Strategy:
We iterate until n,
At each number, we check if the number is a valid prime 
  If a number is prime we can add this to our running sum 
  Else, we can ignore this number 
Continue until we have reached N

*/
