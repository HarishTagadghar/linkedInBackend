const chatDal = require("../dal/chat-dal")

async function insertChat(req , res)  {
    const userInfo = {
        fromFriend:req.decodedToken.id,
        toFriend:req.body.friendId,
        text:req.body.text
    }
    const chat = await chatDal.insertChat(userInfo)
    res.send(chat)
}
async function getAllFriendsChatList(req , res) {
    const userId = req.decodedToken.id
    const user = await chatDal.getAllFriendsChatList(userId)
    res.send(user)
}
async function getFriendChat(req, res) {
    const chatId = req.params.chatId
    const userId = req.decodedToken.id
    const chat = await chatDal.getFriendChat(chatId , userId)
    res.send(chat)
}
async function updateMessageStatus(req , res) {
    const messageId = req.params.messageId
    const updatedMessage = await chatDal.updateMessageStatus(messageId)
    res.send(updatedMessage)
}
async function getChatId(req , res) {
    const userInfo = {
        fromFriend:req.decodedToken.id,
        toFriend:req.params.friendId,
    }
    const friend = await chatDal.getChatId(userInfo)
    res.send(friend)
}
module.exports = {insertChat , getAllFriendsChatList , getFriendChat , updateMessageStatus , getChatId}