const mongoose = require("mongoose");

const PostData = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  video: {
    type: String,
  },
  hash_tag: [{
    type: String,
  }],
  friends_tagged: [{
    type: String,
  }],
  comments: [{
    type: String,
  }],
  Profile_visibility: {
    type: String,
  },
});

const Post = mongoose.model("Post", PostData);

module.exports = Post;
