// const { MongoClient } = require("mongodb")
const dotenv = require("dotenv")

dotenv.config()

// // Local db use or cloud db

const uri = process.env.MONGO_URI;
console.log("uri", uri)

// const dbName = 'ganeshaProject';

// const client = new MongoClient(url)

// let db

// async function connectDB(){
//     await client.connect();
//     db = client.db(dbName)
//     console.log("Database connected successfully")
// }

// function getDb(){
//     if(!db) throw new Error('Database not connected')
//     return db
// }

// module.exports = {connectDB , getDb}


const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect(uri)
        // console.log(db, "This is db connection log")
        console.log("Database successfully connected")
    } catch (error) {
        console.error("Err in db connection ", error)
    }
}

module.exports = {connectDB}