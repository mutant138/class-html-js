const express = require("express")
const cors = require("cors")
const {getDb , connectDB} =require("./utils/dbConnection")

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
        const users = await db.collection('users').insertOne(req.body)
        console.log("userssss", users)
        return res.status(201).send({message : "User created successfully", data: users})
    } catch (error) {
         console.error("Err in post users", error)
        return res.status(500).status({error: error})
    }
})


app.get("/get-users",(req,res)=>{
    try {
        res.status(200).send({message: "User list fetched successfully", data : users})
    } catch (error) {
         console.error("Err in get users", error)
        return res.status(500).status({error: error})
    }
})

app.get("/get-user", (req,res)=>{
    try {
        const {id }= req.query
        const foundUser = users.filter((user)=>{
            console.log(user.id, id, ">>>>debug")
           return user.id == id
        })
        console.log(foundUser, ">>>>foundUser")
        if(foundUser.length === 0){
            return res.status(404).send({message : "User not found"})
        }
        return res.status(200).send({message: "User found", data: foundUser})
    } catch (error) {
          console.error("Err in get user", error)
        return res.status(500).status({error: error})
    }
})

app.patch("/update-user", (req,res)=>{
   try {
     const { userId }= req.query
     const updatedVal = req.body
      const foundUser = users.some((user)=> user.id == userId)

      if(!foundUser){
        return res.status(404).send({message : "User not found"})
      }

     users = users.map((user)=>{
       if(user.id == userId){
          return { ...user, ...updatedVal}
       }
       return user
     })

     return res.status(200).send({
        message : "User updated succesfully",
        data : users.find((user)=> user.id == userId)
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


