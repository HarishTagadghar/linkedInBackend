function getPastDateByDays(day) {
    const date =  new Date(new Date() - day * 60 * 60 * 24 * 1000)
    return date
}
module.exports = {getPastDateByDays}