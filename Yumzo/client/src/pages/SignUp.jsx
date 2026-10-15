import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App';

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(false);
  const [role,setRole] = useState("user");

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [mobile,setMobile] = useState("");

  //Api handling
  const handleSignUp = async()=>{
      try {
        const result = await axios.post(`${serverUrl}/api/auth/signup`,{
          fullName,email,password,mobile,role},{withCredentials:true});
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
         <p className='text-gray-600 mb-8' >Create your account to get started with delicious
          food deleveries </p>

        {/* Fullname */}
        <div mb-4>
          <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'
          >Full Name</label>
          <input type="text"
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
          className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your full Name" style={{border:`1px solid ${borderColor}`}} />
        </div>

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

        {/* mobile */}
        <div mb-4>
          <label htmlFor="mobile" className='block text-gray-700 font-medium mb-1'
          >Mobile</label>
          <input type="text"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your Mobile no." style={{border:`1px solid ${borderColor}`}} />
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

        {/* Role */}
        <div className='mb-4'>
          <label htmlFor="role" className='block text-gray-700 font-medium
          mb-1'>Role</label>
          <div className='relative flex gap-2'>
             {["user","owner","deliveryBoy"].map((r)=>(
                <button className='flex-1 border rounded-lg px-3 py-2 text-center
                font-medium transition-colors cursor-pointer'
                onClick={()=>setRole(r)}
                style={
                  role==r?
                  {backgroundColor:primaryColor,color:"white"}
                  : {border:`1px solid ${primaryColor}`, color:primaryColor}
                }
                >{r}</button>
             ))}
          </div>

        </div>
           <button
           onClick={handleSignUp}
           className='w-full font-semibold border rounded-lg py-2 transition cursor-pointer duration-200 text-white bg-[#ff4d2d] hover:bg-[#e64323]' >
               Sign Up
             </button>

             {/* //google button */}
             <button className='w-full cursor-pointer mt-4 flex item-center justify-center gap-2 border rounded-lg px-4 py-2 
             transition duration-200 border-gray-400 hover:bg-gray-200'>
                 <FcGoogle size={20} />
                 <span>Sign up with Google</span>
             </button>
             <p className='text-center mt-2'>Already have an account? <span className='text-[#ff4d2d] cursor-pointer'onClick={()=>navigate('/signin')} >Sign In</span></p>
    </div>    
      
    </div>
  )
}

export default SignUp
