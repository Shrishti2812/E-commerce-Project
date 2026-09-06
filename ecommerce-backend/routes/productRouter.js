const express=require('express');
const router=express.Router();
const Product=require('../models/product');
 
const authMiddleware=require('../middleware/authmiddleware');
const {getAllProducts,getProductById}=require('../controllers/productController');
router.get('/',getAllProducts);
router.get('/:id',getProductById);

module.exports=router;