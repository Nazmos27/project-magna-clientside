import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import useDataFetcher from '../../CustomHooks/useDataFetcher'

const PostsSection = () => {

    const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/allPosts')
    //     .then(res=> res.json())
    //     .then((result)=>{setData(result)})
    // },[])
    // console.log(data.length);

    const [postData] = useDataFetcher()
    console.log("from tanstack",postData.length)
    

  return (
    <div className='my-20'>
    <div>PostsSection</div>
    <div className='flex gap-4 overflow-x-auto  max-w-full  '>
        {postData.map(item => <PostCard data={item}></PostCard>)}
    </div>
    </div>
  )
}

export default PostsSection