const friendDal = require("../dal/friend-dal")

async function insertFriend(userId , friendWithUserId) {
    
        const friendInfo = {
            userId,
            friendWithUserId,
            status: true
        }
        console.log(friendInfo);
        const isUniqueFriend = await friendDal.isUniqueFriend(friendInfo.friendWithUserId, friendInfo.userId)
        if (isUniqueFriend) {

            const result = await friendDal.insertFriend(friendInfo)
            return result
        } else {
           throw new Error("Friend Exists " + friendInfo.friendWithUserId)
        }
    
}
async function getAllFriendsOfUserId(req, res) {
    const userId = req.params.userId
    const allFriendsOfUserId = await _getAllFriendsOfUserId(userId)

    res.send(allFriendsOfUserId)
}

async function getFriendsCountByUserId(req, res) {
    const friendsCount = await friendDal.getFriendsCountByUserId(req.params.userId)
    res.send(friendsCount.toString())
}

async function updateFriend(req, res) {
    const friendId = req.params.friendId;
    const update = await friendDal.updateFriend(friendId, req.body)
    res.send({ "friendId": update._id })

}

async function _getAllFriendsOfUserId(userId) {
    const allFriendsOfUserId = await friendDal.getAllFriendsOfUserId(userId)
    allFriendsOfUserId.forEach((friend) => {
        delete friend._doc.__v
        delete friend._doc.userId
    })
    return allFriendsOfUserId
}


module.exports = {
    insertFriend, getAllFriendsOfUserId,
    getFriendsCountByUserId, updateFriend, _getAllFriendsOfUserId
}