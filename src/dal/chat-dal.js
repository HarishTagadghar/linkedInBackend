const {ChatMetaData} = require("../models/chatMetaData-model")
const {ChatDetails} = require("../models/chatDetails-model")

async function insertChat(userInfo){
    
    const user = await ChatMetaData.find({$or:[{fromFriend:userInfo.fromFriend , toFriend:userInfo.toFriend} , {fromFriend:userInfo.toFriend , toFriend:userInfo.fromFriend}]})
    if (user.length > 0) {
        const userInfos = {
            sendByUserId:userInfo.fromFriend,
            chatId:user[0]._id,
            text:userInfo.text
        }
        const chat = new ChatDetails(userInfos)
        const result = await chat.save()
        return result
    }
 
  
    const newUser = new ChatMetaData(userInfo)
    const createdUser = await newUser.save()
    const userInfos = {
        sendByUserId:userInfo.fromFriend,
        chatId:createdUser._id,
        text:userInfo.text
    }
    const chat = new ChatDetails(userInfos)
    const result = await chat.save()
    return result

}

async function getAllFriendsChatList(userId){
    const user = await ChatMetaData.find({$or:[{fromFriend:userId } , {toFriend:userId}]})
    return user
}

async function getFriendChat(chatId){
    const chat = await ChatDetails.find({chatId})
    return chat
}
module.exports = {insertChat , getAllFriendsChatList , getFriendChat}