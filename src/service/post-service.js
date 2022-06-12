const postDal = require("../dal/post-dal");

const post = [
  { name: "harish", email: "harishtg@gmail.com", password: "pass" },
  { name: "nitesh", email: "nitesh@gmail.com", password: "pass" },
];

function getPost(req, res) {
  console.log({ userid: req.decodedToken.id });
  res.send(post);
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
    res.send(result);
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
}

module.exports = { getPost, insertPost };
