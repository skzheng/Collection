function repeatedString(s, n) {
  let counter = 0;
  counter += findACount(s)
  let mult = Math.floor(n / s.length);
  counter *= mult;
  if (n % s.length !== 0) {
    let rem = n % s.length;
    let remStr = s.slice(0, rem);
    counter += findACount(remStr);
  }
  return counter;
}

function findACount(str) {
  let count = 0;
  for (let i = 0 ; i < str.length ; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
  return count;
}

// repeatedString('aba', 10);
// repeatedString('aab', 882787);
// repeatedString('a', 1000000000000);
// repeatedString('udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps', 872514961806)

/*
https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

// i // str, num // string to be repeated until n length
// o // num // num of occurrences of letter 'a'
// c // --- 
// e // ---

Keep counter of 'a' count
Find 'a' count in str as is
Multiply count in string by maximum number of whole str
Find 'a' count in remaining section, which is a slice of the str

*/
