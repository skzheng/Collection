function majorityElement(nums){
  let hash = nums.reduce((acc,curr) => {
    acc[curr] = ++acc[curr] || 1;
    return acc;
  }, {})
  
  for(let key in hash){
    if(hash[key] > (nums.length / 2)){
      return parseInt(key);
    }
  }
}

majorityElement([1,1,1,4,1,1,2])

/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

*/
