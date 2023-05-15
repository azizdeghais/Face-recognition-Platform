import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';



function Ajouter() {
    return (
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={4}>
        <Grid xs={8}><TextField id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid xs={8}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid xs={8}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid xs={8}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
       </Grid>
          
        </Box>
          
        
      );
}

export default Ajouter
