import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'

const useGetCurrentUser = () => {
    useEffect(()=>{
       const fetchUser = async()=>{
       try {
         const result = await axios.get(`${serverUrl}/api/user/current`,
            {  withCredentials:true}
        )
        console.log(result)
       } catch (error) {
          console.log("Error in getuser",error)
       }

       }
       fetchUser()
    },[])
//   return (
//     <div>
      
//     </div>
  
}

export default useGetCurrentUser
