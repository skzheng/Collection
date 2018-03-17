function sudokuCheck(string){
  let arr = string.split('\n').map(item => {
    return item.split('')
  });
  
  // Check rows;
  for(let i = 0 ; i < arr.length ; i++){
    if(!isValid(arr[i].slice())){
      return 'invalid';
    }
  }
  
  // Check column;
  let colCount = 0;
  while(colCount < arr[0].length){
    let column = []
    for(let i = 0 ; i < arr.length; i++){
      column.push(arr[colCount][i]);
    }
    if(!isValid(column.slice())){
      return 'invalid';
    }
    colCount++
  }
  
  // Check sub-boards
  let currRow = 3, currCol = 3;
  while (currCol <= 9 && currRow <= 9){
    let box = [];
    for(let i = currRow - 3 ; i < currRow ; i++){
      for(let j = currCol - 3 ; j < currCol ; j++){
        box.push(arr[i][j])
      }
    }
    currCol += 3;
    currRow += 3;
    if(!isValid(box.slice())){
      return 'invalid';
    }
  }
  return 'solved';
}

function isValid(arr){
  return arr.sort().join('') === '123456789';
}

// sudokuCheck("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")

sudokuCheck("895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241")
/*

// i // arr // grid of numbers we treat as our sudoku board
// o // bool // true if valid board, false otherwise
// c // --- 
// e // ---

Our board has to follow three rules:
* Each row has the nums 1-9 once only
* Each column has the nums 1-9 once only
* Each subgrid has the nums 1-9 once only

We can check if an assortment of numbers is valid if
the sorted/joined array is equal to '123456789' 

For our rows, we check each arr of our board and run it through our checker function 

For our columns, we can keep a running counter for our columns,
  As we iterate through the arrays we add each item into a
  respective store to be checked.
  
For the sub-boards, we can keep a running counter for both our 
  row border and col border, incrementing our counters to change
  the box we are visiting.
  

*/
// isValid([9,2,3,4,5,6,7,8,1])
