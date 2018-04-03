function findDuplicates(arr){
  let res = [];
  for(let i = 0 ; i < arr.length ; i++){
    let ind = Math.abs(arr[i]) - 1;
    if(arr[ind] < 0){
      res.push(ind + 1);
    }
    arr[ind] *= -1;
  }
  console.log(arr);
  return res;
}


findDuplicates([4,3,2,7,8,2,3,1]); // [2,3]

/* ============================

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

// i // arr // nums 
// o // arr // nums that appear twice
// c // in O(n) time and constant space 
// e // ---

Strategy: 


*/
