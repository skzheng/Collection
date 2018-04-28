function shortestToChar(S,C){
  let result = [];
  for(let i = 0 ; i < S.length ; i++){
    let count = 0;
    while(result[i] === undefined){
      if(S[i + count] === C || S[i - count] === C){
        result[i] = count;
      }
      count++;  
    }
  } 
  return result;
}

shortestToChar('loveleetcode', 'e');


/* =====================================

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

// i // str, str // string S and character C
// o // arr // num of each indices' distance from  C
// c // --- 
// e // ---

Strategy:
At each index, we want to find the distance from the current index to
  the closest character c
We can iterate through string S and expand outwards using a counter
  to checker whether or not we have reached character C at an index 
When we find a character C, we can push the count into our results 
Return our results array 

*/
