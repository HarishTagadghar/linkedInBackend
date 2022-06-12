const {Post} = require('../models/post-model')

async function insertPost(postInfo) {
    const post = new Post(postInfo)
    const result = await post.save()
    return result
}

async function getAllPostOfUserId(userId) {
    const posts = await Post.find({userId})
    posts.forEach((post) => {
        post._doc.postId = post._id;
        delete post._doc.__v;
        delete post._doc._id;
      });
    return posts
}

async function getPostByPostId(postId) {
  const post = await Post.findOne({ _id: postId });
  if (post) {
    post._doc.postId = post._doc._id;
    delete post._doc.__v;
    delete post._doc._id;
  }
  return post;
}

async function deletePostByPostId(postId) {
    const post =  await Post.deleteOne({_id : postId})
    return post
}
async function updatePostByPostId(postId , update) {
    const post =  await Post.updateOne({_id : postId} , update)
    return post
}

module.exports = {insertPost ,getAllPostOfUserId , getPostByPostId , deletePostByPostId ,updatePostByPostId}