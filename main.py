from flask import render_template
from flask import Flask, url_for
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/idsr-input-minimal')
def idsr_input_minimal():
    return render_template('idsr-input-minimal.html')
