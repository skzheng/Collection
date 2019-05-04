function sortArrayByParity(A) {
    A.sort((a, b) => {
        let aParity = (a % 2 === 0);
        let bParity = (b % 2 === 0);
        if (aParity && bParity) {
            return a - b;
        } else {
            return bParity - aParity;
        }
    });
    return A;
};

/*
https://leetcode.com/problems/sort-array-by-parity/submissions/

// i // arr // arr of numbers to sort by parity then value
// o // arr // sorted array 
// c // --- 
// e // ---

We sort the array with our compare fn
  1) We hold parity with the highest priority
  2) If the parity is the same, sort by val
Return sorted array
*/
