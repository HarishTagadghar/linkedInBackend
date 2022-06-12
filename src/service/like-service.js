const likeDal = require('../dal/like-dal')

async function insertLike(req,res)  {
  try {
    const LikeInfo = {
        likeForId:req.body.likeForId,
        userId:req.decodedToken.id,
        status:true
    }
    const result = await likeDal.createLike(LikeInfo)
    res.send(result)
  } catch (error) {
    res.status(500).send({likeError:error.message})
  }
}

// async function insertLike(req,res)  {
//     try {
//       const LikeInfo = {
//           likeForId:req.body.likeForId,
//           userId:req.decodedToken.id,
//           status:true
//       }
//       const result = await updateLike(LikeInfo)
//       res.send(result)
//     } catch (error) {
//       res.status(500).send({likeError:error.message})
//     }
//   }


  async function getLikeByLikeForId(req, res) {
    const likeForId = req.params.likeForId
    console.log("getLikeByLikeForId", likeForId);
    const like = await likeDal.getLikeByLikeForId(likeForId)
    res.send(like)
  }
  
  

module.exports = {insertLike ,getLikeByLikeForId}