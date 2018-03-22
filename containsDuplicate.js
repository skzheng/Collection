function containsDuplicate(arr){
  let newSet = new Set([...arr]);
  return newSet.size !== arr.length;
}

containsDuplicate([1,1,2,3])

/* ==================================

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*/
