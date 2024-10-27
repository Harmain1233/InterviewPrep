var mergeAlternately = function(word1, word2) {
    let finalword = '';
    let i = 0, j = 0;

    // iterate through each word
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            finalword += word1[i];
            i++;
        }
        if (j < word2.length) {
            finalword += word2[j];
            j++;
        }
    }
    
    return finalword;
}





