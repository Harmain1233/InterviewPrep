/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) { 
    // Initialize counts for diagonals and rows/columns
    let rightDiagonal = 0; // For left-to-right diagonal
    let leftDiagonal = 0; // For right-to-left diagonal
    let rows = [0, 0, 0]; // Array to track each row
    let cols = [0, 0, 0]; // Array to track each column

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i]; // Get the current move's row and column
        let player; // Declare player outside the conditional blocks
        if (i % 2 === 0) { 
            player = 1; // player 1 -> A
        } else {
            player = -1; // player -1 -> B 
        }
       
        // Update row and column counts to check for vertical and horizontal wins 
        rows[row] += player; 
        cols[col] += player;

        // Check left-to-right diagonal
        if (row === col) {
            rightDiagonal += player;
        }
        
        // Check right-to-left diagonal
        if (row + col === 2) {
            leftDiagonal += player;
        }

        // Check if any row, column, or diagonal has reached 3 or -3
        if (Math.abs(rows[row]) === 3 || Math.abs(cols[col]) === 3 || 
            Math.abs(rightDiagonal) === 3 || Math.abs(leftDiagonal) === 3) {
            if (player === 1) {
                return 'A';
            } else {
                return 'B';
            }
        }
    }

    // Determine result after checking all moves
    return moves.length === 9 ? "Draw" : "Pending";
};
