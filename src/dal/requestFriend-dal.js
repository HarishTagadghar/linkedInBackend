const { request } = require("express")
const {RequestFriend} = require("../models/requestFriend-model")

async function insertRequestFriend(requestFriendInfo) {
    const requestFriend = new RequestFriend(requestFriendInfo)
    const result = await requestFriend.save()
    return result
} 

async function getRequestFriendByUserId (userId) {
    const requests = await RequestFriend.find({friendWithUserId:userId, status: false})
    // requests.forEach(request => {
    //     delete request._doc.friendWithUserId
    // });
    return requests
}
async function deleteFriendRequest (userId) {
    const request = await RequestFriend.deleteOne({userId:userId})
    console.log("deleted request" , request ,"user id", userId);
    return request
}
async function updateRequestFriendSeen (userId){
    const requests = await RequestFriend.updateMany({friendWithUserId:userId} , {seen: true})
    return requests
}
async function updateRequestFriendStatus (userId , friendWithUserId){
    const requests = await RequestFriend.updateMany({friendWithUserId:userId , userId:friendWithUserId} , {status: true})
    return requests
}
module.exports = {insertRequestFriend , getRequestFriendByUserId , updateRequestFriendSeen , updateRequestFriendStatus , deleteFriendRequest}