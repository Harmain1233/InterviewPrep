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
var middleNode = function(head) {
    let values = [];
    let current = head;

    while(current) {
    values.push(current); 
    current = current.next;
    }

    let middle = Math.floor(values.length/2); // rounds up 
    let middleValue = values[middle];

    return middleValue;

    
};