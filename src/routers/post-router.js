const express = require("express");
const router = express.Router();
const postService = require("../service/post-service");
const jwtService = require("../service/jwt-service");

router.get("/", jwtService.verifyTokenMiddleware, postService.getPostByUserId);

router.get("/:postId", jwtService.verifyTokenMiddleware, postService.getPostByPostId);

router.delete("/:postId", jwtService.verifyTokenMiddleware, postService.deletePostByPostId);

router.post("/", jwtService.verifyTokenMiddleware, postService.insertPost);


module.exports = router;
