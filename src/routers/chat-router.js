const express = require("express");
const router = express.Router();
const jwt = require("../service/jwt-service")
const chatServer = require("../service/chat-service")

router.post('/' , jwt.verifyTokenMiddleware , chatServer.insertChat)

module.exports = router