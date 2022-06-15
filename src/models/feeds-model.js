const mongoose = require("mongoose")

const Feeds = mongoose.model("Feeds", new mongoose.Schema({
    postId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true

    }

}, { timestamps: true }))
Feeds.createIndexes({ userId: 1, timestamps: -1 })
module.exports = { Feeds }