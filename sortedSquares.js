function sortedSquares(A) {
  return (A.map(n => n * n)).sort((a,b) => a - b);  
};

/* 
https://leetcode.com/problems/squares-of-a-sorted-array/

// i // arr // array to be mapped into sorted squares 
// o // arr // sorted array 
// c // ---
// e // ---

Map to squares, then sort
*/
