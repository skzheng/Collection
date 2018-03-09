function countSubstrings(str){
  return getSubstrings(str).filter(item => {
    return isPalindrome(item);
  }).length;
}

function getSubstrings(str){
  let substrings = [];
  for (let i = 0 ; i < str.length ; i++){
    for (let j = i + 1 ; j < str.length + 1; j++){
      substrings.push(str.slice(i,j))
    }
  }
  return substrings;
}

function isPalindrome(str){
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

countSubstrings('aaa')

/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// i // str // string to break down 
// o // num // number of palindromic substrings
// c // ---
// e // ---

The Strategy: 

We want to find all substrings of our base string that are also palindromic. 
We can abstract this into two different helper functions,
  One to find all substrings of our base string
  Second to check whether an input string is palindromic or not
Using these two functions we can filter through the substrings to find all the palindromes

*/
