function topKFrequent(nums, k){
  let results = [];
  
  let store = nums.reduce((acc, curr) => {
    acc[curr] = ++acc[curr]|| 1;
    return acc;
  }, {})
  
  let sortedStore = Object.entries(store).sort((a,b) => {
    return b[1] - a[1];
  })
  
  while (k > 0){
    results.push(parseInt(sortedStore.shift()[0]));
    k--;
  }
  return results;
}

topKFrequent([1,1,1,2,2,3], 2)

/*

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
