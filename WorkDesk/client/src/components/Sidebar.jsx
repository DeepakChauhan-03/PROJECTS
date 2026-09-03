import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {dummyProfileData} from '../assets/assets'

const Sidebar = () => {
    const {pathname} = useLocation()
    const [username,setUserName] = useState('')
    const [mobileOpen,setMobileOpen] = useState(false)


    useEffect(()=>{
         setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    },[])

    //close mobile sidebar on route change
     useEffect(()=>{
         setMobileOpen(false)
    },[pathname])



  return (
    <>
    
    </>
  )
}

export default Sidebar
