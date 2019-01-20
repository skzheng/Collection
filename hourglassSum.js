function hourglassSum (arr) {
  let maxSum = -63; 
  for ( let i = 0 ; i < arr.length - 2 ; i++ ) {
    for ( let j = 0 ; j < arr[0].length - 2 ; j++ ) {
      maxSum = Math.max( maxSum, findSum( arr, i, j ) );
    }
  }
  return maxSum;
}

function findSum (arr, i , j) {
  let sum = 0;
  sum += arr[i][j] + arr[i][j+1] + arr[i][j+2] 
    + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

  return sum;
}
let arr = [ [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 9, 2, -4, -4, 0 ],
  [ 0, 0, 0, -2, 0, 0 ],
  [ 0, 0, -1, -2, -4, 0 ] ];

let arr2 = [ [ -9, -9, -9, 1, 1, 1 ],
  [ 0, -9, 0, 4, 3, 2 ],
  [ -9, -9, -9, 1, 2, 3 ],
  [ 0, 0, 8, 6, 6, 0 ],
  [ 0, 0, 0, -2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ] ];

hourglassSum(arr) // 13
hourglassSum(arr2) // 28

/* =============================================

https://www.hackerrank.com/challenges/2d-array/problem

// i // arr // a matrix containing #s 
// o // num // largest sum of 'hourglass' shapes in matrix 
// c // --- 
// e // ---

We want to find the largest sum of any hourglass group of numbers in our matrix. 
- Keep a running max for hourglass sums 
- Iterate through the matrix 
- At each index we can check for the hourglass formed where this index is the top left most point. 
- We can stop at the third to last row to save time, no hourglasses can be formed after this point.
- Compare each hourglass sum with our running max. 
- Return our max.

*/
