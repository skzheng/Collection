function moveZeroes(arr){
  let count = 0;
  for(let i = 0 ; i < arr.length ; i++){
    
    if(arr[i] === 0){
      count++;
    } else {
      arr[i - count] = arr[i];
    }
    
  }
  
  while(count > 0){
    arr[arr.length - count] = 0;
    count--;
  }
  
}

moveZeroes([0,1,0,3,12])

/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// i // arr // array of numbers to move zeroes
// o // arr // sorted array with zeroes at the end 
// c // in-place, no array copy, min operations 
// e // ---

The Strategy: 
We want to find all zeroes in this array, and move them to the end of the array.
We can keep a running count of zeroes so far,
  if an element is non-zero, we move it over by this many indices 
  if an element is zero, we can up count
We iterate until we reach arr.length - count because we know now that the rest of the elements are 0; 
We can fill the rest of the array with 0 elements
*/
