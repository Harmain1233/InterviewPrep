/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(0); 
    let current = dummyNode;

    // If either list is empty, return the other list
    if (!list1) return list2;
    if (!list2) return list1;

    // Merge the two lists
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1; // Link to the smaller node
            list1 = list1.next;   // Move to the next node in list1
        } else {
            current.next = list2; // Link to the smaller node
            list2 = list2.next;   // Move to the next node in list2
        }
        current = current.next; // Move the current pointer forward
    }

    // If there are remaining nodes in either list, append them
    if (list1) {
     current.next = list1;
    } 
    if (list2) {
    current.next = list2;
    }

    return dummyNode.next; // Return the merged list, skipping the dummy node
};
