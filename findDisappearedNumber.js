function findDisappearedNumbers(arr){
  let res = [];
  let store = {};
  
  for(let i = 1 ; i <= arr.length ; i++){
    store[i] = true
  }
  
  for(let i = 0 ; i < arr.length ; i++){
    store[arr[i]] = false;
  }
  
  for(let key in store){
    if(store[key]){
      res.push(parseInt(key));
    }
  }
  
  return res;
}

findDisappearedNumbers([4,3,2,7,8,2,3,1]);

/* ========================================

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

// i // arr // numbers from 1 to N 
// o // arr // missing nums 
// c // ---
// e // ---

*/
