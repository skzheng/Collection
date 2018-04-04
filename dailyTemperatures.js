function dailyTemperatures(arr){
  let res = [];
  for(let i = 0 ; i < arr.length ; i++){
    let count = 0;
    for(let j = i + 1 ; j < arr.length ; j++){
      if(arr[j] > arr[i]){
        count = j - i;
        break;
      }
    }
    res.push(count);
  }
  return res;
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]); // [1,1,4,2,1,1,0,0]

/* ====================================

Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// i // arr // temps 
// o // arr // days until warmer temps 
// c // --- 
// e // ---

Strategy:
For each value in our arr, we want to find how many indices away a greater value is 
We can do so by iterating through each index, and at each index iterate through 
  our remaining values.
  If a value is larger than our current ind, we can push the difference in ind and quit 
  Else, we can continue until we find a val, or just push 0 at the end 
Return our results

*/
