import './Home.css';
import { Grid } from '@mui/material';
import gif from "/src/gif1.gif"
function Home() {

    
  return (

    <div style={{backgroundColor:"#00000"}}>
    
    <Grid xs={12}>
    <img src={gif} />
    </Grid>
     
  </div>

  )
  
}

export default Home
