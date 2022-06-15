const postDal = require("../dal/post-dal");
const friendsService = require ("../service/friend-service")
const feedsService = require("../service/feeds-service")

async function getPostByUserId(req, res) {
  const userid = req.query.userId;
  console.log("getPostForThisUserId", userid);
  const posts = await postDal.getAllPostOfUserId(userid);
 
  res.send(posts);
}
async function getPostByPostId(req, res) {
  const postId = req.params.postId
  console.log("getPostForThisPostId", postId);
  const post = await postDal.getPostByPostId(postId)
  res.send(post)
}

async function deletePostByPostId(req, res) {
  const postId = req.params.postId
  console.log("getPostForThisPostId", postId);
  const post = await postDal.deletePostByPostId(postId)
  res.send({"postId": postId })
}

async function updatePostByPostId(req, res) {
  const postId = req.params.postId
  console.log("getPostForThisPostId", postId);
  const post = await postDal.updatePostByPostId(postId , req.body)
  res.send({"postId": postId })
}

async function insertPost(req, res) {
  try {
    console.log("insert post", req.body);

    const post = {
      userId: req.decodedToken.id,
      imageUrl: req.body.imageUrl,
      text: req.body.text,
    };
    
    const result = await postDal.insertPost(post);
    insertFeedsInBackground(post.userId , result._id)
    res.send(result);

  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
}

async function insertFeedsInBackground ( userId , postId) {
    const friends = await friendsService._getAllFriendsOfUserId(userId)
    friends.forEach((friend) => {
      feedsService.insertFeed({userId:friend.friendWithUserId , postId})
    })
}
module.exports = { getPostByUserId, insertPost , getPostByPostId , deletePostByPostId , updatePostByPostId };
