function islandPerimeter(arr){
  let perim = 0;
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[0].length ; j++){
      if(arr[i][j] === 1) {
        console.log(i,j)
        perim += 4;
        perim += checkEdges(arr, i , j);
      }
    }
  }
  return perim;
}

function checkEdges(arr,i,j){
  let perim = 0;
    if(i + 1 < arr.length){
      if(arr[i+1][j] === 1){
        perim -= 1;
      }
    }
    
    if(i - 1 >= 0){
      if(arr[i-1][j] === 1){
        perim -= 1;
      }
    }
    
    if(j + 1 < arr[0].length){
      if(arr[i][j+1] === 1){
        perim -= 1;
      }
    }
    
    if(j - 1 >= 0){
      if(arr[i][j-1] === 1){
        perim -= 1;
      }
    }
    
  return perim;
}

let test = [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

islandPerimeter(test); // 16 

/* ======================

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:

// i // arr // a matrix of number values 
// o // num // total perimeter of 'islands'
// c // --- 
// e // ---

The Strategy:
In this case if we only have one island, we iterate until we find the first '1'
At this point we can iterate through directions and check whether each piece of land is touching any other piece of land 
  If so, we can subtract 1 for each connecting edge 
  Else, we leave the singular island alone 
Return our final perimeter

*/
