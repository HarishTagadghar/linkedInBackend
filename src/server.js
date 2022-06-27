const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const auth = require("./routers/auth-router");
const post = require("./routers/post-router");
const like = require("./routers/like-router");
const friend = require("./routers/friend-router");
const feeds = require("./routers/feeds-router");
const trends = require("./routers/trends-router");
const requestFriend = require("./routers/requestFriend-router");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())
const mongoUrl =
  "mongodb+srv://Harish-admin:harish@cluster0.qxhqz.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("error with connection");
  });

app.get("/", function (req, res) {
  res.send({
    version:"1.0.0"
  });
});



app.use("/auth", auth);
app.use("/post", post);
app.use("/like", like);
app.use("/friend", friend);
app.use("/feeds", feeds);
app.use("/trends", trends);
app.use("/requestFriend", requestFriend);



app.listen(3000, () => {
  console.log("application started on 3000 ");
});
