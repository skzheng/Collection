function sortArrayByParityII (arr) {
  let even = [];
  let odd = [];
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  let sorted = [];
  while (odd.length) {
    sorted.push(even.pop());
    sorted.push(odd.pop());
  }
  return sorted;
}

// Better solution? 

function sortArrayByParityII (arr) {
  let sorted = Array(arr.length);
  let evenPointer = 0;
  let oddPointer = 1;
  for (let i = 0 ; i < arr.length ; i ++) {
    if (arr[i] % 2 === 0) {
      sorted[evenPointer] = arr[i];
      evenPointer += 2;
    } else {
      sorted[oddPointer] = arr[i];
      oddPointer += 2;
    }
  }
  return sorted;
}

/*
https://leetcode.com/problems/sort-array-by-parity-ii/
*/
