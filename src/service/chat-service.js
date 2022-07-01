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

module.exports = {insertChat}