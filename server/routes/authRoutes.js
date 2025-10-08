const express = require("express");
const router = express.Router();
const { login, signup } = require("../controller/authController.js");


router.post("/hello", login);
router.post("/signup", signup);

module.exports = router;