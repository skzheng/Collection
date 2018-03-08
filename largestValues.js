function largestValues(root){
  let results = [];
  (function findMax(node, depth){
    if(node){
      if(node.val > results[depth] || results[depth] === undefined){
        results[depth] = node.val;
      } 
      
      findMax(node.left , depth + 1);
      findMax(node.right, depth + 1);
    }
  })(root, 0)
  
  return results;
}

largestValues([1,3,2,5,3,null,9])
/*
You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]

// i // obj // root of the binary tree
// o // arr // collection of values from each depth of the binary tree
// c // ---
// e // ---

The Strategy:

We want to grab the largest value in each depth of the binary tree. 
Our solution array is formatted in a way that results[(depth1), (depth2max),(depth3max)...];
We could iterate through the tree, keeping track of a depth counter and replacing values in our results array until we finish iterating through the tree.

*/

