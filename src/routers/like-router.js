const express = require("express");
const router = express.Router();
const likeService = require('../service/like-service')
const jwtService = require('../service/jwt-service')

router.get("/:likeForId" , jwtService.verifyTokenMiddleware , likeService.getLikeByLikeForId)
router.post("/", jwtService.verifyTokenMiddleware, likeService.insertLike);


module.exports = router;