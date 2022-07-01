const mongoose =require("mongoose")

const ChatDetails = mongoose.model("ChatDetails" , new mongoose.Schema({
   chatId:{
    type:String,
    required:true
   },
   text:{
    type:String
   },
   sendByUserId:{
      type:String
   }
},{timestamps:true}
)) 

module.exports = {ChatDetails}