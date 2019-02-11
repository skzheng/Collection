function surfaceArea(a) {
  let sum = 0;
  for (let i = 0 ; i < a.length ; i++) {
    for (let j = 0; j < a[i].length ; j++) {
      sum += (a[i][j] * 4) + 2 - (checkCovered(a, i, j));
    }
  }
  return sum;
}

function checkCovered(arr, i , j) {
  let covered = 0;
  // Down
  if (i + 1 < arr.length) {
    covered += (arr[i+1][j] < arr[i][j] ? arr[i+1][j] : arr[i][j]);
  }
  // Up
  if (i > 0) {
    covered += (arr[i-1][j] < arr[i][j] ? arr[i-1][j] : arr[i][j]);
  }
  // Right
  if (j + 1 < arr[i].length) {
    covered += (arr[i][j+1] < arr[i][j] ? arr[i][j+1] : arr[i][j]);
  }
  // Left
  if (j > 0) {
    covered += (arr[i][j-1] < arr[i][j] ? arr[i][j-1] : arr[i][j]);
  }
  return covered;
}

/*

https://www.hackerrank.com/challenges/3d-surface-area/problem

*/
