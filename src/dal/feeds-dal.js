const { Feeds } = require("../models/feeds-model");

async function insertFeed(feedInfo) {
    const feed = new Feeds(feedInfo)
    const result = await feed.save()
    return result
}

async function getFeedsByUserId(userId) {
    const createdAt = {   "$gte": new Date(new Date() - 7 * 60 * 60 * 24 * 1000)}
    const feeds = await Feeds.find({userId , createdAt})
    console.log("result", feeds)
    return feeds
}
module.exports = { insertFeed, getFeedsByUserId }
