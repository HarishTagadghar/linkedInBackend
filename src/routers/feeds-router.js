const express = require("express")
const router = express.Router()
const jwt = require("../service/jwt-service")
const feedsService = require("../service/feeds-service")
router.get('/', jwt.verifyTokenMiddleware ,  feedsService.getFeedsByUserId)


module.exports = router