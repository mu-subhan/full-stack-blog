import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Mongodb is connected");
        
    }catch(err){
        console.log(err,"mongodb is not connected");
        
    }

}
export default connectDB