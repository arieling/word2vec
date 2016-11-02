from flask import Flask, send_file
from mnist import predectResult


app = Flask(__name__)

@app.route("/")
def index():
    return send_file("templates/index.html")


@app.route('/articles/<source>/<to>/<predict>')
def api_article(source, to, predict):
    return predectResult(source, to, predict)

if __name__ == "__main__":
    app.run(host='0.0.0.0')