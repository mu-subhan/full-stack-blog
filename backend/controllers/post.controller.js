import Post from "../models/post.model.js";
import User from "../models/user.model.js"
export const getPosts = async(req,res) =>{
    const posts = await Post.find()
    res.status(200).send(posts)
};



export const getPost = async(req,res) =>{
    const post = await Post.findOne({slug: req.params.slug})
    res.status(200).send(post)
};



export const createPost = async(req,res) =>{
    const clerkUserId = req.auth.userId;
console.log(req.auth);

    console.log(clerkUserId);
    
    if(!clerkUserId){
        return res.status(401).json("not authenticated")
    }
    const user = await User.findOne({clerkUserId})
   if(!user){
    return res.status(404).json("user not found");
   }

    const newPost = await Post({user:user._id,...req.body});

    const post = await newPost.save();
    res.status(200).send(post)};



export const deletePost = async (req,res)=>{
    const clerkUserId = req.auth.userId;

    if(!clerkUserId){
        return res.status(401).json("not authenticated")
    }
    const user = await User.findOne({clerkUserId})

    const deletedPost = await Post.findByIdAndDelete({_id:req.params.id,user: user._id});
    if(!deletedPost){
        return res.status(403).json("you are only delted your post")
    }
    res.status(200).send("post has been deleted")
}