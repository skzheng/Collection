function twoSum(arr, target){
  let store = {};
  for(let i = 0 ; i < arr.length ; i++){
    let curr = arr[i];
    let comp = target - curr;
    if(comp in store){
      return [ store[comp], i ];
    } else {
      store[curr] = i;
    }
  }
}

twoSum([3,3], 6)

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
