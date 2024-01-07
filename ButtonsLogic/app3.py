from flask import Flask, render_template, request
from threading import Thread
import webbrowser
import time

app = Flask(__name__)

def display_numbers():
    for i in range(0, 11):
        print(i)
        time.sleep(1)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_signal', methods=['POST'])
def process_signal():
    # Get the message from the request
    message = request.form.get('message', 'No message received')

    # Logic to handle the signal
    print(f"Signal received: {message}")
    
    # You can perform any server-side logic here

    return 'Signal processed successfully'

if __name__ == '__main__':
    # Start the display_numbers function in a separate thread
    #threading allowws me to see logic of the program occur outside the main 
    thread = Thread(target=display_numbers)
    thread.start()

    #open browser with default address
    webbrowser.open('http://127.0.0.1:5000/')
    
    # Run the Flask app
    app.run(debug=True, use_reloader=False)
