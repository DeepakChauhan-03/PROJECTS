import React from 'react'

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' 
    style={{backgroundColor:bgColor}}>
    <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`} style={{border:`1px solid ${borderColor}`}}>
         <h1 className={`text-3xl font-bold mb-2`} style={{color:primaryColor}}>Yumzo</h1>
         <p>Create your account </p>
    </div>

      
    </div>
  )
}

export default SignUp
