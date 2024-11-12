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
 * @return {number}
 */

 /* use an in-order traversal!
 left -> root -> right will give us the values in a sorted order. */ 
 var minDiffInBST = function(root) {
    let minDiff = Infinity;
     let prev = null;
     
     // Use a while loop with a stack for in-order traversal
     const stack = []; 
     let current = root;
     
     while (stack.length > 0 || current !== null) {
         // Go to the leftmost node
         while (current !== null) { 
             stack.push(current);  
             current = current.left; 
         }
         // this makes stack become [4,2,1] when current === null 
        
 
         // Process the node
         current = stack.pop();  // stack.pop() will pop the last element, so current = 1. 
         
         if (prev !== null) {
             minDiff = Math.min(minDiff, current.val - prev.val);
         }
         prev = current; // prev = 1 
         
         // Move to the right subtree
         current = current.right;
     }
     
     return minDiff;
 
 
 
 };