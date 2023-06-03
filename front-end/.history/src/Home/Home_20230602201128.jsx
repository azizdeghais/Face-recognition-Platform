import './Home.css';
import { Grid } from '@mui/material';
import gif from "/src/gif1.gif"
function Home() {

    
  return (

    <div>
       <div className='black-background'></div>
    
    <Grid className='video-container' xs={12}>
    <img src={gif} />
    </Grid>
     
  </div>

  )
  
}

export default Home
