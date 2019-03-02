function pickingNumbers(arr) {
  let maxLength = 0;
  let hash = arr.reduce((acc,curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {});
  for (let key in hash) {
    if (hash[key - 1]) {
      maxLength = Math.max(maxLength, hash[key] + hash[key - 1]);
    } 
    if (hash[key + 1]) {
      maxLength = Math.max(maxLength, hash[key] + hash[key + 1]);
    }
    maxLength = Math.max(maxLength, hash[key]);
  }
  return maxLength;
}

pickingNumbers([1,1,2,2,4,4,5,5,5])

/*
https://www.hackerrank.com/challenges/picking-numbers/problem

// i // arr // array of numbers
// o // num // max length of sub array of input arr where max diff between any pairs is 1
// c // --- 
// e // ---

We iterate through the arr to create a hash of all occurrences of numbers in arr
We iterate through the hash to check if there are any neighboring keys ...
Check if any pairs of neighboring keys will exceed our max length
Return max length
*/
