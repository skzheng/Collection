function hurdleRace (k, height) {
  let ascHeight = height.sort((a, b) => {
    return a - b;
  });
  let max = ascHeight[ascHeight.length - 1];
  return max - k > 0 ? max - k : 0;
}

hurdleRace(4, [1, 6, 3, 5, 2]);

/*
https://www.hackerrank.com/challenges/the-hurdle-race/problem
*/
