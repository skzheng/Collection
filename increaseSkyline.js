function increaseSkyline(arr){
  let rowMax = [], colMax = [], sum = 0;
  for(let i = 0 ; i < arr.length; i++){
    rowMax.push(Math.max(...arr[i]));  
  }
  
  for(let j = 0 ; j < arr[0].length ; j++){
    let col = [];
    for(let i = 0 ; i < arr.length ; i++){
      col.push(arr[i][j]);
    }
    colMax.push(Math.max(...col));
  }
  
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[0].length ; j++){
      let newVal = Math.min(rowMax[i], colMax[j]);
      sum += (newVal - arr[i][j]);
      arr[i][j] = newVal;
    }
  }
  
  return sum;
}

increaseSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]); // 35

/* ========================================================

In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.

// i // arr // matrix of numbers representing building heights 
// o // num // sum of heigh increases 
// c // --- 
// e // --- 

Strategy: 
First, we take a look at how a skyline is formed based on each matrix 
we take the highest building heights in each column to find our 
  skyline heights for top/bottom 
similarly, we take the max heights in each row to form our left/ 
  right skylines. 
To find the amounts we can increase by, we want to make sure that 
  we move throughout the matrix, and increase only up to the smallest
  skyline value. For example, [0][0] increases to 8 instead of 9 because
  otherwise it would overshadow our original max height in that row 
We can find our max values for each row / col 
Then we can traverse our grid and compare our coordinates, increasing 
  to the smaller max value, while we increment our sum 
Return sum

*/
