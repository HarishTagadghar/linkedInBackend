const { User } = require('../models/users-model');


async function getUserByEmailId(emailId) {
    let user = await User.findOne({ email: emailId });
    return user
}
async function getUserByUserId(userId) {
    let user = await User.findOne({ _id: userId });
    return user
}
async function insertUser(userInfo) {
    const user = new User(userInfo)
    const result = await user.save()
    
    return {userId:result._id}
}
function getAllUsers() {
    return User.find()
}
async function updateuserByUserId(userId , update) {
    const user =  await User.updateOne({_id : userId} , update)
    return user
}
module.exports = {getUserByEmailId , insertUser , updateuserByUserId  , getAllUsers , getUserByUserId }