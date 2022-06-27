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
    const trends = await trendDal.getAllUniqueTrends()
    res.send(trends)
}
async function getTrendByHashtag(req , res ) {
    const hashtag = `#${req.params.hashtag}`
    const trends = await trendDal.getTrends(hashtag)
    res.send(trends)
}

async function getTrendCountByHashtag(req , res ) {
    const hashtag = `#${req.params.hashtag}`
    const trends = await trendDal.getTrendsCount(hashtag)
    res.send({count:trends})
}
module.exports = {insertTrend , getAllTrends , getTrendByHashtag , getTrendCountByHashtag}
