import jwt from "jsonwebtoken";
const JWT_SECRET = "cake123";

export const checkAuth = ((req , res , next)=>{
    //fetch the token from the req
    const tokenPassed = req.headers.token;

    const decode = jwt.verify(tokenPassed , JWT_SECRET);

    if( !decode.userId){
        res.status(403).json({
            message : "Invalid Token or not found"
        })
        return ;
    }
    req.userId = decode.userId;
    next();
})

