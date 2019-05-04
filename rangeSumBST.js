/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R) {
    let sum = 0; 
    function traverse(root){
        if (root.val >= L && root.val <= R) {
            sum += root.val;
        }
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }
    traverse(root)
    return sum;
};

/*
https://leetcode.com/problems/range-sum-of-bst/

// i // obj , num , num // root node of tree, lower range of tree values, upper range of tree values
// o // num // sum of all node values in between L and R
// c // ---
// e // ---

We traverse the tree and check each node val
  If the node is > L and < R
    add to sum 
  Check this node's left and right nodes
Return sum
*/
