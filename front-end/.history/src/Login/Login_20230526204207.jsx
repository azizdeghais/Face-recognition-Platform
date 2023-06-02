import React from 'react'
import { Grid,TextField,Button } from '@mui/material'
function Login() {
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
