function beautifulDays(i, j, k){
  let counter = 0;
  for (let a = i ; a <= j ; a++){
    if (reverseNumber(a) % k === 0) {
      counter++; 
    }
  }
  return counter;
}

function reverseNumber(n) {
  return Math.abs(n - Number(n.toString().split('').reverse().join(''))) ;
}

beautifulDays(20, 23, 6);

/*

https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

// i // num , num , num // range start, range end, beatiful num divisor
// o // num // number of beautiful days
// c // --- 
// e // ---

*/
