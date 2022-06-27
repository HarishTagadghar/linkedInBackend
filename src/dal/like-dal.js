const { Like } = require("../models/like-model");

async function createLike(likeInfo) {
    const like = new Like(likeInfo)
    const result = await like.save()
    return result
}

async function getLikeByLikeForId(likeForId) {
  const result = await Like.find({ likeForId: likeForId, status: true });
  result.forEach((result) => {
    result._doc.likeId = result._doc._id;
    delete result._doc._id;
    delete result._doc.__v;
  });
  return result;
}

async function getLikeCountByLikeForId(likeForId) {
  const result = await Like.find({ likeForId: likeForId, status: true }).count();
  return result;
}


async function updateLike (likeId ,likeUpdate) {
  const update = await Like.findOneAndUpdate({likeForId : likeId , status : true} , likeUpdate)

  return update
}

async function isUniqueLike(likeForId,userId) {
  const likesCount = await Like.find({likeForId,userId ,status:true}).count()
  return likesCount == 0
}
module.exports = {createLike , getLikeByLikeForId,getLikeCountByLikeForId , updateLike , isUniqueLike}