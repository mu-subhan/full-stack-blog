import express from "express"
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
import postRouter from "./routes/post.route.js"
import userRouter from "./routes/user.route.js"
import commentRouter  from "./routes/comment.route.js"
dotenv.config();

const app = express()
app.use (express.json())

app.use("/posts",postRouter)
app.use("/users",userRouter);
app.use("/comments",commentRouter);

app.listen(3000,()=>{
    console.log("server is running!");
    connectDB();
    
})