const { Like } = require("../models/like-model");

async function createLike(likeInfo) {
    const like = new Like(likeInfo)
    const result = await like.save()
    return result
}

async function getLikeByLikeForId(likeForId) {
  const result = await Like.find({ likeForId: likeForId });
  // result.forEach((result) => {
  //   result._doc.likeId = result._doc._id;
  //   delete result._doc._id;
  //   delete result._doc.__v;
  // });
  return result;
}

async function getLikeCountByLikeForId(likeForId) {
  const result = await Like.find({ likeForId: likeForId, status: true }).count();
  return result;
}


async function updateLike (likeId ,likeUpdate) {
  const update = await Like.findOneAndUpdate({_id : likeId} , likeUpdate)

  console.log("update like" , update , "id" , likeId , "req.body" , likeUpdate);
  return update
}
module.exports = {createLike , getLikeByLikeForId,getLikeCountByLikeForId , updateLike}