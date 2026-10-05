const express = require("express")
const cors = require("cors")
const {connectDB} = require("./utils/dbConnection")
const dotenv = require("dotenv")

// Importing Routes
const authRoutes = require("./routes/authRoutes")

dotenv.config()


const app = express()

app.use(cors({
    origin: "*",
    // methods: ["GET", "POST"]
}))

app.use(express.json())
app.use(express.static('public'));
app.use(express.static('views'));
// CRUD --> Get, post , put/patch , delete

// Using Routes
app.use("/auth",authRoutes)


app.get("/health", (req, res) => {
    return res.status(200).json({message : "Server working"})
})






// Port numbers 
const PORT = process.env.PORT
async function startServer(){
   await connectDB();
   app.listen(PORT, () => {
    console.log("Server is running " + PORT)
  })
}

startServer()