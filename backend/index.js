import express from "express"
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
import postRouter from "./routes/post.route.js"
import userRouter from "./routes/user.route.js"
import commentRouter  from "./routes/comment.route.js"
import webHookRouter from "./routes/webhook.route.js"
import {clerkMiddleware, requireAuth} from "@clerk/express"
dotenv.config();

const app = express()
app.use(clerkMiddleware())
app.use("/webhooks",webHookRouter)
app.use (express.json())


// app.get("/test",(req,res)=>{
//     res.status(200).send("it is working")
// })


// app.get("/auth-state",(req,res)=>{
//     const authState = req.auth;
//     res.json(authState);
// })

// app.get("/protect",(req,res)=>{
//     const {userId} = req.auth;
//     if(!userId){
//         return res.status(401).json("not authenticated")
//     }
//      res.status(200).json("content")
// })

app.get("/protect2", requireAuth(), (req,res)=>{
    
 res.status(200).json("content")
})




app.use("/posts",postRouter)
app.use("/users",userRouter);
app.use("/comments",commentRouter);


app.use((error,req,res,next)=>{
        res.status(error.status || 500);
    
        res.json({
            message:error.message ||"something went wrong",
            status:error.status,
            stack:error.stack,
        })
    })


app.listen(3000,()=>{
    console.log("server is running!");
    connectDB();
    
})