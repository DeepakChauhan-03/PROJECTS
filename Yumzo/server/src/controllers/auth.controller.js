import userModel from "../models/user.model"
import bcrypt from 'bcryptjs'

const signUp = async(req,res)=>{
    try {
        const {fullName,email,password,mobile,role} = req.body
        const isUseralreadyexist = await userModel.findOne({email});
        if(isUseralreadyexist){
            return res.status(400).json({
                message:"User already exist"
            })
        }
       if(password.length<6){
        return res.status(400).json({
            message:"Password must be atleast 6 character"
        })
       }

       if(mobile.length<10){
         return res.status(400).json({
            message:"Mobile number should be atleast 10 "
        })
       }

       const hashedPassword = await bcrypt.hash(password,10)

       const user = await userModel.create({
        fullName,
        email,
        password:hashedPassword,
        mobile,
        role
       })


    } catch (error) {
        console.log("error in signupcontroller",error)
    }
}