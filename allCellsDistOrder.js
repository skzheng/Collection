function allCellsDistOrder(R, C, r, c) {
  let store = [];
  for (let i = 0 ; i < R ; i++) {
    for (let j = 0 ; j < C ; j++) {
      let dist = findDist(r, c, i, j);
      if (store[dist]) {
        store[dist].push([i,j]);
      } else {
        store[dist] = [[i,j]]
      }
    }
  }
  return store.reduce((a,c) => {
    return a.concat(c);
  })
}

function findDist(r, c, i, j) {
  return Math.abs(r - i) + Math.abs(c - j);
}

allCellsDistOrder(2, 2, 0, 1);

/*
https://leetcode.com/problems/matrix-cells-in-distance-order/

// i // num , num , num , num // number of rows, number of columns, origin row coord, origin column coord 
// o // arr // array of coords sorted by dist to origin, least to greatest 
// c // ---
// e // ---

R = rows
C = columns
coordinates = (r0, c0)

1, 2, 0 ,0
OUTPUT = [
  [0,0],
  [0,1]
]
The distances from r0,c0 to the other cells are [0,1]

Manhattan distance = |r1 - r2| + |c1 - c2|
*/
