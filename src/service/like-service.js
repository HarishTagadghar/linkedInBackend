const likeDal = require('../dal/like-dal')

  async function insertLike(req, res) {
    try {
      const likeInfo = {
        likeForId: req.body.likeForId,
        userId: req.decodedToken.id,
        status: true
      }
      const isLikeUnique = await likeDal.isUniqueLike(likeInfo.likeForId, likeInfo.userId)
      if (isLikeUnique) {
        await likeDal.createLike(likeInfo)
        res.send({likeForId:likeInfo.likeForId})
      } else {
        res.status(409).send({ likeForId: likeInfo.likeForId })
      }
    } catch (error) {
      res.status(500).send({ likeError: error.message })
    }
  }


  async function getLikeByLikeForId(req, res) {
    const likeForId = req.params.likeForId
    const like = await likeDal.getLikeByLikeForId(likeForId)
    res.send(like)
  }
  
  async function getLikeCountByLikeForId(req, res) {
    const likeForId = req.params.likeForId
    const like = await likeDal.getLikeCountByLikeForId(likeForId)
    res.send(like.toString())
  }

  async function updateLike(req , res) {
    const likeForId = req.params.likeForId;
   
    const update = await likeDal.updateLike(likeForId , req.body)
   res.send({"likeId" : update._id})
  }

module.exports = {insertLike ,getLikeByLikeForId , getLikeCountByLikeForId , updateLike}