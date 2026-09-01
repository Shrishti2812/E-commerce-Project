const Wishlist=require("../models/wishlist");
const getWishlist=async(req,res)=>{
 try{   const userId=req.user;
    const wishlist=await Wishlist.findOne({userId:userId}).populate("products");
    if(!wishlist){
        return res.status(200).json({products:[]});
    }
    res.status(200).json({products:wishlist.products});
}catch(error){
    res.status(500).json({message:"Server error"});
}
}
const addToWishList=async(req,res)=>{
    try{
        const {productId}=req.body;
        const userId=req.user;
        const wishlist=await Wishlist.findOne({userId:userId});
        if(!wishlist){
            const newWishlist=new Wishlist({
                userId:userId,
                products:[productId]
            });
 await newWishlist.save();
 await newWishlist.populate("products");
            return res.status(201).json(newWishlist);
        }
        if(wishlist.products.includes(productId)){
            return res.status(400).json({message:"Product already in wishlist"});
        }
            wishlist.products.push(productId);
            await wishlist.populate("products");
            await wishlist.save();
           return res.status(200).json(wishlist );
        }catch(error){
            res.status(500).json({message:error.message});
        }}

const removeFromWishlist=async(req,res)=>{
    try{const {productId}=req.body;
        const userId=req.user;
  const wishlist=await Wishlist.findOne({userId:userId});
  if(!wishlist){
    return res.status(404).json({message:"Wishlist not found"});
  }
  const productExists=wishlist.products.some((product)=>product.toString()==productId);
  if(!productExists)return res.status(404).json({message:"Product not found in wishlist"});
  wishlist.products=wishlist.products.filter(product=>product.toString()!==productId);
  await wishlist.save();
  await wishlist.populate("products");
  return res.status(200).json({products:wishlist.products});
}catch(error){
    return res.status(500).json({message:error.message});
}
}
module.exports={getWishlist,addToWishList,removeFromWishlist};