function wordAppearsTwice(arr){
  let actualSum =  arr.reduce((acc,curr) => {
    return acc + curr;
  })
  let n = arr.length - 1; 
  let expectedSum = (n / 2) * (n + 1);
  return actualSum - expectedSum;
}

wordAppearsTwice([1,2,3,4,5,6,7,8,8]); // 8 

/* =================================

I have an array where every number in the range 1...n appears once except for one number which appears twice.
Write a function for  nding the number that appears twice.

// i // arr // numbers from 1 - n where n is the length of the arr 
// o // num // num that appears twice in the array 
// c // ---
// e // ---

Strategy:
We have an array starting from 1 to n consecutively, where one number appears twice.
In order for us to find the number that appears twice we can calculate the sum that is expected of the array.
The expected sum of numbers from 1 to n is (n / 2) * (n + 1) by pairing off numbers from the start of the array and the end of the array  
The actualSum will be (num) larger that expected sum 

*/
