function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1,t2){
    
  if(!t1 && !t2){
    return null;
  }
  
  let mergeVal = t1
  ? (t2 ? t1.val + t2.val : t1.val)
  : (t2 ? t2.val : null)
  
  let root = new TreeNode(mergeVal)
  
  root.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
    
  root.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
    
  return root;
}

/* =============================

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
Note: The merging process must start from the root nodes of both trees.

// i // obj, obj // two tree objs to merge 
// o // obj // merged tree obj 
// c // ---
// e // ---

Strategy:
To merge our two trees, we need to perform checks for whether or not a node, 
  left node or right node does not exist. Otherwise, we can either use the 
  combined value of t1 and t2 or any existing value 

*/
