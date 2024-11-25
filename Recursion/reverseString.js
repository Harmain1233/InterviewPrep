/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Helper function for recursion
     const reverse = (start, end) => {
         // Base case: stop when pointers meet or cross
         if (start >= end) {
             return;
         }
         // Swap characters at start and end
         const temp = s[start];
         s[start] = s[end];
         s[end] = temp;
 
         // Recursive call with updated pointers
         reverse(start + 1, end - 1);
     };
 
     // Initial call to the helper function
     reverse(0, s.length - 1);
   
     
     
     
 };