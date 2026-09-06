const express=require('express');
const router=express.Router();
const authMiddleware=require("../middleware/authmiddleware");
const {getCart,addToCart,removeFromCart,updateQuantity}=require('../controllers/cartController');
router.get('/',authMiddleware,getCart);
router.post('/add',authMiddleware,addToCart);
router.patch('/update/:productId',authMiddleware,updateQuantity);
router.delete('/remove/:productId',authMiddleware,removeFromCart);
module.exports=router;