const mongoose = require('mongoose')
require('dotenv').config()
const LOCAL = process.env.LOCAL
const MONGO_URL = process.env.MONGO_URL

function MongoConnect(){
    try{
        mongoose.connect(MONGO_URL)
        console.log("MongoDB Connection successful!")
    }
    catch(err){
        console.log("Failed to connect MongoDB",err.message)
    }
}

module.exports = MongoConnect