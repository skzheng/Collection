function findOccurrences(text, first, second) {
  let arr = text.split(' ');
  let result = [];
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === first && arr[i+1] === second && arr[i+2]) {
      result.push(arr[i+2]);
    } 
  }
  return result;
}


findOccurrences("alice is a good girl she is a good student", "a", "good"); // ["girl", "student"]


/*

// i // str, str, str // sentence to parse through, first word in sentence, second word in sentence
// o // arr // an array of possible third words in sentence
// c // ---
// e // ---

We are given a sentence to parse through
We are also given two starting words
We want to parse our sentence to see if we can find matching patterns that start with 'first' 'second' then 'third'

*/
