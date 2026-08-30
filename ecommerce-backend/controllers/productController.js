const Product=require("../models/product");
const getAllProducts=async(req,res)=>{
    try {
        const products = await Product.find();
       return res.status(200).json(products);
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
};
const getProductById=async(req,res)=>{
    const productId=req.params.id;
    try{
        const product = await Product.findOne({ id: productId });
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json(product);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
module.exports={getAllProducts,getProductById};