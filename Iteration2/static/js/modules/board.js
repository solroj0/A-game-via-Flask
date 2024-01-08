// board.js

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let moves = 0;

function makeMove(row, col) {
    const cell = document.getElementById(`cell_${row}_${col}`);
    const newGameButton = document.getElementById('newGameButton');
    const undoButton = document.getElementById('undoButton');
    const messageElement = document.getElementById('message'); // Added this line

    if (board[row][col] === '' && !cell.disabled) {
        board[row][col] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.disabled = true; // Disable the button after it's clicked
        moves++;

        if (checkVictory()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            disableAllButtons();
            newGameButton.disabled = false;
            undoButton.disabled = true;
            showMessagePopup();
        } else if (moves === 9) {
            document.getElementById('message').innerText = "It's a draw!";
            newGameButton.disabled = false;
            undoButton.disabled = true;
            showMessagePopup();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            newGameButton.disabled = false;
            undoButton.disabled = false;
        }
    }
}

function undoMove() {
    // Implement logic to undo the last move (if possible)
    // For simplicity, you may want to implement this functionality based on your specific requirements.
    // This may involve keeping track of the previous moves in a stack or array.
}

function checkVictory() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    return false;
}

export { board, moves, makeMove, undoMove, checkVictory };
