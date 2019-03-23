function utopianTree(n) {
  let counter = 0;
  for (let i = 0 ; i <= n ; i++) {
    if (i % 2 === 0) {
      counter++;
    } else {
      counter *= 2;
    }
  }
  return counter;
}

utopianTree(5);

/*

https://www.hackerrank.com/challenges/utopian-tree/problem

// i // num // cycles of growth
// o // num // height of tree
// c // --- 
// e // ---

*/
