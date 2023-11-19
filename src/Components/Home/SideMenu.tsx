import React, { useEffect, useState } from 'react'
import useAuth from '../../CustomHooks/useAuth'
import useCart from '../../CustomHooks/useCart'

const SideMenu = () => {
  const [data,setData] = useState([])
  const {user,loading} = useAuth()
//  console.log(user.email);
  const [usersData,isLoading] = useCart()
  console.log(usersData);
  useEffect(()=>{
    setData(usersData)
  },[usersData])
  console.log(data);

  if(loading && isLoading){
    return <div>Loading...</div>
  }else{
    return (
      <div>
        <div>afa{data && data?.cartList?.length}</div>
        
      </div>
    )
  }
  
  

 
}

export default SideMenu