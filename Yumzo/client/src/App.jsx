import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
      </Routes>
    </div>
  )
}

export default App
