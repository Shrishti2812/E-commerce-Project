const express=require('express');
const router=express.Router();
const authmiddleware=require("../middleware/authmiddleware")
const {getCart,addToCart,removeFromCart,updateQuantity}=require('../controllers/cartController');
router.get('/',authmiddleware,getCart);
router.post('/add',authmiddleware,addToCart);
router.patch('/update/:productId',authmiddleware,updateQuantity);
router.delete('/remove/:productId',authmiddleware,removeFromCart);
module.exports=router;