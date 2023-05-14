import * as React from 'react';
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import {Button} from '@mui/material'

const handleCamera=()=>{

}

function Ajouter() {
    return (
         <Box sx={{
            width: 500, 
          }}>  
       <Grid container spacing={4}>
        <Grid xs={6}><TextField id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="Numéro de téléphone" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="E-Mail" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="Mot de passe" variant="outlined" /></Grid>


        <Grid xs={12}>
            <Typography>Date de naissance:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       </Grid>

       <Grid xs={12}>
            <Typography mt={2}>Date du début:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>

        <Grid xs={12}>
            <Typography mt={2}>Date de fin:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       
        
        <Box>
        <Grid container>
        <Grid xs={6} mt={2}>
            <Typography variant="outlined">
            Choisir un photo de votre PC 
            </Typography>
            <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" />
            </Grid>

        <Grid xs={6} mt={2}><Button onClick={handleCamera} variant="outlined">Prendre un photo à l instant </Button></Grid>
        </Grid>
        </Box>
        
        </Box>
          
        
      );
}

export default Ajouter
