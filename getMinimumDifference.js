function getMinimumDifference(root) {
  let min = Infinity;
  let last = null;
  function traverse(root) {
    if (root.left) traverse(root.left);
      if(last !== null){
          min = Math.min(min, Math.abs(last - root.val)); 
      }
     last = root.val;       
    if (root.right) traverse(root.right);
  }
  traverse(root);
  return min;
}

/*
https://leetcode.com/problems/minimum-absolute-difference-in-bst/submissions/


We want to find the min difference between any values of a BST
We can grab all values from the tree, add to an array and sort + find lowest step in between values ... OR
We can use an in order traversal to grab the values of the tree, in order from least to greatest. 
As we reach these node values we can compare them to the last node we visited
Return min

*/
