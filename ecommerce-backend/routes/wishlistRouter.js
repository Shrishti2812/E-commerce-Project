const express = require('express');
const router = express.Router();
const {getWishlist,addToWishList,removeFromWishlist}=require("../controllers/wishlistController");
const authMiddleware=require("../middleware/authMiddleware");

router.get("/",authMiddleware,getWishlist);
router.post("/add",authMiddleware,addToWishList);
router.delete("/remove",authMiddleware,removeFromWishlist);
module.exports = router;
