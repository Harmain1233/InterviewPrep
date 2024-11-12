/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

 /* pick a number from 1 to n 
 n = 5 
 1 2 3 4 5 

 we have to find out what # was picked. 
 we will call int guess(int num) API to find out if the number is higher, which then we will move to the right, if it's less than we move it to the left. 
 
 */ 
 var guessNumber = function(n) {
    let left = 1; 
    let right = n; 
    while (left <= right) {
    let middle = Math.floor((right+left)/2); 
    let guessedVal = guess(middle);

    if(guessedVal === -1) {
    right = middle - 1; 
    }
    else if(guessedVal === 1) {
    left = middle + 1; 
    }
    else if (guessedVal === 0) {
    return middle;
    }
    }


    
};