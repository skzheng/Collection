function projectionArea(grid) {
  let xView = 0,
      yView = 0,
      zView = 0;
  let xMax = grid[0];
  for (let i = 0 ; i < grid.length ; i++) {
    let yMax = grid[i][0];
    for (let j = 0 ; j < grid[i].length ; j++) {
      if (grid[i][j] > 0) {
        xMax[j] = Math.max(xMax[j], grid[i][j]);
        yMax = Math.max(yMax, grid[i][j]);
        zView++;
      }
    }
    yView += yMax;
  }
  xView = xMax.reduce((a,c) => a + c, 0);
  return xView + yView + zView;
}

projectionArea([[1,2],[3,4]]);

/*
On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Now we view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane. 

Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

// i // arr // matrix of vals that represent block height at coord
// o // num // sum of all three projection faces (xView yView zView)
// c // ---
// e // ---
*/
