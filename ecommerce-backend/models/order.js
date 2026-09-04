const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[{
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },description:{
            type:String,
            required:true},
            quantity:{
                type:Number,
                required:true
            },
            thumbnail:{
                type:String,
                required:true
            },
    }],
       totalItems: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Placed"
    },
    shippingAddress: {
    fullName: String,
    email: String,
    address: String,
    city: String,
    postalCode: String
},
paymentMethod: {
    type: String,
    required: true
}
},{timestamps:true});
const Order=mongoose.model('Order',orderSchema);
module.exports=Order;