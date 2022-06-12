const post = [
  { name: "harish", email: "harishtg@gmail.com", password: "pass" },
  { name: "nitesh", email: "nitesh@gmail.com", password: "pass" },
];

function getPost(req, res) {
  console.log({ userid: req.decodedToken.id });
  res.send(post);
}




module.exports = {getPost}