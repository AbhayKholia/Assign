import jwt from "jsonwebtoken"
import UserModel from "../models/user.js"


const isLogin = async (req , res,next)=>{
    try {
const token = req.cookies.token;
        if (!token){
            res.status(401).json({
                message:"Unauthorized : No token Provided"
            })
        }
        const decoded = jwt.verify(token , process.env.JWT_SECRETE )
        const user = await UserModel.findById(decoded.userId)

        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }

        if(user.role !== 'admin'){
            return res.status(403).json({message:"unauthorized: user is not an admin"})
        }
        req.user= user
        next();

    } catch (error) {
                console.log(error)

    }
}



export {isLogin}