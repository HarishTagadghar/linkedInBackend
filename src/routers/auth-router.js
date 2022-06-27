const express = require('express');
const router = express.Router();
const authService = require("../service/auth-service")
const jwtService = require("../service/jwt-service");


router.post('/login',authService.login);

router.post("/register", authService.register);

router.put("/update" , jwtService.verifyTokenMiddleware , authService.updateuserByUserId)

router.get('/users' , authService.getAllUsers)
router.get('/:userId' , authService.getUserByUserId)

module.exports = router; 
