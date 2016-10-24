from flask import render_template
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return ''

@app.route('/idsr-input')
def idsr_input():
    return render_template('idsr-input.html')

