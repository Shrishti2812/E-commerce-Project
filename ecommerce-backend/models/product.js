const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    id:{
        type:Number,required:true,unique:true
    },
    title:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
    brand:{
        type:String 
    },
    category:{  
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    discountPercentage:{
        type:Number 
    },
    rating:{
        type:Number,required:true
    },
    images:{
        type:[String],required:true
    },
    thumbnail:{
        type:String,required:true
    },
    reviews:{
        type:[Object],default:[]
    }
})
const Product=mongoose.model("Product",productSchema);
module.exports=Product;