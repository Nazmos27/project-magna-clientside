import {useQuery} from '@tanstack/react-query'
import { axiosSecure } from './useAxiosSecure'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
const useCart = () => {
  //using tanstack query for efficient data fetching
  const {user} = useContext(AuthContext)
  console.log(user?.email)
  const {refetch,data: usersData=[],isLoading} = useQuery({
    queryKey: ['usersData',user?.email],
    queryFn: async()=>{
        const response = await axiosSecure.get(`/usersInfo?user=${user?.email}`)
        return response.data;
    }
  })
  return [usersData,refetch,isLoading]
}

export default useCart