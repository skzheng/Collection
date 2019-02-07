const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
// const flatten = (arr) => {


flatten([1, 2, [3, 4, [5, [6]]], 9])

// I // arr // arr of items to flatten
// O // arr // singular array with only primitives
// C // ---
// E // ---

/*
Iterate through the array, we want to watch out for nested arrays. At each item we can recursively check if the item is an array, if so we can use our flattener on this array. We continue until we reach the end of the primrary array.
*/
