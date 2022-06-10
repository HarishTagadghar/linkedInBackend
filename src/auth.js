const { User } = require('./Modeles/Users');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
   
    //  Now find the user by their email address
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }

    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = req.body.password == user.password
    if (!validPassword) {
        return res.status(400).send('Incorrect password.');
    }

    res.send(true);
});


module.exports = router; 
