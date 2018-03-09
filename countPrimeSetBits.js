function countPrimeSetBits(L,R){
  let count = 0;
  for (let i  = L ; i <= R ; i++){
    if(primeChecker(countSetBits(i))){
      count++;
    }
  }
  return count;
}

function primeChecker(num){
  if(num < 2) return false;
  return getFactors(num).length === 2;
}

function getFactors(num){
  let factors = [];
  let root = Math.floor(Math.sqrt(num));
  for (let i = 0 ; i <= root ; i++){
    if(num % i === 0){
      factors.push(i, num / i);
    }
  }
  return factors;
}

function countSetBits(num){
  let binaryCount = 0;
  let binary = num.toString(2);
  for (let i = 0 ; i < binary.length ; i++){
    if(binary[i] === '1'){
      binaryCount++;
    }
  }
  return binaryCount;
}

/*
Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

Example 1:

Input: L = 6, R = 10
Output: 4
Explanation:
6 -> 110 (2 set bits, 2 is prime)
7 -> 111 (3 set bits, 3 is prime)
9 -> 1001 (2 set bits , 2 is prime)
10->1010 (2 set bits , 2 is prime)
Example 2:

Input: L = 10, R = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)

// i // num , num // Range of numbers to check
// o // num // number of prime bit sets within our range
// c // ---
// e // ---

The Strategy:

We have a DP problem we can separate into several different functions.
  1) A function to find out whether or not a number is prime
  2) A helper function to our primeChecker to find factors
  3) A binary converter to change an input number to binary and count the number of bits
We can iterate through our range and run each number through our primeChecker and countBitSet
 
*/
