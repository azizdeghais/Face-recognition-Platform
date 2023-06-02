import {useState,useEffect} from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useAuth } from '../Auth/Auth';
import { useNavigate,useLocation } from 'react-router-dom';
function Login() {
    
    const auth=useAuth()
    const navigateTo=useNavigate();
    const location=useLocation();

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    useEffect(() => {
        // Retrieve the stored username from localStorage when the component mounts
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
          auth.login(storedUsername);
          
        }

      }, []);

      useEffect(()=>{
       if(auth.login){
        if(location.pathname==='/login'){
            navigateTo('/home');
        }
       }
      },[auth,location])

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
