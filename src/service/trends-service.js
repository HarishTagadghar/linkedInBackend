const trendDal = require("../dal/trends-dal")

async function insertTrend({ postId, hashtag }) {
    const TrendInfo = {
        postId,
        hashtag
    }
    const trend = await trendDal.insertTrend(TrendInfo)
    return trend
}
async function getAllTrends(req,res) {
    const trends = await trendDal.getAllTrends()
    res.send(trends)
}
module.exports = {insertTrend , getAllTrends}
