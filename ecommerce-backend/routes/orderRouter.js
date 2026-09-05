const express=require("express");
const router=express.Router();
const { createOrder,getMyOrders,getOrderById } = require("../controllers/orderController");
const authMiddleware=require("../middleware/authMiddleware");
router.post("/create",authMiddleware,createOrder);
router.get("/",authMiddleware,getMyOrders);
router.get("/:id",getOrderById);
module.exports=router;