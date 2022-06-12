const mongoose = require("mongoose")

const Like = mongoose.model ("Like" , new mongoose.Schema({
    likeForId:{
        type:String
    },
    userId:{
        type:String
    },
    status:{
        type:Boolean
    }

}))

module.exports = {Like}