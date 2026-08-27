const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const authheader=req.headers.authorization;
    try{
    if (!authheader) {
    return res.status(401).json({ message: "No token provided" });
}
const token=authheader.split(" ")[1];
if (!token) {
    return res.status(401).json({ message: "No token provided" });
}
const decoded=jwt.verify(token,process.env.JWT_SECRET);
req.user=decoded.id;
next();
} catch(error){
    return res.status(401).json({ message: "Invalid token" });
}}
module.exports=authMiddleware;