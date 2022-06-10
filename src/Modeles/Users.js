const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
      
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
      
    },
    phoneNumber:{
        type:Number
    },
    imageUrl:{
        type:String
    }
    

}));

exports.User = User;
