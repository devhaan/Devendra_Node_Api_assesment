const express = require("express");
const upload = require("multer")();

const router = express.Router();

const userPostController = require("../controllers/userPostController");
const userRegistratorController = require("../controllers/userRegistratorController");

router.post(
  "/userregistration",
  upload.any(),
  userRegistratorController.register
);
router.post("/userpost", upload.any(), userPostController.post);
module.exports = router;
