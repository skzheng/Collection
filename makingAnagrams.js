function makingAnagrams(a,b){
  let count = 0;
  let store =  a.split('').reduce((acc,curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {})
  
  b.split('').forEach((item) => {
    if (store[item]){
      count++
      store[item]--
    }
  })
  console.log(a.length + b.length - (2 * count));
  // return count;
}

makingAnagrams('1234555', '555'); // 4
makingAnagrams('cde','abc'); // 4


/* =======================================
Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

// i // str1 , str2 // two strings to be compared for common characters
// o // num // number of deletions needed to make a and b anagrams
// c // ---
// e // ---

The Strategy:
Our goal is find the amount of distinct characters in two strings 
We can do this by finding the amount of common characters in the two strings
We can map the letters / counts of string a into a store
Next we can iterate through b and increment count as we find common characters
Finally we have common characters count and we can take the difference between lengths a+b and 2*count

*/
