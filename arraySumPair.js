function arrayPairSum(nums){
  nums = nums.sort((a,b) => a - b);
  return nums.reduce((acc,curr,i) => {
    return (i % 2 === 0) ? acc + curr : acc;
  }, 0)
}

arrayPairSum([1,4,3,2]); // 4

/* ==============================

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

// i // arr // arr of numbers to be paired 
// o // num // maximum sum of min(a,b) pairs 
// c // ---
// e // ---

Strategy: 
In this problem we want to maximize sum of pairs where we take the 
  minimum value 
How we want to go about doing this is pairing off numbers closest
  to each other, therefore we can reduce the distance b/t nums 
Since we have an array of 2n numbers, we can sort this array and 
  know that the left hand partners or even indices are the min val 
We sort the array from least to greatest 
We iterate through the array to sum all our even indices 
Return this sum 

*/
