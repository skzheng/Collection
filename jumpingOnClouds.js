function jumpingOnClouds(arr) {
  let steps = 0;
  let pointer = 0;
  while (pointer < arr.length - 1) {
    if (arr[pointer + 2] === 0) {
      pointer += 2;
    } else {
      pointer++;
    }
    steps++;
  }
  return steps;
}

/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// i // arr // nums representing safe/unsafe clouds 
// o // num // num of steps to reach the end of arr
// c // ---
// e // ---

We can keep a counter of the number of steps it takes to get to the end of an arr
Keep pointer of current position in array
Ideally we move two steps, oterwise we move one step
Increment steps until our pointer reaches the end

*/
