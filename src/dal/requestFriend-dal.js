const { request } = require("express")
const {RequestFriend} = require("../models/requestFriend-model")

async function insertRequestFriend(requestFriendInfo) {
    const requestFriend = new RequestFriend(requestFriendInfo)
    const result = await requestFriend.save()
    return result
} 

async function getRequestFriendByUserId (userId) {
    const requests = await RequestFriend.find({friendWithUserId:userId})
    requests.forEach(request => {
        delete request._doc.friendWithUserId
    });
    return requests
}
async function updateRequestFriendSeen (userId){
    const requests = await RequestFriend.updateMany({friendWithUserId:userId} , {seen: true})
    return requests
}
async function updateRequestFriendStatus (userId , friendWithUserId){
    const requests = await RequestFriend.updateMany({friendWithUserId:userId , userId:friendWithUserId} , {status: true})
    return requests
}
module.exports = {insertRequestFriend , getRequestFriendByUserId , updateRequestFriendSeen , updateRequestFriendStatus}