import * as React from 'react';
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';



function Ajouter() {
    return (
         <Box sx={{ flexGrow: 1 }}>  
       <Grid container spacing={4}>
        <Grid md={12}><TextField id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid md={12}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid md={12}><TextField id="outlined-basic" label="Numéro de téléphone" variant="outlined" /></Grid>
        <Grid md={12}><TextField id="outlined-basic" label="E-Mail" variant="outlined" /></Grid>
        <Grid md={12}><TextField id="outlined-basic" label="Mot de passe" variant="outlined" /></Grid>


        <Grid md={12}>
            <Typography>Date de naissance:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       </Grid>

       <Grid md={12}>
            <Typography mt={2}>Date du début:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>

        <Grid md={12}>
            <Typography mt={2}>Date de fin:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       
          
         </Box>
          
        
      );
}

export default Ajouter
