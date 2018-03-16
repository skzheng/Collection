function maxDepth(root){
  let maxDepth = 0;
  (function dive(node,depth){
    if(node){
      if(depth + 1 > maxDepth){
        maxDepth = depth + 1;
      }
      dive(node.left, depth + 1)
      dive(node.right, depth + 1)
    }
  })(root,0);
  return maxDepth;
}

/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

// i // num // root 
// o // 
// c //
// e // 
*/
