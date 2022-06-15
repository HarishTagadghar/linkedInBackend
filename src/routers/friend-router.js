const express = require("express");
const router = express.Router();
const jwt = require("../service/jwt-service")
const friendService = require("../service/friend-service")

router.post('/', jwt.verifyTokenMiddleware, friendService.insertFriend)

router.get('/:userId', jwt.verifyTokenMiddleware, friendService.getAllFriendsOfUserId)
router.get('/count/:userId', jwt.verifyTokenMiddleware, friendService.getFriendsCountByUserId)

router.put('/:friendId' , jwt.verifyTokenMiddleware , friendService.updateFriend)
module.exports = router