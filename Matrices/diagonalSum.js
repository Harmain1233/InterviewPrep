/**
* @param {number[][]} mat
* @return {number}
*/


   var diagonalSum = function(mat) {
   let length = mat.length - 1; // takes length of matrix - 1
       sum = 0;
   for(let i = 0; i < mat.length; i++) {
       sum += mat[i][i] + mat[i][length - i]; // mat[0][2]
   }


   if(length % 2 == 0) { // if the # is even
       sum -= mat[length/2][length/2]; // then we make 5 count only once
   }
       return sum;




   };
