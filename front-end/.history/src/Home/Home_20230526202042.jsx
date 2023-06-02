import './Home.css'
import { useState } from 'react'
import { FormLabel, TextField } from '@mui/material';
function Home() {
    const [logged,setLogged]=useState(false);
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
           <FormLabel>Test</FormLabel>
           <TextField  type='password' name='password'  label="Mot de passe" variant="outlined" />
         </>
         )}    

    
  </div>

  )
  
}

export default Home
