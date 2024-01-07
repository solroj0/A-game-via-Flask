let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let moves = 0; // Counter for the number of moves

function makeMove(row, col) {
    const cell = document.getElementById(`cell_${row}_${col}`);

    if (board[row][col] === '' && !cell.disabled) {
        board[row][col] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.disabled = true; // Disable the button after it's clicked
        moves++;

        if (checkVictory()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            disableAllButtons();
            document.getElementById('retryButton').style.display = 'block';
        } else if (moves === 9) {
            // All slots filled, and no victory (draw)
            document.getElementById('message').innerText = "It's a draw!";
            document.getElementById('retryButton').style.display = 'block';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
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

function disableAllButtons() {
    // Disable all buttons
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.disabled = true;
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    moves = 0; // Reset the move counter

    // Reset the UI
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
        cell.disabled = false; // Enable the buttons
    }

    // Clear the message and hide the retry button
    document.getElementById('message').innerText = '';
    document.getElementById('retryButton').style.display = 'none';
}
