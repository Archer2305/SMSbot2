from flask import *
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("hub.html")

@app.route("/index.html")
def index():
    return render_template("index.html")


@app.route("/config.html")
def config():
    return render_template("config.html")




if __name__ == "__main__":
    app.run(debug=True)