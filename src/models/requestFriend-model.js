const mongoose = require("mongoose")

const RequestFriend = mongoose.model("RequestFrined",new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    friendWithUserId:{
        type:String,
        required:true
    },
    seen:{
        type:Boolean
    },
    status:{
        type:Boolean
    }
}))

module.exports = {RequestFriend}