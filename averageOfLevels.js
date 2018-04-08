function averageOfLevels(root){
  let res = [];
  
  (function recurse(node, depth){
    if(res[depth]){
      res[depth].push(node.val);
    } else {
      res[depth] = [node.val];
    }
    if(node.left){
      recurse(node.left, depth + 1);
    }
    if(node.right){
      recurse(node.right, depth + 1);
    }
  })(root, 0)
  
  return res.map(item => {
    return item.reduce((acc, curr) => {
      return acc + curr;
    }) / item.length;
  });
}

/* ===============================

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.

// i // obj // tree root node 
// o // arr // num avg of each level 
// c // --- 
// e // ---

Strategy: 
We want to find the average of all levels in the binary tree 
We can do this by recursively checking all depths of the tree,
  while we keep track of values using their depth as an index
Once we have checked through all nodes, we can return them as an average 

*/
