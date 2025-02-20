import express from "express"
import { createPost, getPost, getPosts,deletePost,uploadAuth,featurePost } from "../controllers/post.controller.js";
import { requireAuth } from "@clerk/express";
import increaseVisit from "../middlewares/increaseVisit.js";

const router = express.Router();


router.get("/upload-auth",uploadAuth)
router.get("/",getPosts)
router.get("/:slug",increaseVisit,getPost)
router.post("/",requireAuth(),createPost)
router.delete("/:id",deletePost)
router.patch("/feature",featurePost)



export default router