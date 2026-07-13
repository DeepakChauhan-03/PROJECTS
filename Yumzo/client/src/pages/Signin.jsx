import React, { useState } from "react";
import signupimg from "../assets/signup.jpg";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import { serverUrl } from "../App";

const Signin = () => {
  const primaryColor = "#ff4d2d";
  const bgColor = "#fff9f6";
  const navigate = useNavigate();

  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const handleSignIn = async()=>{
      if (!email || !password) {
    alert("Please fill all fields");
    return;
  }
    try {
      const result = await axios.post(`${serverUrl}/api/auth/signin`,{
        email,
        password,
      },{withCredentials:true})
     console.log(result)

    } catch (error) {
      console.log("Error in Login",error)
    }
  }


  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: bgColor }}>
      {/* Logo */}
      <div className="px-6 md:px-10 py-3">
        <h1
          className="text-4xl md:text-5xl font-bold "
          style={{ color: primaryColor }}
        >
          Yumzo
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-90px)]">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/1200x/f2/8f/cc/f28fcc4e0b34bab096d0df3d528a23a4.jpg"
            alt="Signup"
            className="h-full w-full object-cover rounded-2xl px-6"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Login Account
            </h2>


            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>

              <input
                type="email"
                required
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                placeholder="Enter email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>


            {/* Password */}
            <div className="mb-3">
              <label className="block mb-1 font-medium">Password</label>

              <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                required
                value={password}
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>
            {/* Forgot Password */}
            <div className="pb-3 text-right font-semibold" onClick={()=>navigate("/forgot-password")}>
              <span className="cursor-pointer" style={{color:primaryColor}}>Forogt Password?</span>
            </div>

            {/* Sign Up Button */}
            <button
             onClick={handleSignIn}
              className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition cursor-pointer"
              style={{ backgroundColor: primaryColor }}
            >
              Login
            </button>

            {/* Google Signup */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 
              rounded-lg py-3 font-medium hover:bg-gray-100 transition cursor-pointer my-3"
            >
              <FcGoogle size={24} />
              <span>Sign in with Google</span>
            </button>

            <p className="text-center mt-5 text-gray-500">
              Don't have an account?
              <span
                className="ml-2 font-semibold cursor-pointer "
                style={{ color: primaryColor }}
                onClick={() => navigate("/signup")}
              >
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
