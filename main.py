#!/usr/bin/env python

from flask import Flask
from flask import render_template
from jsonapi import JSONAPI

app = Flask(__name__)

jsonapi = JSONAPI()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/idsr-input-minimal')
def idsr_input_minimal():
    """The main view for the idsr nested steps wizards page.
    """
    return render_template('idsr-input-minimal.html')


if __name__ == "__main__":
    app.run()
