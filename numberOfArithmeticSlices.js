function numberOfArithmeticSlices(arr){
  let count = 0;
  let subs = findSubarrays(arr);
  subs.forEach(item => {
    if(sequenceChecker(item)){
      count++;
    }
  })
  return count;
}

function findSubarrays(arr){
  let subarrays = [];
  for (let i = 0 ; i < arr.length ; i++){
    for (let j = i + 1 ; j < arr.length + 1 ; j++){
      subarrays.push(arr.slice(i,j))
    }
  }
  return subarrays;
}

function sequenceChecker(arr){
  let step;
  if (arr.length < 3) return false;
  for (let i = 0 ; i < arr.length - 1 ; i++){
    if (step){
      if(arr[i + 1] - arr[i] !== step){
        return false;
      } 
    } else {
      step = arr[i + 1] - arr[i];
    }
  }
  return true;
}

// findSubarrays([1,2,3,4])
sequenceChecker([1,2,3])


/*
A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.


Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
*/
