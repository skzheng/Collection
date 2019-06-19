function countPrimes(n) {
  let count = 0;
  for (let i = 0 ; i < n ; i ++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function isPrime(n) {
  let factors = [];
  let root = Math.floor(Math.sqrt(n));
  for (let i = 0 ; i <= root ; i++) {
    if (n % i === 0 && !factors.includes(i)) {
      factors.push(i, n / i);
    }
  }
  return factors.length === 2 && n !== 1;
}

countPrimes(10); // 4

/*
// i // num // limit to count primes up until
// o // num // number of primes until n
// c // --- 
// e // ---

Better Solution

We iterate to n and mark down numbers down the road that aren't primes because they have multiples

var countPrimes = function(n) {
    let flagArray = [],
        result = 0;
    for(let i = 2; i < n; i++){
        if(flagArray[i] === undefined){
            // is Primes
            flagArray[i] = 1;
            result++;
            // rm it's multiples
            let j = 2;
            while(i * j < n){
                flagArray[i * j] = 0;
                j++;
            }
        }
    }
    return result;
};
*/
