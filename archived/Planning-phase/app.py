from flask import Flask
from threading import Thread
import webbrowser
import time

app = Flask(__name__)

def display_numbers():
    for i in range(0, 11):
        print(i)
        time.sleep(1)

@app.route('/')
def hello_world():
    return "Hello World"

if __name__ == '__main__':
    # Start the display_numbers function in a separate thread
    #threading allowws me to see logic of the program occur outside the main 
    thread = Thread(target=display_numbers)
    thread.start()

    #open browser with default address
    webbrowser.open('http://127.0.0.1:5000/')
    
    # Run the Flask app
    app.run(debug=True, use_reloader=False)
