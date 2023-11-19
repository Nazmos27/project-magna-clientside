import React, { useEffect, useState } from 'react'
import useCart from '../../CustomHooks/useCart'
import useAuth from '../../CustomHooks/useAuth'

const Cart = () => {
  const [data,setData] = useState([])
  const {user,loading} = useAuth()
//  console.log(user.email);
  const [usersData,isLoading,refetch] = useCart()
  console.log(usersData);
  useEffect(()=>{
    setData(usersData)
    refetch()
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

export default Cart