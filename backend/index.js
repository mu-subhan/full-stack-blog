import express from "express"
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
dotenv.config();

const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("its work")
})

// console.log(process.env.MONGO)
app.listen(3000,()=>{
    console.log("server is running!");
    connectDB();
    
})