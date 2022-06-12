const express = require("express");
const app = express();
const mongoose = require("mongoose");

const auth = require("./routers/auth-router");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

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

app.listen(3000, () => {
  console.log("application started on 3000 ");
});
