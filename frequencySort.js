function frequencySort(str){
  let hash = {};
  for(let i = 0 ; i < str.length ; i++){
    hash[str[i]] = ++hash[str[i]] || 1;
  }
  let sorted = Object.entries(hash).sort((a,b) => {
    return b[1] - a[1];
  })
  let newStr = sorted.reduce((acc,curr) => {
    return acc + (curr[0].repeat(curr[1]));
  }, '')
  return newStr;
}

frequencySort('tree'); // eetr

/* ================================

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

