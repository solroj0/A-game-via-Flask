let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let moves = 0; // Counter for the number of moves

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

    // Hide the message with animation
    animateHideMessage();
}

function animateHideMessage() {
    const messageElement = document.getElementById('message');

    // Move the message above the center with opacity 0
    messageElement.style.transform = 'translate(-50%, -100%)';
    messageElement.style.opacity = 0;

    // Use requestAnimationFrame for smoother animation
    function moveAboveCenter() {
        let currentY = parseFloat(messageElement.style.transform.split(',')[1]) || -100;
        let targetY = -100;
        let currentOpacity = parseFloat(messageElement.style.opacity) || 0;
        let targetOpacity = 0;

        // Calculate the next position
        let newY = currentY + (targetY - currentY) * 0.1;
        let newOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;

        // Apply the new position and opacity
        messageElement.style.transform = `translate(-50%, ${newY}%)`;
        messageElement.style.opacity = newOpacity;

        // Continue the animation until the target is reached
        if (Math.abs(newY - targetY) > 0.1 || Math.abs(newOpacity - targetOpacity) > 0.01) {
            requestAnimationFrame(moveAboveCenter);
        } else {
            // After animation completes, hide the message
            messageElement.style.display = 'none';
        }
    }

    // Start the animation
    moveAboveCenter();
}


function showMessagePopup() {
    const messageElement = document.getElementById('message');

    // Show the message popup
    messageElement.style.display = 'block';

    // Start animation
    animateMessage();
}

function animateMessage() {
    const messageElement = document.getElementById('message');

    // Start position above the center
    messageElement.style.transform = 'translate(-50%, -100%)';
    messageElement.style.opacity = 0;

    // Use requestAnimationFrame for smoother animation
    function moveTowardsCenter() {
        let currentY = parseFloat(messageElement.style.transform.split(',')[1]) || -100;
        let targetY = -50;
        let currentOpacity = parseFloat(messageElement.style.opacity) || 0;
        let targetOpacity = 0.8;

        // Calculate the next position
        let newY = currentY + (targetY - currentY) * 0.1;
        let newOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;

        // Apply the new position and opacity
        messageElement.style.transform = `translate(-50%, ${newY}%)`;
        messageElement.style.opacity = newOpacity;

        // Continue the animation until the target is reached
        if (Math.abs(newY - targetY) > 0.1 || Math.abs(newOpacity - targetOpacity) > 0.01) {
            requestAnimationFrame(moveTowardsCenter);
        }
    }

    // Start the animation
    moveTowardsCenter();
}