import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PostSomethingPage = () => {

  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [description, setDescription] = useState("")
  const [descriptionError, setDescriptionError] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [imgUrlError, setImgUrlError] = useState(false)
  const [time,setTime] = useState('')
  useEffect(()=>{
    setTime(moment().format('Do MMMM YYYY'))
  },[])
  

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleError(false)
    setDescriptionError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (description == '') {
      setDescriptionError(true)
    }
    if (!imgUrl || imgUrl === ""){
      setImgUrlError(true)
    }

    if (title && description && imgUrl) {
      console.log(title, description, time)
      const postItem = {
        doner: user?.displayName,
        title: title,
        description: description,
        img: imgUrl,
        time: time,
      }
      axiosSecure.post('/posts',postItem)
      .then((res)=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your item has been posted",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
      })
    }
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 className='text-3xl font-bold m-10'>Login Form</h2>
        <TextField
          label="Image Url"
          onChange={e => setImgUrl(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={imgUrl}
          error={imgUrlError}
        />
        <TextField
          label="Title"
          onChange={e => setTitle(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={title}
          error={titleError}
        />
        <TextField
          label="Description"
          onChange={e => setDescription(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          value={description}
          error={descriptionError}
          fullWidth
          sx={{ mb: 3 }}
        />
        
        <Button variant="outlined" color="secondary" type="submit">Post</Button>
        
      </form>
    </div>
  )
}

export default PostSomethingPage