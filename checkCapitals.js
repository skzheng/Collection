function checkCapitals(str){
  let allUpper = str.toUpperCase() === str;
  let allLower = str.toLowerCase() === str;
  console.log(str.slice(1,str.length))
  let firstUpper = str[0].toUpperCase() === str[0] 
  && str.slice(1, str.length).toLowerCase() === str.slice(1,str.length)
  return allLower || allUpper || firstUpper;
}

checkCapitals("FlaG"); // false

/*

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

Strategy:  
We want to check if a string has correct capital usage 
1) If all letters are capitals - str.toUppercase() === str 
2) If no letters are capitals - str.toLowerCase() === str 
3) If only the first letters are capitals - str.split('')[0].toUppercase
We can check whether any of these test cases pass and then return

*/
