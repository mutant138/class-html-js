const express = require("express")
const cors = require("cors")

// MVC Architecture

const app = express()

const users = []


app.use(cors({
    origin: "*",
    // methods: ["GET", "POST"]
}))

app.use(express.json())
// CRUD --> Get, post , put/patch , delete

app.get("/health", (req, res) => {
    return res.status(200).send(`<h1>hi</h1>`)
})


app.post("/add-users", async (req,res)=>{
    try {
        const {firstName , lastName , age} = req.body
        if(age < 18){
            return res.status(401).send({message : "Underage"})
        }
        const id = Math.random()
        users.push({id: id, firstName, lastName, age})
        res.status(200).send({message: "Ok"})
    } catch (error) {
        console.error("Err in add users", error)
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

// Port numbers 

app.listen(3000, () => {
    console.log("Server is running")
})