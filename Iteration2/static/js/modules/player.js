// player.js
let currentPlayer = 'X';

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

export { currentPlayer, switchPlayer };
