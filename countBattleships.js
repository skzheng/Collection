function countBattleships(arr){
  let count = 0; 
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[i].length ; j++){
      if(arr[i][j] === 'X'){
        count++;
        sinkShips(arr,i,j);
      }
    }
  }
  return count;
}

function sinkShips(arr,i,j){
  if(arr[i][j] === 'X'){
    arr[i][j] = '.';
      if((i+1) < arr.length){
        sinkShips(arr, i+1, j);
      }
      if(i > 0){
        sinkShips(arr, i-1, j);
      }
      if((j+1) < arr[i].length){
        sinkShips(arr,i,j+1);
      }
      if(j > 0){
        sinkShips(arr,i,j-1);
      }
  }
}

countBattleships('X..X\n...X\n...X');

/*


Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?

// i // arr of arrs // A matrix of '.' and 'X' to represent the board
// o // num || 'INVALID' // number of battleships on the board or an invalid 
// c // --- 
// e // ---

Our goal is count the amount of valid battle ships
-Battleships must be length 1xN or Nx1, 
-Battleships must be separated by at least one spot

We can traverse the board until we hit a battleship, once we hit a battleship...
  -We can increment count by 1;
  -We can sink this battle ship;
    -We sink battleships by following the battleship along the horizontal plane or vertical plane;
    -Once we start moving across the plane we recurse and sink('X' -> '.') the ship before we can move onto the next position;
  -We continue to do so until we reach the end of the board;
Finally we can return the battleship count;
*/
