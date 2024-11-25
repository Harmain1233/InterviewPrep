/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * 
 * https://leetcode.com/problems/count-complete-tree-nodes/
 * 
 * 
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 /* PRE-ORDER TRAVERSAL ROOT -> LEFT -> RIGHT */ 
 var countNodes = function(root) {
    if (root === null) return 0;
    
    let count = 0;
    const stack = [root]; // start stack with root 
    
    while (stack.length > 0) { 
      const currentNode = stack.pop();
      count++; // Count the current node
      
      // Push the left and right children onto the stack if they exist
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
    }
    
    return count;
  };