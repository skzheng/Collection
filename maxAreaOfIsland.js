function maxAreaOfIsland(arr){
  let count = 0;
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[0].length ; j++){
      if(arr[i][j] === 1){
        console.log(i,j)
        count = Math.max(count, countArea(arr,i,j,0));
      }
    }
  }
  return count;
}

function countArea(arr,i,j,area){
  if(arr[i][j] === 1){
    area++;
    arr[i][j] = 0;
    if(i + 1 < arr.length){
      area += countArea(arr, i + 1, j, 0);
    }
    if(j + 1 < arr[0].length){
      area += countArea(arr, i, j + 1, 0);
    }
    if(i - 1 >= 0){
      area += countArea(arr, i - 1, j, 0);
    }
    if(j - 1 >= 0){
      area += countArea(arr, i, j - 1, 0);
    }
  }
  return area;
}

let a = [
 [0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

maxAreaOfIsland(a); // 6 

/* ==========================================

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.

*/
