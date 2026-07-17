import userModel from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import genToken from "../utils/token.js";
import { sendOtpMail } from "../utils/mail.js";

export const signUp = async(req,res)=>{
    try {
        const {fullName,email,password,mobile,role} = req.body

        let isUseralreadyexist = await userModel.findOne({email});
        if(isUseralreadyexist){
            return res.status(400).json({
                message:"User already exist"
            })
        }
       if(password.length<5){
        return res.status(400).json({
            message:"Password must be atleast 6 character"
        })
       }

       if(mobile.length !== 10){
         return res.status(400).json({
            message:"Mobile number should be atleast 10 digit"
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

       const token = await genToken(user._id);
       res.cookie("token",token,{
        secure:false,
        sameSite:"strict",
        maxAge:2*24*60*60*1000,
        httpOnly:true
       })

       return res.status(201).json({
        message:"User created successfully"
       })


    } catch (error) {
        console.log("error in signupcontroller",error)
    }
}

//Login controller

export const signIn = async(req,res) => {
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"User doesn't exist"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(404).json({
                message:"Invalid credentials"
            })
        }

      const token = await genToken(user._id);
       res.cookie("token",token,{
        secure:false,
        sameSite:"strict",
        maxAge:2*24*60*60*1000,
        httpOnly:true
       })

       return res.status(200).json({
        message:"User login successfully"
       })


        

    } catch (error) {
        console.log("error in login Controller",error)
    }
}

//Logout controller
export const signOut = async(req,res)=>{
   try {
      res.clearCookie("token")
      return res.status(200).json({
        message:"Logout successfully"
      })
   } catch (error) {
     console.log("Error in logout controller",error)
   }
}

//otp on email

export const sendOtp = async (req,res)=>{
    try {
        const {email} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"User does not exist"
            })
        }
     //generate otp
     const otp = Math.floor(1000+ Math.random() * 9000).toString()
     user.resetOtp = otp;
     user.otpExpires = Date.now()+5*60*1000  //5 minute
     user.isOtpVerified = false
     await user.save();

     sendOtpMail(email,otp) //nodemailer function

     return res.status(200).json({
        message:"OTP sent successfully"
     })


    } catch (error) {
        console.log("Error in top controller",error)
    }
}

//verify OTP
export const verifyOtp = async (req,res)=>{
    try {
        const {email,otp} = req.body;
        const user = await userModel.findOne({email})
        if(!user || user.resetOtp!=otp || user.otpExpires<Date.now()){
            return res.status(400).json({
                message:"Inavlid otp"
            })
        }
        user.isOtpVerified = true;
        user.resetOtp = undefined;
        user.otpExpires = undefined;
        await user.save();
        return res.status(200).json({
            message:"OTP verified successfully"
        })
        
    } catch (error) {
        console.log("Error in verifyotp controller",error)
    }
}

export const resetPassword = async (req,res)=>{
    try {
        const {email,newPassword} = req.body;
          const user = await userModel.findOne({email})
        if(!user || !user.isOtpVerified){
            return res.status(400).json({
                message:"OTP verification is required"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        user.password = hashedPassword;
        user.isOtpVerified = false;
        await user.save();
        return res.status(200).json({
            message:"Password reset successfully"
        })


    } catch (error) {
        console.log("Error in resetPassword Controller",error)
    }
}