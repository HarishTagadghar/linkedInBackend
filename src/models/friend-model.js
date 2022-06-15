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
Friend.createIndexes({friendWithUserId:1 , userId:-1})

module.exports = {Friend}