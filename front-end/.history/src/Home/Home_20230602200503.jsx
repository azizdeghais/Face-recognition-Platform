import './Home.css';
import { Grid } from '@mui/material';
import videoBg from "../../public/videoBg.mp4"
function Home() {

    
  return (

    <div>
    
    <Grid container sx={12}>
    <video src='https://gifdb.com/gif/ai-computer-face-scanning-x07xsyhmvz23yzrc.html?embed=true' autoPlay loop muted />
    </Grid>
     
  </div>

  )
  
}

export default Home
