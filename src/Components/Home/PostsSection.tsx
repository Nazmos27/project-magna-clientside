import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const PostsSection = () => {

    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allPosts')
        .then(res=> res.json())
        .then((result)=>{setData(result)})
    },[])
    console.log(data.length);

  return (
    <div className='my-20'>
    <div>PostsSection</div>
    <div className='flex gap-4 overflow-x-auto  max-w-full  '>
        {data.map(item => <PostCard data={item}></PostCard>)}
    </div>
    </div>
  )
}

export default PostsSection