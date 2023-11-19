import React, { useState } from 'react'
import { axiosSecure } from '../../CustomHooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { useDropdown } from '@mui/base'
import { Typography } from '@mui/material'
import useAuth from '../../CustomHooks/useAuth'
import useCart from '../../CustomHooks/useCart'

const SideMenu = () => {
  // const [usersData,setUsersData] = useState([])
  const {user} = useAuth()
 
  const [usersData] = useCart()
  console.log(usersData);

  
  

  return (
    <div>
      <div>afa</div>
      {
        usersData && usersData.map(item => <h1>{item.user}</h1>)
      }
    </div>
  )
}

export default SideMenu