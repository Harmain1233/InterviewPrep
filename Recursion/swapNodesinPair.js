/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Base case: if the list has less than two nodes, return head
     if (!head || !head.next) {
         return head;
     }
 
     // Nodes to be swapped
     const firstNode = head;
     const secondNode = head.next;
 
     // Recursive call to swap the rest of the list
     firstNode.next = swapPairs(secondNode.next);
 
     // Swapping the two nodes
     secondNode.next = firstNode;
 
     // Return the new head (secondNode)
     return secondNode;
   
     
     
 };