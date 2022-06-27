const { getPastDateByDays } = require("../common/date-common")
const {Trends} = require("../models/trends-model")

async function insertTrend(trendInfo) {
    const trend =  new Trends(trendInfo)
    const result = await trend.save()
    return result
}
async function getAllUniqueTrends(){
    const queryDate = {$gte:getPastDateByDays(1)}
    const trends =  Trends.distinct("hashtag",{createdAt:queryDate})
    return trends
}
async function getTrends(hashtag){
    const createdAt = {$gte:getPastDateByDays(1)}
    const trend =  Trends.find({hashtag , createdAt})
    return trend
}


async function getTrendsCount(hashtag){
    const createdAt = {$gte:getPastDateByDays(1)}
    const trend = await Trends.find({hashtag , createdAt}).count()
    return trend
}

module.exports = {insertTrend , getAllUniqueTrends  , getTrends , getTrendsCount}