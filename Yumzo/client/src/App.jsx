import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './pages/ForgotPassword'
import useGetCurrentUser from './hooks/useGetCurrentUser'

export const serverUrl = "http://localhost:8000"

const App = () => {
  useGetCurrentUser()
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
