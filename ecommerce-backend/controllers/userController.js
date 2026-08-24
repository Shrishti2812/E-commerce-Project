 const User=require("../models/user");
 const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
 const registerUser=async (req,res)=>{
   try{
   const {name,email,password}=req.body;
   if(!name||!email||!password){
      return res.status(400).json({message:"All fields are required"});   
   }
   const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(409).json({
    message: "Email already registered"
  });
}
   const hashedPassword=await bcrypt.hash(password, 10);
   const user=await User.create({
      name,email,password:hashedPassword
   });

 return res.status(201).json({user})
 }catch(error){
      return res.status(500).json({message:error.message});
 }};


 const login=async (req,res)=>{
   try{
    const {email,password}=req.body;
    if(!email||!password){
      return res.status(400).json({message:"All fields are required"});
    }
    const user=await User.findOne({email});
    
   if(!user)return res.status(404).json({message:"User not found"});

const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch)return res.status(400).json({message:"Invalid credentials"});

const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
return res.status(200).json({message:"Login successful", token});
   }catch(error){
      return res.status(500).json({message:error.message});
      }
   }
   
 module.exports={registerUser, login};