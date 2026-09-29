import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './pages/ForgotPassword'
import useGetCurrentUser from './hooks/useGetCurrentUser'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/Home'

export const serverUrl = "http://localhost:8000"

const App = () => {
 
  useGetCurrentUser()
  const {userData} = useSelector(state=>state.user)
  console.log("This is redux ",userData)
  
  return (
    <div>
      <Routes>
        <Route path='/' element={userData?<Home />:<Navigate to={"/signin"} />}/>
        <Route path='/signup' element={!userData?<Signup />:<Navigate to={"/"} />}/>
        <Route path='/signin' element={!userData?<Signin />:<Navigate to={"/"}/>}/>
        <Route path='/forgot-password' element={!userData?<ForgotPassword />:<Navigate to={"/"} />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
