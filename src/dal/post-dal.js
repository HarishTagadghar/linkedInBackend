const {Post} = require('../models/post-model')
const { post } = require('../routers/post-router')


async function insertPost(postInfo) {
    const post = new Post(postInfo)
    const result = await post.save()
    return result
}

async function getAllPostOfUserId(userId) {
    const posts = await Post.find({userId})
    return posts
}

async function getPostByPostId(postId) {
    const post =  await Post.find({_id : postId})
    return post
}

module.exports = {insertPost ,getAllPostOfUserId , getPostByPostId}