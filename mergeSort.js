function mergeSort(arr){
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid, arr.length);
  if (arr.length < 2){
    return arr;
  } else {
    return join(mergeSort(left), mergeSort(right));
  }
  
  function join(a,b){
    let res = [];
    while (a.length && b.length){
      if(a[0] > b[0]){
        res.push(b.shift())
      } else {
        res.push(a.shift())
      }
    }
    if(a.length){
      res = res.concat(a);
    }
    if(b.length){
      res = res.concat(b);
    }
    return res;
  }
}
// i // arr // numbers to be sorted
// o // arr // new sorted array
// c // ---
// e // 

/*

Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

pieces of logic
splitting an arr

let mid = Math.floor(arr.length / 2);
let left = arr.slice(0,mid);
let right = arr.slice(mid+1, arr.length);

joining two singular pieces 
function join(a,b){
}

we can keep splitting until the arrays are length 1
so recurse and basecase is length 1
then we can join the two sides.
*/
