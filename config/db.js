const mongoose = require("mongoose")
const dotenv = require("dotenv").config()




const connectDb = ()=>{
    mongoose.connect(`${process.env.MONGODB}`)
    .then(()=> {
        console.log("Mongodb Connected.....")
    })
}


module.exports = connectDb