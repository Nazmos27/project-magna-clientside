import React from 'react'
import { axiosSecure } from '../../CustomHooks/useAxiosSecure'

const SideMenu = () => {

  const data = axiosSecure.get('/usersInfo')
  console.log("userdata",data)

  return (
    <div>SideMenu</div>
  )
}

export default SideMenu