from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')


@app.route('/user/<name>')
def user(name):
  return render_template('index.html', name=name)