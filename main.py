from flask import render_template
from flask import Flask
app = Flask(__name__)

static('jquery-steps.min.js', filename='jquery-steps.min.js')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/idsr-input')
def idsr_input():
    return render_template('idsr-input.html')

