// function nextGreaterElement(a, b){
//   let res = [];
//   for(let i = 0 ; i < a.length ; i++){
//     let curr = b.indexOf(a[i]);
//     let rest = b.slice(curr + 1, b.length);
//     console.log(rest)
//     for(let j = 0 ; j < rest.length ; j++){
//       if(rest[j] > a[i]){
//         res.push(rest[j]);
//         break;
//       }
//     }
//     if(!res[i]){
//       res.push(-1)
//     }
//   }
//   return res
// }

// Better solution damnnnn
function nextGreaterElement(a,b){
  return a.map(item => {
    let ind = b.indexOf(item);
    
    while(b[++ind] < item);
    if(ind >= b.length){
      ind = -1;
    } else {
      ind = b[ind];
    }
    
    return ind;
  })
  
}

nextGreaterElement([4,1,2], [1,3,4,2])

// i // arr, arr // two arrays of numbers
// o // arr // array of indices of next greater elements
// c // ---
// e // ---

/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
*/
