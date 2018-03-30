function isToeplitzMatrix(matrix){
  let store = {};
  for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[0].length ; j++){
      if(i - j in store){
        if(matrix[i][j] !== store[i - j]){
          return false;
        }
      } else {
        store[i - j] = matrix[i][j]
      }
    }
  }
  return true;
}

isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]); // true 
isToeplitzMatrix([[0,33,98],[34,22,33]]); // false

/* ===============================

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: True
Explanation:
1324
5123
9512

In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.
Example 2:

Input: matrix = [[1,2],[2,2]]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
Note:

matrix will be a 2D array of integers.
matrix will have a number of rows and columns in range [1, 20].
matrix[i][j] will be integers in range [0, 99].

// i // arr // arr of arr to check for toeplitz stat
// o // bool // true or false depending on toeplitz 
// c // --- 
// e // --- 

Strategy:
We want to check that every element in each major diagonal is 
  equivalent.
In order to find elements in shared diagonals, we can use their 
  relative coordinates in the matrix. Every major diagonal element
  will have a shared value for (i - j)
We can keep track of values in a store to make sure they are equal 
  If so, we can continue to iterate 
  Else, we can return false
If we finish iterating, we can return true at the end of our matrix traversal


*/

