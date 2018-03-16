function productExceptSelf(arr){
  let runningProduct = 1;
  let newArr = [];
  for(let i = 0 ; i < arr.length ; i++){
    newArr[i] = runningProduct;
    runningProduct *= arr[i];
  }
  runningProduct = 1;
  for(let j = arr.length - 1 ; j >= 0 ; j--){
    newArr[j] *= runningProduct;
    runningProduct *= arr[j];
  }
  return newArr;
}

productExceptSelf([1,2,3,4])

/*

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

*/
