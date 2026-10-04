import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'



//SignUp Controller
export const signUp = async(req,res)=>{
    try {
        const {fullName, email,password,mobile,role} = req.body;
        const user = await userModel.findOne({email});
        if(user){
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
                message:"Mobile number should be 10 digits"
            })
        }
      //password hashing
      const hashedPassword = await bcrypt.hash(password,10);

      //user created
        user = await userModel.create({
            fullname,
            email,
            role,
            mobile,
            password:hashedPassword
        }); 

        //token creation
        const token = await genToken(user._id);
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        });

       return res.status(201).json({
        message:"User created successfully",
        user
       })
 


    } catch (error) {
        console.log("Error in signUp controller");
        return res.status(400).json({
            message:"Error in signUp controller"
        })
    }
}

//SignIn Controller
export const signIn = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User doesnot exist"
            })
        }
      //password matching
      const isMatch = await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res.status(400).json({
            message:"Incorrect Password"
        })
      }
    

        //token creation
        const token = await genToken(user._id);
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        });

       return res.status(201).json({
        message:"User signIn successfully",
        user
       })

    } catch (error) {
        console.log("Error in signIn controller");
        return res.status(400).json({
            message:"Error in signIn controller"
        })
    }
}

//Logout controller
export  const signOut = async(params)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({
            message:"Logout seccessfully"
        })
    } catch (error) {
        console.log("Error in logout conteroller", error);
        return res.status(500).json({
            message:"Error is signout controller"
        });
    }
}




