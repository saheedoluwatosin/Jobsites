const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")
const connectDb = require("./config/db")
const errorHandler = require("./middleware/errorhandling")
const router = require("./router/router")




const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8081

connectDb()

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log("Server is running......")
})


app.use("/v1/api",router)
