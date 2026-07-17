import React, { useState } from 'react'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from "../App";

const ForgotPassword = () => {
  const navigate = useNavigate()

  const [step,setStep] = useState(1)
  const [email,setEmail] = useState("")
  const [otp,setOtp] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const handleSendOtp = async()=>{
    try {
      const result = await axios.post(`${ServerUrl}/api/auth/send-otp`,{email},
        {withCredetials:true}
      )
      console.log(result)
      setStep(2)
    } catch (error) {
      console.log("Error in handleotp",error)
    }
  }

   const handleVerifyOtp = async()=>{
    try {
      const result = await axios.post(`${ServerUrl}/api/auth/verify-otp`,{email,otp},
        {withCredetials:true}
      )
      console.log(result)
      setStep(3)
    } catch (error) {
      console.log("Error in Verifyotp",error)
    }
  } 

   const handleResetPassword = async()=>{
    if(newPassword!=confirmPassword) return null
    try {
      const result = await axios.post(`${ServerUrl}/api/auth/reset-password`,{email,newPassword},
        {withCredetials:true}
      )
      console.log(result)
      navigate("/signin")
    } catch (error) {
      console.log("Error in ResetPassword",error)
    }
  }

  return (
    <div className='flex w-full items-center justify-center min-h-screen p-4
    bg-[#fff9f6]'>
         <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8'>
              <div className='flex items-center gap-4 mb-4'>
                <IoIosArrowRoundBack size={38} 
                onClick={()=>navigate("/signin")}
                className='text-[#ff4d2d] cursor-pointer' />
                <h1 className='text-xl font-bold text-[#ff4d2d] text-center'>Forgot Password</h1>
              </div>
             
             {/* Step 1 */}
              {
                step == 1 
                &&
                <div>
                  {/* Email */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">Email</label>

              <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                placeholder="Enter email"
                className="w-full border-[1px] rounded-lg mb-5 px-4 py-3 outline-none focus:border-orange-500"
              />
               {/* Sign Up Button */}
            <button
             onClick={handleSendOtp}
              className="w-full py-3 rounded-lg bg-[#ff4d2d] text-white font-semibold hover:opacity-90 transition cursor-pointer"
              
            >
              Send OTP
            </button>
            </div>

                </div>
              }

              {/* Step 2 */}
              
              {
                step == 2 
                &&
                <div>
                  {/* Otp */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">OTP</label>

              <input
                type="number"
                onChange={(e)=>setOtp(e.target.value)}
                value={otp}
                placeholder="Enter OTP"
                className="w-full border-[1px] rounded-lg mb-5 px-4 py-3 outline-none focus:border-orange-500"
              />
               {/* Button */}
            <button
             onClick={handleVerifyOtp}
              className="w-full py-3 rounded-lg bg-[#ff4d2d] text-white font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Verify OTP
            </button>
            </div>

                </div>
              }
       {/* Step 3 */}
       
              {
                step == 3 
                &&
                <div>
                  
            <div className="mb-6">
              <label className="block mb-1 font-medium">New Password</label>
              <input
                type="password"
                onChange={(e)=>setNewPassword(e.target.value)}
                value={newPassword}
                placeholder="Enter new password"
                className="w-full border-[1px] rounded-lg mb-5 px-4 py-3 outline-none focus:border-orange-500"
              />

               <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm new password"
                className="w-full border-[1px] rounded-lg mb-5 px-4 py-3 outline-none focus:border-orange-500"
              />
               {/*  Button */}
            <button
             onClick={handleResetPassword}
              className="w-full py-3 rounded-lg bg-[#ff4d2d] text-white font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Reset Password
            </button>
            </div>
                </div>
              }


         </div>
    </div>
  )
}

export default ForgotPassword
