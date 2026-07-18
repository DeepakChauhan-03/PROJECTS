import jwt from 'jsonwebtoken'

const isAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(404).json({
                message:"Token not found"
            })
        }
   const decode = jwt.verify(token,process.env.JWT_SECRET)
   if(!decode){
    return res.status(400).json({
        message:"Token not verify"
    })
   }
   req.userId = decode.userId
   next()

    } catch (error) {
        console.log("Error in isAuth",error)
    }
}

export default isAuth