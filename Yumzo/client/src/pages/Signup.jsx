import React, { useState } from "react";
import signupimg from "../assets/signup.jpg";

const Signup = () => {
  const primaryColor = "#ff4d2d";
  const bgColor = "#fff9f6";

  const [role, setRole] = useState("user");

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: bgColor }}
    >
      {/* Logo */}
      <div className="px-6 md:px-10 py-5">
        <h1
          className="text-4xl md:text-5xl font-bold"
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
            src={signupimg}
            alt="Signup"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-8">

          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-center">
              Create Account
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Mobile
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block mb-1 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            {/* Role */}

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Select Role
              </label>

              <div className="grid grid-cols-3 gap-3">

                {["user", "owner", "deliveryBoy"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`rounded-lg py-2 border transition-all capitalize
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

            {/* Button */}

            <button
              className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: primaryColor }}
            >
              Sign Up
            </button>

            <p className="text-center mt-5 text-gray-500">
              Already have an account?
              <span
                className="ml-2 font-semibold cursor-pointer"
                style={{ color: primaryColor }}
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