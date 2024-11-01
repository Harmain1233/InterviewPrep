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
var deleteDuplicates = function(head) {
    if (!head) return head; // Handle the empty list case
   
   let currentNode = head; // Use the head parameter passed to the function
   
   // Iterate through the linked list
   while (currentNode && currentNode.next) {
       // If the current node's value is the same as the next node's value
       if (currentNode.val === currentNode.next.val) {
           // Skip the next node (remove it from the list)
           currentNode.next = currentNode.next.next;
       } else {
           // Move to the next node only if no duplicates were found
           currentNode = currentNode.next;
       }
   }
   
   return head; // Return the head of the modified list


};


// delete duplicates such that each element appears only once 
