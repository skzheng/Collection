const repeatedNTimes = function (arr) {
  let counter = {};
  for (let i = 0 ; i < arr.length ; i++) {
    if (counter[arr[i]] !== undefined) {
      ++counter[arr[i]];
      if (counter[arr[i]] === arr.length / 2) {
        return arr[i];
      }
    } else {
      counter[arr[i]] = 1;
    }
  }
  return false;
};

/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:

Input: [1,2,3,3]
Output: 3
Example 2:

Input: [2,1,2,5,3,2]
Output: 2
Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5

Note:

4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even

// i // arr // nums
// o // num // num w/ count === N
// c // ---
// e // ---

We can keep a storage of counts of numbers as we iterate through the array. 
Once we reach an object that has N occurences, we can then return this value. 
*/
