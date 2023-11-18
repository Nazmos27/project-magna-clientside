import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosSecure } from '../../CustomHooks/useAxiosSecure';


export default function RegistrationPage() {

  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    photoUrl: ""
  })
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const name = inputs.name
    const email = inputs.email;
    const password = inputs.password;
    const photoUrl = inputs.photoUrl
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log("new user created", newUser);
        updateUserProfile(name, photoUrl)

        const postItem = {
          user : email,
          cartList:[],
          likedPost:[]
        }
        axiosSecure.post('/usersInfo',postItem)
        .then((res)=>{
          console.log(res.data)
          if(res.data.insertedId){
            console.log("successfully created new dataase data");
          }
        })

        .then(()=>{
          console.log("user profie updated");
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Registration Successful!",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => console.log(error))
        navigate(from, { replace: true })
      })
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box

          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}

        >
          <div className='flex flex-col justify-center items-center m-10'>
            <TextField
              id="outlined"
              variant='outlined'
              label="Name"
              onChange={handleChange}
              name='name'
              value={inputs.name}
            />

            <TextField
              id="outlined-photoUrl"
              variant='outlined'
              label="PhotoUrl"
              onChange={handleChange}
              name='photoUrl'
              value={inputs.photoUrl}
            />

            <TextField
              id="outlined-basic"
              variant='outlined'
              label="Email"
              onChange={handleChange}
              name='email'
              value={inputs.email}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              name='password'
              value={inputs.password}
            />
          </div>
          <Button variant='contained' className='bg-blue-500' type='submit'>Log In</Button>

        </Box>
      </form>

    </div>
  );
}