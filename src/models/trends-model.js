const mongoose = require("mongoose")

const Trends = mongoose.model("Trends" , new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    hashtag:{
        type:String,
        required:true
    }
} , {timestamps:true}))

module.exports = {Trends}