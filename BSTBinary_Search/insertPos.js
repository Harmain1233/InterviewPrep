/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    /* [1,3,5,6] 
    1. search for the target in the array 
    2. if not found, give the index of the array if it were in order. 
    */ 
    
        let right = 0; 
        let left = nums.length - 1; 
        while(right <= left) {
        let middle = Math.floor((left+right)/2); 
        if(target < nums[middle]) {
        left = middle - 1; 
        }
        else if(target > nums[middle]) {
        right = middle + 1; 
        }
        else {
        return middle; 
        }
    }
        return right;
        /* if its not in the array, the correct place would be where target is less than the right side, but greater than left side 
        */
    
        
    };