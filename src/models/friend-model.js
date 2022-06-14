const mongoose = require("mongoose")

const Friend =  mongoose.model("Friend" , new mongoose.Schema({
    userId:{
        type:String
    },
    friendWithUserId:{
        type:String,
        required:true
    },
    status:{
        type:Boolean
    }
}))

module.exports = {Friend}