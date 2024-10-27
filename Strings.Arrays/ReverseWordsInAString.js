/**
* @param {string} s
* @return {string}
*/

var reverseWords = function(s) {
    let wordsArray = s.split(' '); // ['the', 'sky', 'is', 'blue']
    let finalString = '';
  
    for(let i = wordsArray.length - 1; i >= 0; i--) {
        finalString += ' ' + wordsArray[i];
     }
   
     return finalString;
  };
  