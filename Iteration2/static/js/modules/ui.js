// ui.js
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

export { disableAllButtons, resetGame, animateHideMessage, showMessagePopup };
