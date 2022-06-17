const express = require("express")
const router = express.Router()
const jwt = require('../service/jwt-service')
const requestFriend = require('../service/requestFriend-service')

router.post('/' , jwt.verifyTokenMiddleware , requestFriend.insertRequestFriend )
router.get('/' , jwt.verifyTokenMiddleware , requestFriend.getRequestFriendByUserId)
router.put('/seen' ,jwt.verifyTokenMiddleware , requestFriend.updateRequestFriendSeen)
router.put('/status' ,jwt.verifyTokenMiddleware , requestFriend.updateRequestFriendStatus)
module.exports = router