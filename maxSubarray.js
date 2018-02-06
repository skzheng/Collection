function maxSubarray(arr){
  let maxSum = arr[0];
  let currSum = arr[0];
  for(let i = 1 ; i < arr.length ; i++){
    currSum = Math.max(arr[i], currSum + arr[i]);
    if(currSum > maxSum){
      maxSum = currSum
    }
    if(currSum < 0){
      currSum = arr[i]
    }
  }
  return maxSum;
}

maxSubarray([1,2,3]) // 6
maxSubarray([-3,8,3,1,0,-4]) // 12
maxSubarray([-1,-2,-3, -4]) // -1
