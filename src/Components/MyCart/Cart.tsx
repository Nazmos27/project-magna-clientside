import React, { useEffect, useState } from 'react'
import useCart from '../../CustomHooks/useCart'
import useAuth from '../../CustomHooks/useAuth'
import ItemCard from './ItemCard'
import useDataFetcher from '../../CustomHooks/useDataFetcher'
import { axiosSecure } from '../../CustomHooks/useAxiosSecure'
import { toast } from 'react-toastify'

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

  const [postData] = useDataFetcher()
  const filteredData = postData.filter(item => data?.cartList?.includes(item._id))
  console.log(filteredData);

  


  const handleDelete = (id) => {
    const updatedLiked = [...data?.likedPost]
      const cartListNew = [...data?.cartList]
      const updatedCart = cartListNew.filter(item => item !== id)
      const userMail = user?.email
      const updatedPost = { userMail, updatedCart, updatedLiked }
      console.log(updatedPost);
      axiosSecure.put(`/updateUser/${user?.email}`, updatedPost)
        .then(function (response) {
          console.log(response.data);
          if (response.data.acknowledged) {
            toast.success('Added to cart successfully')
            refetch()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    

  }

  if(loading && isLoading){
    return <div>Loading...</div>
  }else{
    return (
      <div>
        <div>afa{filteredData && filteredData.map(item => <ItemCard handleDelete={handleDelete} data={item}></ItemCard>)}</div>
        
      </div>
    )
  }
  
  

 
}

export default Cart