function angryProfessor(k, a) {
  let early =  a.filter(item => {
    return item <= 0;
  })
  return early.length >= k ? 'NO' : 'YES';
}

// angryProfessor(3, [-1,-3,4,2]);
// angryProfessor(2, [0,-1,2,1]);

/*

https://www.hackerrank.com/challenges/angry-professor/problem

// i // num, arr // num of min on time, array of arrival times
// o // str // YES or NO if class is cancelled
// c // ---
// e // --- 

*/
