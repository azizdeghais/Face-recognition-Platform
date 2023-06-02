import './Home.css'
import { useState } from 'react'
import {  Grid, TextField } from '@mui/material';
import { useAuth } from '../Auth/Auth';
import {Button} from '@mui/material';
function Home() {
    const auth=useAuth()

    const [logged,setLogged]=useState(false);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(username=='admin'&&password=='adminadmin') setLogged(true);
      auth.login(username)
    }
    
  return (

    <div>
    {logged? (
      <>
      <h1 className='paragraph'> Permettre aux utilisateurs de présenter leur visage devant l'appareil, qui vérifiera leur identité en utilisant une caméra et des algorithmes de reconnaissance faciale.
      autoriser l'accès du système par application mobile. </h1>
      <div className="bg">
      <img src="../../public/home1.jpg" alt="" />
      </div>
      </>
    ):(
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

    
  </div>

  )
  
}

export default Home
