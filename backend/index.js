import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("its work")
})


console.log(process.env.test)
app.listen(3000,()=>{
    console.log("server is running!");
    
})