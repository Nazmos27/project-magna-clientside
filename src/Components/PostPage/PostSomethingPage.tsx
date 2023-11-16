import { Button } from '@mui/base'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PostSomethingPage = () => {

  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
                <h2 className='text-3xl font-bold m-10'>Login Form</h2>
                <TextField
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={email}
                    error={emailError}
                />
                <TextField
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{ mb: 3 }}
                />
                <p className='text-sm mb-3'>Need an account? <Link to="/registration" className='text-blue-500 underline'>Register here</Link></p>
                <Button variant="outlined" color="secondary" type="submit">Login</Button>
            </form>
    </div>
  )
}

export default PostSomethingPage