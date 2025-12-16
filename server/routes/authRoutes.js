const express = require("express");
const router = express.Router();
const { login, signup, refresh, switchProfile } = require("../controllers/authController.js");
const { verifyToken } = require("../middlewares/verifyToken.js");


router.post("/login", login);
router.post("/signup", signup);
router.get("/refresh", refresh);
router.get("/switch", verifyToken, switchProfile);

module.exports = router;