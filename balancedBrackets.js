function balancedBrackets(string){
  let stack = []
  for(let i = 0 ; i < string.length ; i++){
    if(isOpening(string[i])){
      stack.push(string[i])
    } else if(isClosing(string[i])){
      if(store[string[i]] === stack[stack.length - 1]){
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

let store = {
  '}' : '{',
  ']' : '[',
  ')' : '('
}

function isOpening(string){
  return ['{','[','('].includes(string);
}

function isClosing(string){
  return ['}',']',')'].includes(string);
}

balancedBrackets('{[(])}'); // false
balancedBrackets('{{[[(())]]}}'); // true

/* ====================================
Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:
It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, print YES on a new line; otherwise, print NO on a new line.

// i // string // consisting of brackets 
// o // string // YES or NO depending on if the brackets are balanced 
// c // ---
// e // ---

The Strategy: 
we can use stacks to create an order of brackets
for each element in the string, we can check if the brack is opening, 
  if so we can add it to the stack 
  otherwise if the brack is closing, we can check if it matches the last added bracket
    if not we can return false
finally we check if the stack is empty 
*/
