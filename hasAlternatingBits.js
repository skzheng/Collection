function hasAlternatingBits(n){
  let binary = n.toString(2);
  for(let i = 0 ; i < binary.length ; i++){
    if(binary[i+1] === binary[i]){
      return false;
    }
  }
  return true;
}

hasAlternatingBits(7);

/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:
Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101
Example 2:
Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111.
Example 3:
Input: 11
Output: False
Explanation:
The binary representation of 11 is: 1011.
Example 4:
Input: 10
Output: True
Explanation:
The binary representation of 10 is: 1010.

// i // num // number to convert into binary 
// 0 // boolean // whether or not the digits in binary representation are alternating
// c // ---
// e // ---

The Strategy: 
We want to convert our base 10 number into binary first.
Once we have this number, we can iterate through, check if each digit is different from the next one. 
  In any situation where the numbers are the same, we can return false.
If we haven't hit the exit case by the time the loop has run, we can just return true;
*/
