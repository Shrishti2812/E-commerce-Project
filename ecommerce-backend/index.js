require("dotenv").config();
 const dns=require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const express=require("express");
const app=express();
const userRoute=require("./routes/userRouter");

const connectDb=require("./config/db");
connectDb();
app.use(express.json());
app.use("/user",userRoute);

app.get('/',(req,res)=>{
    return res.send("Hello");
})
app.listen(8000,()=>{console.log("server running")});