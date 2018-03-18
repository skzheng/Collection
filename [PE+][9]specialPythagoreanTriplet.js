function findTriplet(n){
  let prod = 1;
  for(let i = 1 ; i < n / 3 ; i++){
    let b = ( Math.pow(i,2) - Math.pow(i - n, 2) ) / ( 2 * (i - n) );
    let c = n - i - b;
    if(isValid(b,c)){
      prod = Math.max(prod, i * b * c);
    }
  }
  return prod;
}

function isValid(){
  return [].slice.apply(arguments).every(item => {
    return Number.isInteger(item);
  });
}


findTriplet(1000); // 31875000

/* ============================================

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

// i // num // sum of numbers a, b, c 
// o // num // prod of valid numbers a * b * c 
// c // --- 
// e // ---

The Strategy: 
We want to find any triplets a, b, c using the following formulas:
a + b + c = n; // we derive ... c = n - (a + b)
a^2 + b^2 = c^2; // we derive ... b = (a^2  - (a-n)^2) / 2(a-n)

*/
