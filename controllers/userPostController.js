const { body } = require("express");
const Post = require("../model/PostDetails");
module.exports.post = (req, res) => {


  Post.create(
    {
      text: req.body.text,
      user_id: req.body.user_id,
      img: req.body.img,
      video: req.body.video,
      hash_tag: req.body.hash_tag,
      friends_tagged: req.body.friends_tagged,
      comments: req.body.comments,
      Profile_visibility: req.body.profileVisibility,
    },
    (err, result) => {
      if (err) return res.status(404);
      else {
        return res.json({ success: "inserted Post" });
      }
    }
  );
};
