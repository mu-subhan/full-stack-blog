import express from "express"
import { createPost, getPost, getPosts,deletePost } from "../controllers/post.controller.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.get("/",getPosts)
router.get("/:slug",getPost)
router.post("/",requireAuth(),createPost)
router.delete("/:id",deletePost)



export default router