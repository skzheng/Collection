function largestPrimeFactor(n){
  let primeFactors = [];
  let root = Math.sqrt(n);
  for (let i = 0 ; i <= root ; i++){
    if(n % i === 0 && primeTester(i)){
      primeFactors.push(i);
    }
    if(n % i === 0 && primeTester(n / i)){
      primeFactors.push(n / i);
    }
  }
  return primeFactors.sort((a,b) => b - a )[0];
}

// Helper function
function primeTester(n){
  let root = Math.sqrt(n);
  for (let i = 2 ; i <= root ; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}


// console.log(largestPrimeFactor(9)); // 9
// console.log(largestPrimeFactor(13195)); // 29
// console.log(largestPrimeFactor(600851475143)); // 6857

/* ====================================================================

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of a given number N ?

// i // num // find largest prime factor of num
// o // num // the largest prime factor 
// c // --- 
// e // ---

The Strategy:
// We only want to check up until sqrt of N because we can extract all factors from that range
Iterate through until sqrt of N
  If i is a factor, check if a number in this factor pair is prime
    TRUE: Add to array of prime factors
    FALSE: Continue
Return largest prime factor by sorting array
