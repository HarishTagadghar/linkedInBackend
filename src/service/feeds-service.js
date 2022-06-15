const feedsDal = require("../dal/feeds-dal")

async function insertFeed({ userId, postId }) {
    const feedInfo = {
        userId,
        postId
    }
    const feed = await feedsDal.insertFeed(feedInfo)
    return feed
}

async function getFeedsByUserId(req, res) {
    const feeds = await feedsDal.getFeedsByUserId(req.decodedToken.id)
    console.log(feeds, "service");
    res.send(feeds)

}
module.exports = { insertFeed, getFeedsByUserId }