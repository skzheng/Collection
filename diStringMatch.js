function diStringMatch(S) {
  let end = S.length;
  let start = 0;
  let A = [];
  for (let i = 0 ; i < S.length + 1 ; i ++) {
    if (S[i] === 'I') {
      A.push(start);
      start++;
    } else {
      A.push(end);
      end--;
    }
  }
  return A;
}

diStringMatch("IDID")

/*
https://leetcode.com/problems/di-string-match/

// i // str // only contains letters I or D
// o // arr // permutation A of 0 - N 
// c // ---
// e // --- 

For all i = 0 ... N-1,
S[i] === 'I' then A[i] < A[i+1]
S[i] === 'D' then A[i] > A[i+1] 

*/
