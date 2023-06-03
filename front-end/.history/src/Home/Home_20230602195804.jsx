import './Home.css';
import { Grid } from '@mui/material';
function Home() {

    
  return (

    <div>
    
    <Grid container spacing={2}>
  <Grid item xs={9}>
    Paragraph
  </Grid>
  <Grid item xs={4}>
    Icon
  </Grid>
</Grid>
     
  </div>

  )
  
}

export default Home
