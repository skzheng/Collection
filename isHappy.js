function isHappy(n) {
  let cache = {};
  while (n !== 1) {
    n = sumSquareDigits(n);
    if (cache[n]) {
      return false
    }
    cache[n] = true;
  }
  return true;
}

function sumSquareDigits(num) {
  let sum = 0;
  let digits = num.toString();
  for (let i = 0 ; i < digits.length ; i++) {
    sum += (digits[i] * digits[i]);
  }
  return sum;
}

isHappy(19); // true

/*
// i // num // number, might be happy, might be sad
// o // bool // true or false, if n is happy or not
// c // ---
// e // ---

A number is happy if we reach 1 in this recursive process...
  We split the number into it's digits and square then sum the numbers
If a number reaches 1 it is happy, otherwise we might have an endless loop 

*/
