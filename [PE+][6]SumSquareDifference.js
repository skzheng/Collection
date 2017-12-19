function sumSquareDifference(n){
  let nums = [];
  for(let i = 0; i <= n ; i++){
    nums[i] = i;
  }
  return squaredSums(nums) - sumsSquared(nums);
}

// Calculate sum of all squares of numbers in an array
function sumsSquared(arr){
  let sum = arr.reduce((a,c) => a + (c * c));
  return sum;
}

// Calculate square of the sum of all numbers in an array
function squaredSums(arr){
  let sum = arr.reduce((a,c) => a + c);
  return sum * sum;
}

console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(100)); // 25164150

/* ====================================================================

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first N natural numbers and the square of the sum.

// i // num // number N to fill array up to
// o // num // difference between the sum of squares and square of sum of all numbers [ 1, ... N ]
// c // ---
// e // ---

The Strategy: 
1) Create a helper function to calculate sum of squares
1) Create a helper function to calculate the square of sum

Fill an array with numbers from 1 to N
Calculate difference between function 1 and function 2

*/
