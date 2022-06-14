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
Like.createIndexes({likeForId:1 , userId:-1})
module.exports = {Like}