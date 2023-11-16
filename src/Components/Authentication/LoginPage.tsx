import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';


export default function FormPropsTextFields() {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    // const [inputs, setInputs] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // })
    // const handleChange = (e) => {
    //     setInputs((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value
    //     }))
    // }


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        setEmailError(false)
        setPasswordError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }

        if (email && password) {
            console.log(email, password)
            signIn(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Login Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from, { replace: true })
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='flex justify-center items-center gap-10 my-10'>
            {/* <form onSubmit={handleSubmit}>
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
            </form> */}

            <DotLottiePlayer src="https://lottie.host/7729d869-4564-4684-8c03-505016295be8/NGFZSup5kP.json" autoplay loop style={{height:400,width:400}}>
            </DotLottiePlayer>
            {/* <dotlottie-player src="https://lottie.host/7729d869-4564-4684-8c03-505016295be8/NGFZSup5kP.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player> */}

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
    );
}