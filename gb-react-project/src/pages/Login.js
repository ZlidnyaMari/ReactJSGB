import { TextField, Button} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import useAuth from '../hooks/AuthProvider';


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/';

    const handalEmail = (e) => {
        setEmail(e.target.value);
    };

    const handalPassword = (e) => {
        setPassword(e.target.value);
    };

    const handalSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await auth.signin({ email, password }, () => {
                navigate(from, { replace: true })
            }); 
        } catch (e) {
            setError(e);
            console.error(e);
        }
    };

    return (
    <div>
        <form onSubmit={handalSubmit}>
            <h1>Войти</h1>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    type ='email'
                    name = 'email'
                    value = {email}
                    variant = "outlined"
                    placeholder = {'Email'}
                    onChange = {handalEmail} />
                <TextField 
                    type ='password'
                    name = 'password'
                    value = {password}
                    variant = "outlined"
                    placeholder = {'Пароль'}
                    onChange = {handalPassword} />    
            </Box>
                {error && <div>{error}</div>}
                <Button
                    variant="contained"
                    type = 'submit'> Войти </Button>
                <br/>
                <br/>    
       
        </form>
    </div>
    )
}

export default Login;