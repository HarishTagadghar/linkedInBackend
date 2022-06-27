const express = require("express")
const router =express.Router()
const jwt = require("../service/jwt-service")
const trendsService = require("../service/trends-service")

router.get("/" , jwt.verifyTokenMiddleware , trendsService.getAllTrends)

router.get("/hashtag/:hashtag" , jwt.verifyTokenMiddleware , trendsService.getTrendByHashtag)

router.get("/count/:hashtag" , jwt.verifyTokenMiddleware , trendsService.getTrendCountByHashtag)

module.exports = router