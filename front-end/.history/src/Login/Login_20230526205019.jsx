import {useState} from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useAuth } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';
function Login() {
    const auth=useAuth()
    const navigateTo=useNavigate();

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(username=='admin'&&password=='adminadmin') {
      auth.login(username)
      navigateTo('/')
      }

    }
  return (
    <>
    <Grid mb={2}>
    <TextField onChange={(e)=>setUsername(e.target.value)}  type='text' name='username' label="Nom d utilisateur" variant="outlined" />
    </Grid>
    <Grid mb={2}>
    <TextField onChange={(e)=>setPassword(e.target.value)}  type='password' name='password' label="Mot de passe" variant="outlined" />
    </Grid>
    <Button onClick={handleSubmit} variant='outlined'>Submit</Button>
  </>
  )
}

export default Login
