const express = require('express');
const router = express.Router();
const {getPost} = require("../service/post-service")
const jwtService = require("../service/jwt-service")

 router.get('/' , jwtService.verifyTokenMiddleware ,  getPost )


  
module.exports = router