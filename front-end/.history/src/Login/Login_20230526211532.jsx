import {useState,useEffect} from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useAuth } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';
function Login() {
    
    const auth=useAuth()
    const navigateTo=useNavigate();

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    useEffect(() => {
        // Retrieve the stored username from localStorage when the component mounts
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
          auth.login(storedUsername);
          navigateTo('/home');
        }
        const handleBeforeUnload = () => {
            // Clear the stored username from localStorage when the user exits the website
            localStorage.removeItem('username');
          };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
      }, []);
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(username=='admin'&&password=='adminadmin') {
        localStorage.setItem('username', username);
        auth.login(username)
        navigateTo('/home')
      }

    }
  return (
    <>
    <Grid mb={2}>
    <TextField onChange={(e)=>setUsername(e.target.value)} value={username} type='text' name='username'  variant="outlined" />
    </Grid>
    <Grid mb={2}>
    <TextField onChange={(e)=>setPassword(e.target.value)}  type='password' name='password' label="Mot de passe" variant="outlined" />
    </Grid>
    <Button onClick={handleSubmit} variant='outlined'>Submit</Button>
  </>
  )
}

export default Login
