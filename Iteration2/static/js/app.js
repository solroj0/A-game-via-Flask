// app.js
import { currentPlayer, switchPlayer } from './modules/player.js';
import { board, moves, makeMove, undoMove, checkVictory } from './modules/board.js';
import { disableAllButtons, resetGame, animateHideMessage, showMessagePopup } from './modules/ui.js';

// Your existing code that uses the imported functions and variables
// Add this code to the end of your app.js or where appropriate in your application logic

// Example: Add a click event listener to each cell button
const cells = document.getElementsByClassName('cell');
for (let cell of cells) {
    cell.addEventListener('click', function(event) {
        // Extract row and column information from the button's ID
        const [row, col] = event.target.id.split('_').slice(1).map(Number);
        
        // Call the makeMove function with the extracted row and column
        makeMove(row, col);
    });
}

// Example: Add a click event listener to the "New Game" button
const newGameButton = document.getElementById('newGameButton');
newGameButton.addEventListener('click', resetGame);
