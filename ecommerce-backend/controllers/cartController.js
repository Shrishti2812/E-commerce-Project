const Cart=require("../models/cart");
const getCart=async(req,res)=>{
    try{
        const cart=await Cart.findOne({user:req.user}).populate("items.product");
        if(!cart){
            return res.status(404).json({message:"Cart not found"});
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}
const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;

        let cart = await Cart.findOne({ user: req.user });

        if (!cart) {
            cart = new Cart({
                user: req.user,
                items: [{ product: productId, quantity: 1 }]
            });

            await cart.save();
            await cart.populate("items.product");

            return res.status(200).json(cart);
        }

        const existingItem = cart.items.find(
            (item) => item.product.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({
                product: productId,
                quantity: 1
            });
        }

        await cart.save();
        await cart.populate("items.product");

        res.status(200).json(cart);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
const updateQuantity=async(req,res)=>{
    const {productId}=req.params;
    const {quantity}=req.body;

    const cart=await Cart.findOne({user:req.user});
    if(!cart){
        return res.status(404).json({message:"Cart not found"});
    }
    const item=cart.items.find((item)=>item.product.toString()===productId);
    if(item){
        item.quantity=quantity;
        await cart.save();
        await cart.populate("items.product");
        res.status(200).json(cart);
    }else{
        res.status(404).json({message:"Item not found in cart"});
    }
}
const removeFromCart=async(req,res)=>{
try{
    const {productId}=req.params;
    const cart=await Cart.findOne({user:req.user});
    if(!cart){
        return res.status(404).json({message:"Cart not found"});
    }
    cart.items=cart.items.filter((item)=>item.product.toString()!==productId);
    await cart.save();
    await cart.populate("items.product");
    res.status(200).json(cart);
} catch (error) {
    res.status(500).json({message:"Server error"});
}
}
module.exports={getCart, addToCart, updateQuantity, removeFromCart};