const mongoose =require("mongoose")

const ChatMetaData = mongoose.model("ChatMetaData" , new mongoose.Schema({
    fromFriend:{
        type:String
    },
    toFriend:{
        type:String
    }
},{timestamps:true}
)) 

module.exports = {ChatMetaData}