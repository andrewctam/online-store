from flask import Flask
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv
import certifi
from bson import json_util

if os.environ.get("ENVIRONMENT") != "production":
    load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
mongo = PyMongo(app, tlsCAFile=certifi.where())

@app.route("/api/items")
def hello():
    items = mongo.db.items
    existing = list(items.find({}))

    return json_util.dumps(existing)
