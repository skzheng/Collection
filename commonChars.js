function commonChars(arr) {
  let hash = arr[0].split('').reduce((a,c) => {
    a[c] = a[c] ? ++a[c] : 1;
    return a;
  }, {});
  for (let i = 1 ; i < arr.length ; i++) {
    let l = arr[i].split('').reduce((a,c) => {
      a[c] = a[c] ? ++a[c] : 1;
      return a;
    }, {});
    for (let key in hash) {
      if (l[key] === undefined) {
        delete hash[key];
      } else if (hash[key] !== l[key]) {
        hash[key] = Math.min(hash[key], l[key]);
      }
    }
  }
  let res = [];
  for (let key in hash) {
    while (hash[key] > 0) {
      res.push(key);
      hash[key]--;
    }
  }
  return res;
}

// Better solution
// No need to count char in obj, just create array and iterate through marking repeats of letters down so we don't check them again

var commonChars = function(A) {
    let originalChars = A[0].split('');
    for (let i = 1; i < A.length; i++) {
        let tempChars = A[i].split('');
        originalChars = originalChars.filter(char => {
            let ind = tempChars.indexOf(char);
            return ind > -1 ? tempChars[ind] = true : false;
        });
    }
    return originalChars;
};

commonChars(['bella', 'label', 'roller']); // ['e','l','l'];
commonChars(['cool', 'lock', 'cook']);


/*
https://leetcode.com/problems/find-common-characters/

// i // arr // array of strings
// o // arr // array of common leters in all strings
// c // --- 
// e // ---

We want to check all the strings in our array for common letters.
Repeating letters are considered different entries.
*/
