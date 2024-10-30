/**
 * @param {number[][]} nums
 * @return {number}
 */

function isPrime(num) {
    if (num < 2) {
     return false;
   }
   const limit = Math.sqrt(num);
   for (let i = 2; i <= limit; i++) {
     if (num % i === 0) {
       return false;
     }
   }
   
     return true;
   }


var diagonalPrime = function(nums) {
   // Get each number in both diagonals and check if it's prime
   let primeNumbers = [];
   const n = nums.length; // Length of the square matrix

   for (let i = 0; i < n; i++) {
       // Left-to-right diagonal
       let rightNumber = nums[i][i];
       if (isPrime(rightNumber)) {
           primeNumbers.push(rightNumber);
       }

       // Right-to-left diagonal
       let leftNumber = nums[i][n - i - 1];
       if (isPrime(leftNumber) && rightNumber !== leftNumber) { // Avoid double counting
           primeNumbers.push(leftNumber);
       }
   }

   // Find the maximum prime number
   if (primeNumbers.length === 0) return 0; // Return 0 if no primes found

   let maxNumber = primeNumbers[0]; // Initialize with the first prime number
   for (let i = 1; i < primeNumbers.length; i++) {
       if (maxNumber < primeNumbers[i]) {
           maxNumber = primeNumbers[i]; // Update maxNumber if a larger prime is found
       }
   }
   return maxNumber; // Return the maximum prime number found
};
