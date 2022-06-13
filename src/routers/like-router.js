const express = require("express");
const router = express.Router();
const likeService = require('../service/like-service')
const jwtService = require('../service/jwt-service')

router.get("/:likeForId" , jwtService.verifyTokenMiddleware , likeService.getLikeByLikeForId)
router.get("/count/:likeForId" , jwtService.verifyTokenMiddleware , likeService.getLikeCountByLikeForId)
router.post("/", jwtService.verifyTokenMiddleware, likeService.insertLike);
router.put("/:likeForId" , jwtService.verifyTokenMiddleware , likeService.updateLike)

module.exports = router;