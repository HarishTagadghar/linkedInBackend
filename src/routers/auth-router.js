const express = require('express');
const router = express.Router();
const authService = require("../service/auth-service")


router.post('/login',authService.login);

router.post("/register", authService.register);

module.exports = router; 
