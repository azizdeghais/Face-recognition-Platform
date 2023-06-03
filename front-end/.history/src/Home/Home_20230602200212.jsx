import './Home.css';
import { Grid } from '@mui/material';
import videoBg from "./videoBg.mp4"
function Home() {

    
  return (

    <div>
    
    <Grid container>
    <video src={videoBg} autoPlay loop muted />
    </Grid>
     
  </div>

  )
  
}

export default Home
