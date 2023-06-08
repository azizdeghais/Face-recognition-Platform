import {useState,useEffect} from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useAuth } from '../Auth/Auth';
import { useNavigate,useLocation} from 'react-router-dom';
import login from '../../public/login.jpg'
function Login() {
    
    const auth=useAuth()
    const navigateTo=useNavigate();
    const location = useLocation();


    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
          auth.login(storedUsername);

        } else if (location.pathname !== '/login') {
            navigateTo('/login');
          }
      }, [auth,location,navigateTo]);

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(username==='admin' && password==='adminadmin') {
        localStorage.setItem('username', username);
        auth.login(username);
        navigateTo('/liste');
      }

    }
  return (
    <>
    <Grid container>
    <Grid xs={9}>
    <Grid mb={2}>
    <TextField onChange={(e)=>setUsername(e.target.value)} value={username} type='text' name='username'  variant="outlined" />
    </Grid>
    <Grid mb={2}>
    <TextField onChange={(e)=>setPassword(e.target.value)}  type='password' name='password' label="Mot de passe" variant="outlined" />
    </Grid>
    <Button onClick={handleSubmit} variant='outlined'>Submit</Button>
    </Grid>
    <Grid xs={3}>
      <img src={login}  width={500}/>
    </Grid>
    </Grid>
  </>
  )
}

export default Login
