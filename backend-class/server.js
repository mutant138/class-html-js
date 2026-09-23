const express = require("express")
const cors = require("cors")
const {getDb , connectDB} =require("./utils/dbConnection")
const { ObjectId } = require("mongodb")

// MVC Architecture

const app = express()


app.use(cors({
    origin: "*",
    // methods: ["GET", "POST"]
}))

app.use(express.json())
// CRUD --> Get, post , put/patch , delete

app.get("/health", (req, res) => {
    return res.status(200).send(`<h1>hi</h1>`)
})

app.post("/add-users", async(req,res)=>{
    try {
        const db = getDb()
        const users = await db.collection("users").insertOne(req.body)
        console.log("userssss", users)
        return res.status(201).send({message : "User created successfully", data: users})
    } catch (error) {
         console.error("Err in post users", error)
        return res.status(500).json({error: error})
    }
})


app.get("/get-users",async (req,res)=>{
    try {
        const db = getDb()
        const userDocs = await db.collection("users").find().toArray()
        
        res.status(200).send({message: "User list fetched successfully", data : userDocs})
    } catch (error) {
         console.error("Err in get users", error)
        return res.status(500).json({error: error})
    }
})

app.get("/get-user", async (req,res)=>{
    try {
        const { id }= req.query
        const db = getDb()
        const flag = ObjectId.isValid(id)
        if(!flag){
            return res.status(401).send({message : "Id is invalid"})
        }
        
        const foundUser = await db.collection("users").findOne({_id : new ObjectId(id)})
        if(!foundUser){
            return res.status(404).send({message : "User not found"})
        }
        return res.status(200).send({message: "User found", data: foundUser})
    } catch (error) {
          console.error("Err in get user", error)
        return res.status(500).json({error: error})
    }
})

app.get("/get-user/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const db = getDb()
        const flag = ObjectId.isValid(id)
        if(!flag){
            return res.status(401).send({message : "Id is invalid"})
        }
        
        const foundUser = await db.collection("users").findOne({_id : new ObjectId(id)})
        if(!foundUser){
            return res.status(404).send({message : "User not found"})
        }
        return res.status(200).send({message: "User found", data: foundUser})
    } catch (error) {
          console.error("Err in get user", error)
        return res.status(500).json({error: error})
    }
})

app.patch("/update-user", async(req,res)=>{
   try {
     const { userId }= req.query
     const updatedVal = req.body
     const db = getDb()
     const flag = ObjectId.isValid(userId)
        if(!flag){
            return res.status(401).send({message : "Id is invalid"})
        }
     const foundUser = await db.collection("users").findOne({_id : new ObjectId(userId)})
      if(!foundUser){
        return res.status(404).send({message : "User not found"})
      }
    
      const updatedUser = await db.collection("users").updateOne({
        _id : new ObjectId(userId)
      },{
        $set: updatedVal
      })

     console.log(updatedUser,"updateddddddd")

     return res.status(200).send({
        message : "User updated succesfully",
        data : updatedUser
     })

   } catch (error) {
        console.error("Err in update user", error)
        return res.status(500).status({error: error})
   }
})
// Port numbers 

async function startServer(){
   await connectDB();
   app.listen(3000, () => {
    console.log("Server is running")
  })
}

startServer()


