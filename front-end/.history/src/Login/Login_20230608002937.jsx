import {useState,useEffect} from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useAuth } from '../Auth/Auth';
import { useNavigate,useLocation} from 'react-router-dom';
import login from '../../public/login.jpg'
import {Box} from '@mui/material';
import './Login.css';
import { motion } from "framer-motion";

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
    <Box  sx={{
            width: 500, 
          }}> 
    <Grid mb={2}>
    <TextField onChange={(e)=>setUsername(e.target.value)} value={username} type='text' name='username'  variant="outlined" />
    </Grid>
    <Grid mb={2}>
    <TextField onChange={(e)=>setPassword(e.target.value)}  type='password' name='password' label="Mot de passe" variant="outlined" />
    </Grid>
    <Button onClick={handleSubmit} variant='outlined'>Submit</Button>
    </Box>
    <Box sx={{
            width: 500, 
          }}> 
    <Grid container>
    <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 2 }}
                                className="item"
                                transition={{ duration: 3 }}
                                key={login}
                                drag="x" 
                                dragConstraints={{right: 0, left:-1100}} 
                                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }} 
                            >
                                <img src={login} alt="image" />
                            </motion.div>
    </Grid>
    </Box>
    </Grid>
  </>
  )
}

export default Login
