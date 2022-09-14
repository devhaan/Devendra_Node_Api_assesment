const { body } = require("express");
const User = require("../model/UserDetails");
module.exports.register = (req, res) => {
  User.count({ mobile: req.body.mobile }, function (err, count) {
    if (count === 0) {
      // then now duplicate present .
      User.count({}, function (err, count) {
        if (err) {
          return res.status(404);
        }
        User.create(
          {
            name: req.body.name,
            user_id: count + 1,
            password: req.body.password,
            email_id: req.body.email_id,
            username: req.body.username,
            gender: req.body.gender,
            mobile: req.body.mobile,
            Profile_visibility: req.body.profileVisibility,
          },
          (err, result) => {
            if (err) return res.status(404);
            else {
              return res.json({ success: "inserted data" });
            }
          }
        );
      });
    } else {
      //if it runs then mobile is already present with other data
      return res.json({
        error: "Already registered try with new mobile number or login",
      });
    }
  });
};
