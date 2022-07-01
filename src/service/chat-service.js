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
    const chatId = req.body.chatId
    const chat = await chatDal.getFriendChat(chatId)
    res.send(chat)
}
module.exports = {insertChat , getAllFriendsChatList , getFriendChat}