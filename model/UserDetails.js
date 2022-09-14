const mongoose = require("mongoose");

const UserData = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  user_id: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  Profile_visibility: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model("User", UserData);

module.exports = User;
