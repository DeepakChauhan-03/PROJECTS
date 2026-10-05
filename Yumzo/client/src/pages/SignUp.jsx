import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa";

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword,setShowPassword] = useState(false);
  const [role,setRole] = useState("user");

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
          <input type="text" className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your full Name" style={{border:`1px solid ${borderColor}`}} />
        </div>

        {/* email */}
        <div mb-4>
          <label htmlFor="email" className='block text-gray-700 font-medium mb-1'
          >E-mail</label>
          <input type="text" className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your e-mail" style={{border:`1px solid ${borderColor}`}} />
        </div>

        {/* mobile */}
        <div mb-4>
          <label htmlFor="mobile" className='block text-gray-700 font-medium mb-1'
          >Mobile</label>
          <input type="text" className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your Mobile no." style={{border:`1px solid ${borderColor}`}} />
        </div>
       
       {/* password */}
       <div mb-4>
          <label htmlFor="password" className='block text-gray-700 font-medium mb-1'
          >Password</label>
          <div className='relative'>
            <input type={`${showPassword?"text":"password"}`} className='w-full rounded-lg px-3 py-2 focus:outline-none
          focus:border-orange-500' placeholder="Enter your password" style={{border:`1px solid ${borderColor}`}} />
         
          <button
          onClick={()=>setShowPassword(prev=>!prev)}
           className='absolute cursor-pointer right-3 top-[14px] text-gray-500'>{!showPassword? 
          <FaRegEye />:<FaRegEyeSlash />}</button>
           </div>
        </div>

        {/* Role */}
        


    </div>    
      
    </div>
  )
}

export default SignUp
