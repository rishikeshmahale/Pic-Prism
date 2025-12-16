const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken.js");
const {
  createPost,
  getAllPosts,
  getMyPosts,
  deletePost,
  searchPosts,
  addToFavourites,
  removeFromFavourites,
  getFavourites,
} = require("../controllers/posController.js");

router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/posts/search", searchPosts);
router.put("/post/addToFavourites/:postId", verifyToken, addToFavourites);
router.put(
  "/post/removeFromFavourites/:postId",
  verifyToken,
  removeFromFavourites
);
router.get("/posts/favourites", verifyToken, getFavourites);

module.exports = router;
