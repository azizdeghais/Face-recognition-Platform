import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';



function Ajouter() {
    return (
       <>
       <Grid container spacing={2}>
  <Grid xs={2}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
  <Grid xs={2}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
  <Grid xs={2}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
  <Grid xs={2}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>

 </Grid>
          
        </>
          
        
      );
}

export default Ajouter
