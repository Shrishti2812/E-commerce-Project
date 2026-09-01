require("dotenv").config();
 const dns=require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const cors=require("cors");

const express=require("express");
const app=express();
app.use(cors());
const userRoute=require("./routes/userRouter");
const productRoute=require("./routes/productRouter");
const cartRoute=require("./routes/cartRouter");
const wishlistRoute=require("./routes/wishlistRouter");
const PORT=process.env.PORT||8000;
const connectDb=require("./config/db");
connectDb();
app.use(express.json());
app.use("/user",userRoute);
app.use("/product",productRoute);
app.use("/cart",cartRoute);
app.use("/wishlist",wishlistRoute);
 

app.get('/',(req,res)=>{
    return res.send("Hello");
})
app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)});