const { getPastDateByDays } = require("../common/date-common");
const { Feeds } = require("../models/feeds-model");

async function insertFeed(feedInfo) {
    const feed = new Feeds(feedInfo)
    const result = await feed.save()
    return result
}

async function getFeedsByUserId(userId) {
    const createdAt = {$gte : getPastDateByDays(7)}
    const feeds = await Feeds.find({userId , createdAt})
    console.log("result", feeds)
    return feeds
}
module.exports = { insertFeed, getFeedsByUserId }
