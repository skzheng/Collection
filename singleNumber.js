function singleNumber(nums){
  let obj = {};
  for(let i = 0 ; i < nums.length ; i++){
    if(obj[nums[i]]){
      delete obj[nums[i]];
    } else {
      obj[nums[i]] = 1;
    }
  }
  return(parseInt(Object.keys(obj)[0]))
}

// singleNumber([-1])

/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// i // arr // numbers to check
// o // num // the lonely number 
// c // O(n) and no memory?
// e // 

The Strategy: 
Not the best solution;
We want to iterate through this array once only;
We want to keep track of our numbers in a hash, checking if this number has appeared before.
  If this number has appeared, we can delete the key 
  Else, we know this is the first time we've seen it, set the count to 1
At the end of the iteration, our hash should only have one key, which would be the only single number
*/
