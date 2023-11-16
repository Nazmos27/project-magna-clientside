import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import moment from 'moment';
import { AuthContext } from '../../Providers/AuthProvider';

const PostSomethingPage = () => {

  const {user} = useContext(AuthContext)
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [description, setDescription] = useState("")
  const [descriptionError, setDescriptionError] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [imgUrlError, setImgUrlError] = useState(false)
  const [time,setTime] = useState('')

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
      setTime(moment().format('Do MMMM YYYY'))
      console.log(title, description,imgUrl)
      const postItem = {
        doner: user?.displayName,
        title: title,
        description: description,
        image_url: imgUrl,
        time: time,
      }
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