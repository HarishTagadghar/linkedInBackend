const mongoose = require('mongoose');

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    userId: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    text: {
      type: String,
    },
    time: { type: Date, 
        default: Date.now }

        
  })
);

module.exports = {Post}
