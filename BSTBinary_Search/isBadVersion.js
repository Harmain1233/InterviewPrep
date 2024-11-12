/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
 
 
 /* n = 5
 isBadVersion(1) -> false 
 isBadVersion(2) -> false
 isBadVersion(3) -> false 
 isBadVersion(4) -> true
 isBadVersion(5) -> true 

 this means the first bad version was 4. 

 how do we write the algorithm using binary sort? 
 


 */  
   let left = 1;
   let right = n; 
   while (left < right) {
    let middle = Math.floor((right+left)/2); 
    if(isBadVersion(middle)) {
    right = middle; 
    } else {
    left = middle+1; 
    }
   }
   return left;

        
    };
};