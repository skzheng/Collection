
function findComplement(num){
  let bin = num.toString(2).split('');
  for(let i = 0 ; i < bin.length ; i++){
    bin[i] = (bin[i] === '1') ? '0' : '1'
  }
  return Number.parseInt(bin.join(''),2);
}

findComplement(5); // 2
findComplement(1); // 0

/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// i // num // number to find complement of
// o // num // complement of input
// c // ---
// e // ---

The Strategy: 
First we want to convert any value we receive to its binary notation
Then we can iterate through each index and reverse the value
Finally we can take this complementary binary value and return it as a base ten number
*/
