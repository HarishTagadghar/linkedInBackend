const express = require("express")
const router =express.Router()
const jwt = require("../service/jwt-service")
const trendsService = require("../service/trends-service")

router.get("/" , jwt.verifyTokenMiddleware , trendsService.getAllTrends)

module.exports = router