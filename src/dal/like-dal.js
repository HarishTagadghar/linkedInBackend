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
async function updateLike (likeInfo) {

}
module.exports = {createLike , getLikeByLikeForId}