var isUnivalTree = function(root) {
    let uni = true
    function checkNode(node, value) {
        if (node.val !== null) {
            if(node.val !== value) {
                uni = false;
                return;
            }
        }
        if (node.left) checkNode(node.left, value);
        if (node.right) checkNode(node.right, value);
    }
    checkNode(root, root.val)
    return uni;
};

/*
https://leetcode.com/problems/univalued-binary-tree/submissions/
*/
