import {useQuery} from '@tanstack/react-query'
import { axiosSecure } from './useAxiosSecure'
const useDataFetcher = () => {
  //using tanstack query for efficient data fetching
  const {refetch,data: postData=[]} = useQuery({
    queryKey: ['postData'],
    queryFn: async()=>{
        const response = await axiosSecure.get('/allPosts')
        return response.data;
    }
  })
  return [postData,refetch]
}

export default useDataFetcher