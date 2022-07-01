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
   },
   seen:{
      type:Boolean
   },
   status:{
      type:Boolean
   }
},{timestamps:true}
)) 

module.exports = {ChatDetails}