import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'


export default function FormPropsTextFields() {

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
                    <Button variant='contained' className='bg-blue-500' type='submit'>Log In</Button>

                </Box>
            </form>

        </div>
    );
}