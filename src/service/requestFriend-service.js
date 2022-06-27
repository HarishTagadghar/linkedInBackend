const requestFriendDal = require("../dal/requestFriend-dal")
const { insertFriend } = require("./friend-service")

async function insertRequestFriend(req, res) {
    const requestFriendInfo = {
        userId: req.decodedToken.id,
        friendWithUserId: req.body.friendWithUserId,
        seen: false,
        status: false
    }
    const result = await requestFriendDal.insertRequestFriend(requestFriendInfo)
    res.send(result)
}

async function getRequestFriendByUserId(req, res) {
    const userId = req.decodedToken.id
    const requests = await requestFriendDal.getRequestFriendByUserId(userId)
    res.send(requests)
}

async function updateRequestFriendSeen(req, res) {
    const userId = req.decodedToken.id
    const updatedRequests = await requestFriendDal.updateRequestFriendSeen(userId)
    res.send(updatedRequests)
}

async function updateRequestFriendStatus(req, res) {
    try {
        const userId = req.decodedToken.id
        const friendWithUserId = req.body.friendWithUserId
        await insertFriend(userId, friendWithUserId)
        const updatedRequests = await requestFriendDal.updateRequestFriendStatus(userId, friendWithUserId)
        res.send(updatedRequests)

    } catch (error) {
        res.status(409).send({ error: error.message })
    }
}
async function deleteFriendRequest (req,res) {
    const userId = req.body.userId
    const deletedRequest = await requestFriendDal.deleteFriendRequest(userId)
    res.send(deletedRequest)
}
module.exports = { insertRequestFriend, getRequestFriendByUserId, updateRequestFriendSeen, updateRequestFriendStatus , deleteFriendRequest }