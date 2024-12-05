/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // Helper function to check height and balance
    function checkHeight(node) {
        if (!node) return 0; // Base case: height of null node is 0

        let heightL = checkHeight(node.left);
        let heightR = checkHeight(node.right);

        // If left or right subtree is unbalanced, propagate false (-1)
        if (heightL === -1 || heightR === -1) return -1;

        // Check if the current node is unbalanced
        if (Math.abs(heightL - heightR) > 1) return -1;

        // Return the height of the subtree rooted at this node
        return Math.max(heightL, heightR) + 1;
    }

    // Use the helper to check the tree's balance
    return checkHeight(root) !== -1;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    var merge = function (node1, node2) {
        if (!node1) return node2; // return the other node if it exists
        if (!node2) return node1; // return the other node if it exists

        // for each node, merge the left, right and update accordingly
        node1.left = merge(node1.left, node2.left);
        node1.right = merge(node1.right, node2.right);

        node1.val += node2.val; // this will sum the values

        // add if both exist

        // if not put them in place

        return node1;
    };
    return merge(root1, root2);
};