const express = require("express");
const router = express.Router();
const postService = require("../service/post-service");
const jwtService = require("../service/jwt-service");

router.get("/", jwtService.verifyTokenMiddleware, postService.getPost);

router.post("/", jwtService.verifyTokenMiddleware, postService.insertPost);

module.exports = router;
