const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken.js");
const { createPost, getAllPosts, getMyPosts } = require("../controllers/posController.js");


router.post("/post/create", verifyToken, createPost);
router.get("/posts/getAll", getAllPosts);
router.get("/posts/myPosts", verifyToken, getMyPosts);


module.exports = router;