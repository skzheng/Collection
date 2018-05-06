function largestIsland(grid){
  let max = 0;
  let dimension = 0;
  for(let i = 0 ; i < grid.length ; i++){
    for(let j = 0 ; j < grid[0].length ; j++){
      dimension++;
      if(grid[i][j] === 0){
        grid[i][j] = 1;
        let copy = grid.map(item => item.slice());
        max = Math.max(countArea(copy, i, j), max);
        grid[i][j] = 0;
      } 
    }
  }
  if( max === 0 ){
    return dimension;
  }
  return max;
}

function countArea(grid, i , j){
  let count = 0; 
  if(grid[i][j] === 1){
    count++;
    grid[i][j] = 0;
    if(i - 1 >= 0){
      count += countArea(grid, i - 1, j);
    }
    if(j -1 >= 0){
      count += countArea(grid, i , j - 1);
    }
    if(i + 1 < grid.length){
      count += countArea(grid, i + 1, j);
    }
    if(j + 1 < grid[0].length){
      count += countArea(grid, i, j + 1);
    }
  }
  return count;
}

largestIsland([[1, 0], [0, 1]])
/* =============================

In a 2D grid of 0s and 1s, we change at most one 0 to a 1.

After, what is the size of the largest island? (An island is a 4-directionally connected group of 1s).

Example 1:

Input: [[1, 0], [0, 1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: [[1, 1], [1, 0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 1.
Example 3:

Input: [[1, 1], [1, 1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 1.
 

Notes:

1 <= grid.length = grid[0].length <= 50.
0 <= grid[i][j] <= 1.

*/
