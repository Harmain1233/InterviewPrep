/**
* @param {number[][]} grid
* @return {number}
*/
var islandPerimeter = function(grid) {
    let landPerimeter = 0;
    // loop through the matrix
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) {
         // Add 4 to the perimeter for every land cell
                landPerimeter += 4;
               
     // Check if there is a land cell to the left, subtract 2 if so (shared edge)
                if (i > 0 && grid[i - 1][j] === 1) {
                    landPerimeter -= 2;
                }
               
        // Check if there is a land cell above, subtract 2 if so (shared edge)
                if (j > 0 && grid[i][j - 1] === 1) {
                    landPerimeter -= 2;
                }
            }
        }
    }
    return landPerimeter;
 };
 