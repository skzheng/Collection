function permute(arr){
  let results = [];
  
  (function recurse(curr, store){
    if(curr.length < 1){
      results.push(store);
    } else {
      for(let i = 0 ; i < curr.length ; i++){
        let nextArr = curr.slice();
        let value = nextArr.splice(i,1);
        recurse(nextArr, store.concat(value));
      }
    }
  })(arr, [])
  return results;
}

permute([1,2,3])

/* ===========================

Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/
