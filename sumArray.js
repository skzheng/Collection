function sumArray(arr){
  let maxSum = arr[0];
  let currSum = arr[0];
  for(let i = 1 ; i < arr.length ; i++){
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
    if(currSum < 0){
      currSum = arr[i]
    }
  }
  return maxSum;
}

/* =======================================

Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// i // arr // numbers to find largest contiguous sum 
// o // num // our greatest running sum 
// c // --- 
// e // ---

The Strategy:
Our largest contiguous sum is the largest sum created by any string of 
 elements. 
We can keep a counter for maximum sum seen thus far, as well as a count
 of the current running sum. 
We keep iterating and choose to add to our current sum if the new 
 current sum is larger 
  At each index, we compare our current sum with max sum 
Return our final maxSum 

*/
