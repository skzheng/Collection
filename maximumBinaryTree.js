function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

function maximumBinaryTree(arr){
  let max = Math.max(...arr);
  let maxInd = arr.indexOf(max);
  let left = arr.slice(0, maxInd);
  let right = arr.slice(maxInd+1, arr.length);
  let root = new TreeNode(max);
  if(left.length > 0){
    root.left = maximumBinaryTree(left);
  }
  if(right.length > 0){
    root.right = maximumBinaryTree(right);
  }
  return root;
}

maximumBinaryTree([3,2,1,6,0,5]); // 

/* =========================================

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].

// i // arr // nums to create maximumBinaryTree
// o // obj // our tree object 
// c // ---
// e // ---

Strategy: 
We are tasked with createing a binary tree with an arr, using max values as root nodes 
From the root, we slice our initial arr into a left-of-max and right-of-max
We continue to create tree branches from those new arrays
We can create a function to recursively build out portions of our tree until
  our left and right arrs are empty

*/
