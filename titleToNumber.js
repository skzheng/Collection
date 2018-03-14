function titleToNumber(s){
  let count = 0;
  for(let i = 0 ; i < s.length ; i++){
    let ind = s.length - (i + 1);
    let score = s.charCodeAt(ind) - 64; 
    // console.log(score)
    // console.log(Math.pow(26,i) * score, ind, score,)
    count += ( (Math.pow(26, i) * score) )
  }
  return count;
}

titleToNumber('AZ') // 52
// titleToNumber('BA') // 53

/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

// i // str // title to convert to Number
// o // num //  representation of String
// c // ---
// e // ---

starting from the right, 
each letter is worth its ascii code  - 64  
as we move to the left, each place has a value of (26 ^ index) * score
  this means 'BA' has a score of (26 ^ 1 * 2) + (1)
We iterate through the length of the string and sum total
*/
