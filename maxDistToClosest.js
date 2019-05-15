function maxDistToClosest(arr) {
  let max = 0;
  let start = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 1) {
      if (start !== i) {
        let dist = arr[start] === 1 ? Math.floor((i - start) / 2) : (i - start);
        max = Math.max(max, dist);
      }
      start = i;
    } else if (i === arr.length - 1) {
      max = Math.max(max, i - start);
    }
  }
  return max;
}

/*
https://leetcode.com/problems/maximize-distance-to-closest-person/submissions/

// i // arr // array of numbers representing seats 0 = empty, 1 = taken
// o // num // max distance to next person
// c // ---
// e // ---

We want to find the largest distance between two 1 values that represent the start and end of a contiguous set of 0s.
In most cases we find the max distance by taking the midpoint of our starting 1 and ending 1 (floored).
Our two edge cases are if there are sets of seats with no start 1 or end 1.
As we iterate through we can replace our start val and calc max distance. 
Create checks at arr[0] and arr[arr.length - 1] 
Return max distance
*/
