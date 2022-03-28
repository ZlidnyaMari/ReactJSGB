import { TextField, Button} from "@mui/material";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import firebase from "../services/firebase";
import Box from '@mui/material/Box';

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch {
            setError(error.message);
        }

    };

    return (
    <div>
        <form onSubmit={handalSubmit}>
            <h1>Регистрация</h1>
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
                    type = 'submit'> Зарегистрироваться </Button>
                <br/>
                <br/>    
                <Button 
                    variant="contained" 
                    type = 'submit' ><Link className="linkRegistration" to='/login' >Войти</Link></Button>        
        </form>
    </div>
    )
}

export default Registration;