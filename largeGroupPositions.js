function largeGroupPositions(str){
  let positions = [];
  let start = 0;
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] !== str[i+1] || i === str.length - 1){
      if(i - start + 1 >= 3){
        positions.push([start, i]);
      }
      start = i + 1;
    }
  }
  return positions;
}

// largeGroupPositions( "abcdddeeeeaabbbcd")
largeGroupPositions('aaa')


/* ========================================

In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Example 2:

Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
Example 3:

Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]

// i // str // 
// o // arr // 
// c // ---
// e // ---

*/
