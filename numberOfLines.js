function numberOfLines(w, s){
  let lines = 1;
  let curr = 0;
  
  let mapping = w.reduce((acc,curr,i) =>{
    let letter = String.fromCharCode(97 + i);
    acc[letter] = curr;
    return acc;
  }, {});
  
  for(let i = 0 ; i < s.length ; i++){
    if(curr + mapping[s[i]] <= 100){
      curr += mapping[s[i]];
    } else {
      lines++;
      curr = mapping[s[i]];
    }
  }
  return [lines, curr];
}

let widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let S = "abcdefghijklmnopqrstuvwxyz"

numberOfLines(widths,S); // [3, 60]


/* ==========================================

We are to write the letters of a given string S, from left to right into lines. Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line. We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line? Return your answer as an integer list of length 2.

 

Example :
Input: 
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
Output: [3, 60]
Explanation: 
All letters have the same length of 10. To write all 26 letters,
we need two full lines and one line with 60 units.
Example :
Input: 
widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
Output: [2, 4]
Explanation: 
All letters except 'a' have the same length of 10, and 
"bbbcccdddaa" will cover 9 * 10 + 2 * 4 = 98 units.
For the last 'a', it is written on the second line because
there is only 2 units left in the first line.
So the answer is 2 lines, plus 4 units in the second line.
 

Note:

The length of S will be in the range [1, 1000].
S will only contain lowercase letters.
widths is an array of length 26.
widths[i] will be in the range of [2, 10].

// i // arr , str // arr of lengths of alphabet, string to check 
// o // arr // number of lines, current width 
// c // ---
// e // ---

Strategy: 
First we can create a mapping of widths to their respective alphabet letter 
We can also establish a counter for lines, and width of current line 
We can iterate through our S string and add it's mapped value to our curr line 
  If this value is <= 100, we can just increment our curr width 
  Else, we can increment our line, and place this value onto our new line 
At the end we can return our lines and current line width 

*/
