const { User } = require('../models/Users');


async function getUserByEmailId(emailId) {
    let user = await User.findOne({ email: emailId });
    return user
}
async function insertUser(userInfo) {
    const user = new User(userInfo)
    const result = await user.save()
    return result
}

module.exports = {getUserByEmailId , insertUser}