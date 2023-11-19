import {useQuery} from '@tanstack/react-query'
import { axiosSecure } from './useAxiosSecure'
import useAuth from './useAuth'
const useCart = () => {
  //using tanstack query for efficient data fetching
  const {user} = useAuth()
  const {refetch,data: usersData=[]} = useQuery({
    queryKey: ['usersData',user?.email],
    queryFn: async()=>{
        const response = await axiosSecure.get(`/usersInfo?user=${user?.email}`)
        return response.data;
    }
  })
  return [usersData,refetch]
}

export default useCart