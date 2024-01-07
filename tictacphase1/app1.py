from flask import Flask, render_template, request
from threading import Thread
import webbrowser
import time

app = Flask(__name__)

def display_numbers():
    for i in range(0, 11):
        print(i)
        time.sleep(1)
        
        
# Initial empty Tic Tac Toe board
board = [['', '', ''], ['', '', ''], ['', '', '']]

@app.route('/')
def display_board():
    return render_template('board.html', board=board)

@app.route('/make_move', methods=['POST'])
def make_move():
    row = int(request.form['row'])
    col = int(request.form['col'])

    if board[row][col] == '':
        board[row][col] = 'X'  # Assume player is X for simplicity
        # Perform any game logic here (check for a winner, etc.)
        # ...

    return render_template('board.html', board=board)





if __name__ == '__main__':
    
    thread = Thread(target=display_numbers)
    thread.start()
    
    #open browser with default address
    webbrowser.open('http://127.0.0.1:5000/')
    app.run(debug=True, use_reloader=False)
