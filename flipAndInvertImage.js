function flipAndInvertImage(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j ++) {
      arr[i][j] = 1 - arr[i][j];
    }
    arr[i] = arr[i].reverse();
  }
  return arr;
}

/*
https://leetcode.com/problems/flipping-an-image/submissions/

// i // arr // matrix (arr of arr) of values to flip
// o // arr // flipped + inverted matrix
// c // ---
// e // ---

We can iterate through the arr, at each row
  invert each value in specific row
  at the end of the row, we can reverse the array
Return mutated arr

*/
