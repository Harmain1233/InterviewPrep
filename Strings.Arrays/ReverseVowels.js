/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split(''); // Convert the string to an array
    let vowels = ''; // To track the vowels found

    // Collect vowels from the string
    for (let i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) { // Check if the character is a vowel
            vowels += arr[i]; // Add the vowel to the tracker
        }
    }

    let vowelIndex = 0; // Index for the vowels tracker

    // Replace the vowels in the original array with reversed vowels
    for (let i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) {
            arr[i] = vowels[vowels.length - 1 - vowelIndex]; // Get the vowel from the end
            vowelIndex++; // Move to the next vowel
        }
    }

    return arr.join(''); // Convert the array back to a string
};

// Helper function to check if a character is a vowel
function isVowel(c) {
   return 'aeiouAEIOU'.includes(c); // Check for both lower and upper case vowels
}

// Example usage
console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"
