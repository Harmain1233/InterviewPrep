// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
// Time: O(n), Space: O(n)

var middleNode = function(head) {
    let values = []; 
    let current = head; 
  
    while(current) {
    	values.push(current); 
    	current = current.next;
    }
  
   // [1,2,3,4,5] 
   let middle = Math.floor(values.length/2);  
   let middleValue = values[middle]; 
  
    return middleValue;
};

// Tortise and the Hare
// Used to detect a cycle in a linked list
var middleNode = function(head) {
    let slow = head;
  	let fast = head; 
  
  	while (slow && fast.next) {
      slow = slow.next;
      fast = fast.next.next; 
    }
  
  	return slow;
};

// Time: O(k), Space: O(k)
//[1], [1...100], [1...1000]
function arr(a) {
  let constantSize = []
  a.push(a[0]);
  a.push(a[a.length - 1]);
  return constantSize
}

// Push O(1) [1, 2]
// Unshift O(n) [1] -> [1, 2]



// Given two integer arrays nums1 and nums2, sorted in increase order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2,
// return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

// Space: O(1), Time: O(n + m)
// [1000], [1...1000]
// [1...1000], [1000]
var minimumNumber = function(nums1, nums2) {
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if(nums1[i] > nums2[j]) {
      j++; 
    }
    else if(nums1[i] < nums2[j]) {
      i++;
    }
    else {
      return nums1[j]; 
    }

  } 
	return -1; 
}

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
// https://leetcode.com/problems/search-in-a-binary-search-tree/description/
//     4
//   2   7
// 1  3
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Input: root = [4,2,7,1,3], val = 5
// Output: []

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {w
    let current = root; 
    while(current) {
     	if(current < val) {
    		current = current.left;
     	}
     	else if(current > val) {
      	current = current.right; 
    	} 
    	else {
        return current;
    	}
    }
  return null;
     
};



