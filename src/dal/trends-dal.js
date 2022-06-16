const { getPastDateByDays } = require("../common/date-common")
const {Trends} = require("../models/trends-model")

async function insertTrend(trendInfo) {
    const trend =  new Trends(trendInfo)
    const result = await trend.save()
    return result
}
async function getAllTrends(){
    const createdAt = {$gte:getPastDateByDays(1)}
    const trends = await Trends.find(createdAt)
    return trends

}

module.exports = {insertTrend , getAllTrends}