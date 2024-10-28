/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
     
    // find the largest # in this array 
    let maxCandies = candies[0];
    let booleanArray = [];

    for (let i = 1; i < candies.length; i++) {
        if (maxCandies < candies[i]) {
            maxCandies = candies[i];
        }
    }

    for (let i = 0; i < candies.length; i++) {
        let checkExtra = candies[i] + extraCandies;
        if (checkExtra >= maxCandies) {
            booleanArray.push(true);
        } else {
            booleanArray.push(false);
        }
    }

    return booleanArray;
};


/* 
given an integer array candies 
candies[i] -> # of candies the ith kid has 
integer extraCandies -> denoting the extra candies that exist


return a boolean array result of length n where result[i] is true if after giving the ith kid all extra candies they will have greatest # of candies among all the kids or false otherwise 

multiple kids can have the greatest number of candies 

*/