const { MongoClient } = require("mongodb")
const dotenv = require("dotenv")

dotenv.config()

// Local db use or cloud db

const url = process.env.MONGO_URI;

const dbName = 'ganeshaProject';

const client = new MongoClient(url)

let db

async function connectDB(){
    await client.connect();
    db = client.db(dbName)
    console.log("Database connected successfully")
}

function getDb(){
    if(!db) throw new Error('Database not connected')
    return db
}

module.exports = {connectDB , getDb}