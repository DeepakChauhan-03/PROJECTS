import React, { useState } from "react";
import signupimg from "../assets/signup.jpg";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import { serverUrl } from "../App";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const primaryColor = "#ff4d2d";
  const bgColor = "#fff9f6";
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [fullName,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [mobile,setMobile] = useState("")

  const handleSignUp = async()=>{
    try {
      const result = await axios.post(`${serverUrl}/api/auth/signup`,{
        fullName,
        email,
        password,
        mobile,
        role
      },{withCredentials:true})
     console.log(result)

    } catch (error) {
      console.log("Error in handlesignup",error)
    }
  }

  //googleAuth
  const handleGoogleAuth = async ()=>{
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      console.log(result)
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
              Create Account
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Full Name</label>

              <input
                type="text"
                onChange={(e)=>setFullname(e.target.value)}
                value={fullName}
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>

              <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                placeholder="Enter email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Mobile</label>

              <input
                type="tel"
                onChange={(e)=>setMobile(e.target.value)}
                value={mobile}
                placeholder="Enter mobile number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block mb-1 font-medium">Password</label>

              <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Role */}

            <div className="mb-6">
              <label className="block mb-2 font-medium">Select Role</label>

              <div className="grid grid-cols-3 gap-3">
                {["user", "owner", "deliveryBoy"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`rounded-lg cursor-pointer py-2 border transition-all capitalize
                    ${
                      role === r
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white hover:bg-orange-50"
                    }`}
                  >
                    {r === "deliveryBoy" ? "Delivery" : r}
                  </button>
                ))}
              </div>
            </div>

            {/* Sign Up Button */}
            <button
             onClick={handleSignUp}
              className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition cursor-pointer"
              style={{ backgroundColor: primaryColor }}
            >
              Sign Up
            </button>

            {/* Google Signup */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 
              rounded-lg py-3 font-medium hover:bg-gray-100 transition cursor-pointer my-3"
            >
              <FcGoogle size={24} />
              <span>Sign up with Google</span>
            </button>

            <p className="text-center mt-5 text-gray-500">
              Already have an account?
              <span
                className="ml-2 font-semibold cursor-pointer "
                style={{ color: primaryColor }}
                onClick={() => navigate("/signin")}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
