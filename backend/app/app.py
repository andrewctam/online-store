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


@app.route("/api/userId", methods = ["POST"])
def checkUserId():
    users = mongo.db.users
    userId = request.json["userId"]

    try:
        if users.find_one({ "_id": ObjectId(userId) }):
            return json_util.dumps(userId)
    except:
        print("Creating a new userId")
        
    user = users.insert_one({})
    return json_util.dumps(str(user.inserted_id))

@app.route("/api/items", methods = ["GET"])
def items():
    existing = list(mongo.db.items.find({}))
    existing.reverse()
    
    existing = map(lambda x: {
        "id": str(x['_id']),
        "name": x['name'],
        "price": x['price'],
        "seller": str(x['seller']),
        "description": x['description'],

    }, existing)

    return json_util.dumps(existing)

@app.route("/api/createItem", methods = ["POST"])
def createItem():
    try:
        ObjectId(request.json["seller"])
    except:
        return json_util.dumps("Invalid userId")
    
    mongo.db.items.insert_one({
        "name": request.json["name"],
        "price": request.json["price"],
        "seller": ObjectId(request.json["seller"]),
        "description": request.json["description"],
    })

    return json_util.dumps("OK")

@app.route("/api/deleteItem", methods = ["DELETE"])
def deleteItem():
    try:
        ObjectId(request.json["itemId"])
    except:
        return json_util.dumps("Invalid userId")
    
    mongo.db.items.delete_one({"_id": ObjectId(request.json["itemId"])})
    return json_util.dumps("OK")

@app.route("/api/checkout", methods = ["POST"])
def checkout():
    for item in request.json["items"]:
        try:
            ObjectId(item)
        except:
            return json_util.dumps("Invalid")
    
    item_ids = list(map(lambda x: ObjectId(x), request.json["items"]))
    
    mongo.db.items.delete_many({
        "_id" : { 
            "$in": item_ids
        } 
    })

    return json_util.dumps("OK")
