/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * 
 * https://leetcode.com/problems/increasing-order-search-tree/description/
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 // left root right 
 var increasingBST = function(root) {
    // Create a dummy node with value 0 and no children
 const dummyNode = { val: 0, left: null, right: null };
 let prev = dummyNode;
 let current = root;
 const stack = [];
 
 // Iterative in-order traversal
 while (current || stack.length > 0) {
   // Reach the leftmost node of the current node
   while (current) {
     stack.push(current);
     current = current.left;
   }
   
   // Current must be null at this point
   current = stack.pop();
   
   // Visit the current node
   current.left = null;         // Remove the left child
   prev.right = current;        // Attach the current node to the previous node's right
   prev = current;              // Move prev to the current node
   
   // Visit the right subtree
   current = current.right;
 }
 
 return dummyNode.right;
    };
