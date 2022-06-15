const { Friend } = require("../models/friend-model");

async function insertFriend(friendInfo) {
    const friend = new Friend(friendInfo)
    const result = await friend.save()
    return result
}


async function getAllFriendsOfUserId(userId) {
    const friendsWithId = Friend.find({userId , status: true})
    return friendsWithId
}

async function getFriendsCountByUserId(userId) {
    const friendsCount = await Friend.find({userId , status: true}).count()
    return friendsCount
}
async function updateFriend (friendId ,updateFriend) {
    const update = await Friend.findOneAndUpdate({_id : friendId} , updateFriend)
    return update
  }
  
  async function isUniqueFriend(friendWithUserId,userId) {
    const friendsCount = await Friend.find({friendWithUserId,userId ,status:true}).count()
    return friendsCount == 0
  }
module.exports = { insertFriend , getAllFriendsOfUserId , getFriendsCountByUserId , updateFriend , isUniqueFriend}