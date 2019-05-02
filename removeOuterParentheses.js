function removeOuterParentheses(str) {
  let stack = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      if (stack.length > 0) {
        newStr = newStr.concat(str[i]);
      }
      stack.push('(');
    } else if (str[i] === ')') {
      stack.pop();
      if (stack.length > 0) {
        newStr = newStr.concat(str[i]);
      }
    }
  }
  return newStr;  
};

