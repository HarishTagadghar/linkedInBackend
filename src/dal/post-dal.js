const {Post} = require('../models/post-model')


async function insertPost(postInfo) {
    const post = new Post(postInfo)
    const result = await post.save()
    return result
}


module.exports = {insertPost}