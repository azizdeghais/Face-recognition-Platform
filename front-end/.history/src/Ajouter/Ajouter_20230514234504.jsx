import * as React from 'react';
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import {Button} from '@mui/material'
import { Height } from '@mui/icons-material';


function Ajouter() {
    return (
         <Box sx={{
            width: 500,
        
           
          }}>  
       <Grid container spacing={4}>
        <Grid lg={6}><TextField id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid lg={6}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid lg={6}><TextField id="outlined-basic" label="Numéro de téléphone" variant="outlined" /></Grid>
        <Grid lg={6}><TextField id="outlined-basic" label="E-Mail" variant="outlined" /></Grid>
        <Grid lg={6}><TextField id="outlined-basic" label="Mot de passe" variant="outlined" /></Grid>


        <Grid sx={{width:220,height:200}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       </Grid>

       <Grid sx={6}>
            <Typography mt={2}>Date du début:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>

        <Grid sx={6}>
            <Typography mt={2}>Date de fin:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       
          <Box flexGrow={2}>
        <Grid sx={6} mt={2}><Button variant="outlined">Choisir un photo de votre PC</Button></Grid>
        <Typography>ou</Typography>
        <Grid sx={6}><Button variant="outlined">Prendre un photo à l instant </Button></Grid>
        </Box>
         </Box>
          
        
      );
}

export default Ajouter
