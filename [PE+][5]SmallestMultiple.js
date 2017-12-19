function smallestMultiple(n){
  let nums = [];
  for (let i = 1 ; i <= n ; i++){
    nums[i] = i;
  }
  let prod = nums.reduce((a,c) => a * c, 1);
  for (let i = 1 ; i <= prod ; i++){
    if(nums.every(item => (i % item) === 0)){
        return i;
      }
  }
}

console.log(smallestMultiple(3)); // 6
console.log(smallestMultiple(10)); // 2520
console.log(smallestMultiple(20)); // 232792560

/*  ====================================================================
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to N?

// i // num // number N , [1, ... N]
// o // num // number that is divisible by all numbers [1, ... N]
// c // ---
// e // ---

The Strategy: 
Create filled array of numbers from 1 to N (we could optimize by reducing calculations of factors of other numbers, 4 & 5 with 20)
Create upper limit to optimize search (The largest number that is divisible by all numbers is always [ 1 * 2 * ... * N ] 
Iterate from 1 to upper limit (PROD) 
  Check to see if current number i is divisible by all numbers in array
    TRUE: Return i
    FALSE: Continue
*/
