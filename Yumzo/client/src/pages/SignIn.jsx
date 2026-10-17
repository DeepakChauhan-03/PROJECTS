import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App';

const SignIn = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(false);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  //Api handling
  const handleSignIn = async()=>{
      try {
        const result = await axios.post(`${serverUrl}/api/auth/signin`,{
          email,password},{withCredentials:true});
          console.log(result);

      } catch (error) {
        console.log("Error in HandleSignup ",  error.response?.data || error.message)
      }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' 
    style={{backgroundColor:bgColor}}>
    <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`} style={{border:`1px solid ${borderColor}`}}>
         <h1 className={`text-3xl font-bold mb-2`} style={{color:primaryColor}}>Yumzo</h1>
         <p className='text-gray-600 mb-8' >Sign In to your account to get started with delicious
          food deleveries </p>

        {/* email */}
        <div mb-4>
          <label htmlFor="email" className='block text-gray-700 font-medium mb-1'
          >E-mail</label>
          <input type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your e-mail" style={{border:`1px solid ${borderColor}`}} />
        </div>

   
       {/* password */}
       <div mb-4>
          <label htmlFor="password" className='block text-gray-700 font-medium mb-1'
          >Password</label>
          <div className='relative'>
            <input type={`${showPassword?"text":"password"}`}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your password" style={{border:`1px solid ${borderColor}`}} />
         
          <button
          type='button'
          onClick={()=>setShowPassword(prev=>!prev)}
           className='absolute cursor-pointer right-3 top-[14px] text-gray-500'>{!showPassword? 
          <FaRegEye />:<FaRegEyeSlash />}</button>
           </div>
        </div>

        {/* Forgot password */}
        <div 
        onClick={()=>navigate("/forgot-password")}
        className='text-right mb-3 cursor-pointer text-[#ff4d2d] font-medium'>
          Forgot Password
        </div>

    
           <button
           onClick={handleSignIn}
           className='w-full font-semibold border rounded-lg py-2 transition cursor-pointer duration-200 text-white bg-[#ff4d2d] hover:bg-[#e64323]' >
               Login
             </button>

             {/* //google button */}
             <button className='w-full cursor-pointer mt-4 flex item-center justify-center gap-2 border rounded-lg px-4 py-2 
             transition duration-200 border-gray-400 hover:bg-gray-200'>
                 <FcGoogle size={20} />
                 <span>Sign up with Google</span>
             </button>
             <p className='text-center mt-2'>Don't have an account? <span className='text-[#ff4d2d] cursor-pointer'onClick={()=>navigate('/signup')} >Sign Up</span></p>
    </div>    
      
    </div>
  )
}

export default SignIn
