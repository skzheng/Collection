function multiples(num){
  let sum = 0;
  for(let i = 0 ; i < num ; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}


/* ====================================================================

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below N.

// i // num // number to count up to
// o // num // sum of multiples of 3 or 5 up to N
// c // Natural numbers
// e // ---

The Strategy :
Iterate from 0 to N
  Check if current number is a multiple of 3 or 5
    TRUE: Add to sum
    FALSE: Continue
Return sum

console.log(multiples(10)); // 23
console.log(multiples(100)); // 2318
console.log(multiples(1000)); // 233168

*/
