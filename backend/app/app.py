from flask import Flask
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv
import certifi

if os.environ.get("ENVIRONMENT") != "production":
    load_dotenv()

app = Flask(__name__)
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
mongo = PyMongo(app, tlsCAFile=certifi.where())

@app.route("/")
def hello():
    logos = mongo.db.logos
    existing = list(logos.find({}))
    return "<h1>{}</h1>".format(existing)
