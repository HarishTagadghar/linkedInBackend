const friendDal = require("../dal/friend-dal")

async function insertFriend(req , res) {
    try {
        const friendInfo = {
            userId:req.decodedToken.id,
            friendWithUserId:req.body.friendWithUserId,
            status:true
        }
        const result = await friendDal.insertFriend(friendInfo)
            res.send(result)
    } catch (error) {
        res.status(500).send({errorMessage: error.message})
    }
}
async function getAllFriendsOfUserId(req , res) {
    const userId = req.params.userId
    const allFriendsOfUserId = await friendDal.getAllFriendsOfUserId(userId)
    allFriendsOfUserId.forEach((friend) => {
        delete friend._doc.__v
        delete friend._doc.userId
    })

    res.send(allFriendsOfUserId)
}

async function getFriendsCountByUserId(req , res) {
    const friendsCount = await friendDal.getFriendsCountByUserId(req.params.userId)
    console.log("count" , friendsCount);
    res.send(friendsCount.toString())
}
module.exports = {insertFriend , getAllFriendsOfUserId , getFriendsCountByUserId}