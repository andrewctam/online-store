from flask import Flask
from flask import request
from flask_cors import CORS
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv
import certifi
from bson import json_util, ObjectId

if os.environ.get("ENVIRONMENT") != "production":
    load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
mongo = PyMongo(app, tlsCAFile=certifi.where())

@app.route("/api/items", methods = ["GET"])
def items():
    items = mongo.db.items
    existing = list(items.find({}))
    existing.reverse()
    print(existing)
    existing = map(lambda x: {
        "id": str(x['_id']),
        "name": x['name'],
        "price": x['price'],
        "seller": x['seller'],
        "description": x['description'],

    }, existing)

    return json_util.dumps(existing)

@app.route("/api/create", methods = ["POST"])
def createItem():
    items = mongo.db.items
    items.insert_one({
        "name": request.json["name"],
        "price": request.json["price"],
        "seller": request.json["seller"],
        "description": request.json["description"],
    })

    return json_util.dumps("OK")

@app.route("/api/checkout", methods = ["POST"])
def checkout():
    for item in request.json["items"]:
        try:
            ObjectId(item)
        except:
            return json_util.dumps("Invalid")
    
    item_ids = list(map(lambda x: ObjectId(x), request.json["items"]))
    
    items = mongo.db.items
    items.delete_many({
        "_id" : { 
            "$in": item_ids
        } 
    })

    return json_util.dumps("OK")
