function spiralCopy(arr){
  let store = [];
  while(arr.length > 0){
    let left = [];
    store = store.concat(...arr.shift());
    for(let i = 0 ; i < arr.length ; i++){
      if (i === (arr.length - 1)){
        store = store.concat(...arr.pop().reverse());
      } else {
        store = store.concat(arr[i].pop());
        left = left.concat(arr[i].shift());
      }
    } 
    store = store.concat(left.reverse())
  }
  return store;
}

// Method 2 
/*
function spiralCopy(inputMatrix){
    let numRows = inputMatrix.length;
    let numCols = inputMatrix[0].length;
    
    let topRow = 0;
    let btmRow = numRows - 1;
    let leftCol = 0;
    let rightCol = numCols - 1;
    let result = [];

    while (topRow <= btmRow && leftCol <= rightCol){
        // copy the next top row
        for(let i = leftCol ; i <= rightCol; i++){
          result.push(inputMatrix[topRow][i])
        }
        topRow++

        // copy the next right hand side column
        for(let i = topRow; i <= btmRow; i++){
          result.push(inputMatrix[i][rightCol]);
        }
        rightCol--

        // copy the next bottom row
        if(topRow <= btmRow){
          for(let i = rightCol; i >= leftCol; i--){
            result.push(inputMatrix[btmRow][i]);
          }
          btmRow--
        }

        // copy the next left hand side column
        if(leftCol <= rightCol){
          for(let i = btmRow; i >= topRow; i--){
            result.push(inputMatrix[i][leftCol])
          }
          leftCol++
        }
    }
    return result;
}

*/

let input = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]
spiralCopy(input)
// console.log(input.slice())
// i // matrix (arr of arrs) // matrix to copy 
// o // arr // numbers in a clockwise traversal 
// c // under 5000ms
// e // ---

