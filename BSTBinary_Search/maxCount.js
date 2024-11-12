/**
 * @param {number[]} nums
 * @return {number}
 */


/*

QUESTION LINK: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/


SOLUTION WITHOUT BINARY SEARCH: 
var maximumCount = function(nums) {
    let posC = 0, negC = 0;
    let left = 0, right = nums.length - 1;

    // Count negatives from the left
    while (left < nums.length && nums[left] < 0) {
        negC++;
        left++;
    }

    // Count positives from the right
    while (right >= 0 && nums[right] > 0) {
        posC++;
        right--;
    }
    
    return Math.max(posC, negC); 
}
    
*/ 
var maximumCount = function(nums) {
    let left = 0, right = nums.length - 1;

    // Binary search for the first positive number
    let firstPositiveIndex = nums.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > 0) {
            firstPositiveIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // Binary search for the last negative number
    left = 0;
    right = nums.length - 1;
    let lastNegativeIndex = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < 0) {
            lastNegativeIndex = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Calculate counts
    let negCount = lastNegativeIndex + 1;
    let posCount = nums.length - firstPositiveIndex;

    return Math.max(posCount, negCount);
};
