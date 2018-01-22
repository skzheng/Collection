function twoSets(a,b){
  let cap = b[0];
  let counter = 0;
  for(let i = 0 ; i <= cap ; i++){
    if(aCheck(a,i) && bCheck(b,i)){
      counter++;
    }
  }
  return counter;
}

function aCheck(arr,num){
  return arr.every( item => {
    return num % item === 0
  })
}

function bCheck(arr,num){
  return arr.every( item => {
    return item % num === 0
  })
}

let a = [2,4];
let b = [16,32,96];

twoSets(a,b)

/* =============================================
Consider two sets of positive integers, A and B. We can say that a positive integer, x , is
between sets A and B if the following condition is satisfied: 

1. All elements in A are factors of x.
2. x is a factor of all elements in B.

Given A and B, find and print the number of integers that are between the two sets. 

// i // arr, arr // two arrays to find points in between
// o // num // number of numbers 'between' the two sets
// c // 
// e // 

The Strategy: 
We can determine the range of our check by narrowing our search to 
min: our largest value in set A 
max: our smallest value in set B
Assuming that these sets are sorted, we can count in between these two values,
  performing checks for whether a number satisfies both conditions

*/
