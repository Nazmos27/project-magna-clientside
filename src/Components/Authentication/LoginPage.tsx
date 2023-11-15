import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function FormPropsTextFields() {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
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
        const email = inputs.email;
        const password = inputs.password;
        signIn(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Login Successful!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from,{replace:true})
        })
        .catch(error => console.log(error))
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
                    <Link to="/registration">Registration</Link>
                    <Button variant='contained' className='bg-blue-500' type='submit'>Log In</Button>

                </Box>
            </form>

        </div>
    );
}