import React from 'react'
import { Navigate, Route, Routes,} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LoginLanding from './pages/LoginLanding'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Attendence from './pages/Attendence'
import Leave from './pages/Leave'
import PaySlips from './pages/PaySlips'
import { Settings } from 'lucide-react'
import PrintPayslips from './pages/PrintPayslips'

const App = () => {
  return (
  <>
     <Toaster />
      <Routes>

        <Route path='/login' element={<LoginLanding />} />

        <Route element={<Layout/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/employees' element={<Employees />} />
            <Route path='/attendence' element={<Attendence />} />
            <Route path='/leave' element={<Leave />}/>
            <Route path='/payslips' element={<PaySlips/>}/>
            <Route path='/Settings' element={<Settings/>}/>
        </Route>
         
         <Route path='/print/payslips/:id' element={<PrintPayslips/>} />

         <Route path='*' element={<Navigate to={"/dashboard"}  replace/>} />

      </Routes>
    </>
  )
}

export default App
