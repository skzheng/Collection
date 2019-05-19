function floodFill(image, sr, sc, newColor) {
  colorPixel(image, sr, sc, newColor, image[sr][sc]);
  return image;
}

function colorPixel(image, r, c, newColor, sColor) {
  if (image[r][c] === sColor) {
    image[r][c] = newColor
    if (r - 1 >= 0 && image[r-1][c] !== newColor) {
      colorPixel(image, r-1, c, newColor, sColor);
    } 
    if (c - 1 >= 0 && image[r][c-1] !== newColor) {
      colorPixel(image, r, c-1, newColor, sColor);
    }
    if (r + 1 < image.length && image[r+1][c] !== newColor) {
      colorPixel(image, r+1, c, newColor, sColor);
    }
    if (c + 1 < image[0].length && image[r][c+1] !== newColor) {
      colorPixel(image, r, c+1, newColor, sColor);
    }
  }
}
floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);

/*
https://leetcode.com/problems/flood-fill/

// i // arr, num, num, num // matrix of cells, origin row, origin col, color to fill
// o // arr // transformed matrix
// c // ---

Given an origin point in our matrix we want to fill all cells that are the same color as origin cell
Once we start at an origin we can recursively check all directions that are still the same color
Once we've mutated our matrix we can return it
*/
