function largestPalindromeProduct(n){
  for (let i = n ; i > 10000 ; i--){
    if(isPalindrome(i) && factors(i)){
      return i;
    }
  }
  return ';(';
}

// Helper functions

// Check if a number n has factors that are both triple digits
function factors(n){
  let root = Math.sqrt(n);
  let factors = [];
  for (let i = 0 ; i <= root ; i++){
    if (n % i === 0){
      factors.push([i, n/i]);
    } 
  }
  return factors.some(item => {
    return item.every(item =>{
      return (item+'').length === 3
    })
  });
}

// Check if a number n is a palindrome
function isPalindrome(n){
  return (n + '') === (n + '').split('').reverse().join('');
}

console.log(largestPalindromeProduct(101110)); // 101101
console.log(largestPalindromeProduct(800000)); // 793397
largestPalindromeProduct((999 * 999)) // 906609

/*  ====================================================================

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers which is less than N

// i // num // A number N to count up until
// o // num // A number that is the largest palindrome number with two three digit factors that is less than N
// c // ---
// e // ---

The Strategy: 
1) Create a helper function to check if a number is palindromic.
2) Create a helper function to check if a number has a pair of factors that are both triple digits.

Iterate top down from our number n
Check if current number i is ever passing both isPalindrome() AND factors()
  TRUE: Return i!
  FALSE: Continue search 
Return either successful i case or ';('

*/


