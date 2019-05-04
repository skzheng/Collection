function removeOuterParentheses(str) {
  let stack = 0;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      if (stack > 0) {
        newStr = newStr.concat(str[i]);
      }
      stack++;
    } else if (str[i] === ')') {
      stack--;
      if (stack > 0) {
        newStr = newStr.concat(str[i]);
      }
    }
  }
  return newStr;  
};

/* 
https://leetcode.com/problems/remove-outermost-parentheses/

// i // str // string of parens to be parsed ( remove all outer parens ) 
// o // str // new string with outer parens stripped
// c // ---
// e // --- 

We create a stack that we increment on open brace, and decrease on closing braces
As we iterate through the string we check each letter of the string
  If the letter is open brace, 
    we can add to stack
    we can add to inner strings if it isnt an outer brace
  If the letter is closing brace,
    we can decrease the stack
    we can add to inner strings if it isnt an outer brace
Return our inner string
*/
