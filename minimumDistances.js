function minimumDistances (a) {
  let hash = {};
  let min = a.length;
  for (let i = 0; i < a.length; i++) {
    if (a[i] in hash && (i - hash[a[i]]) < min) {
      min = (i - hash[a[i]]);
    }
    hash[a[i]] = i;
  }
  return min === a.length ? -1 : min;
}

minimumDistances([7, 1, 3, 4, 1, 7]); // 3
minimumDistances([1,1]); // 1

/*

https://www.hackerrank.com/challenges/minimum-distances/problem

// i // arr // numbers
// o // num // min dist between common num
// c // --- 
// e // ---

We can iterate through the array, using a hash to keep track of previous index values and their position. 

*/
