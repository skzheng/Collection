function numRookCaptures(board) {
  let rook;
  let count = 0;
  board.forEach((row, i) => {
    row.forEach((col,j) => {
      if (board[i][j] === 'R') {
        rook = [i,j];
        //up 
        let up = 1;
        while (i-up >= 0) {
          if(board[i-up][j] === 'p') {
            count++;
            break
          } else if (board[i-up][j] === 'B') {
            break;
          }
          up++;
        }
        //down
        let down = 1;
        while (i+down < board.length) {
          if(board[i+down][j] === 'p') {
            count++;
            break
          } else if (board[i+down][j] === 'B') {
            break;
          }
          down++;
        }
        //left
        let left = 1;
        while (j-left >= 0) {
          if(board[i][j-left] === 'p') {
            count++;
            break
          } else if (board[i][j-left] === 'B') {
            break;
          }
          left++;
        }
        //right
        let right = 1;
        while (j+right < board[0].length) {
          if(board[i][j+right] === 'p') {
            count++;
            break
          } else if (board[i][j+right] === 'B') {
            break;
          }
          right++;
        }
      }
    })
  })
  return count;
}

numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]])

/*
https://leetcode.com/problems/available-captures-for-rook/submissions/

We want to look through our board and find the position that our rook is placed.
Our rook can capture pawns in any of the 4 directions if there's exisiting spaces.
Once the rook reaches any piece, the our check stops.
So once we find our rook we just iterate in each direction.

*/
