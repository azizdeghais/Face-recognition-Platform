import './Home.css';
import { Grid } from '@mui/material';
import gif from "/src/gif1.gif"
function Home() {

    
  return (

    <div>
       <div className='black-background'></div>
    
    <div className='video-container'>
    <img src={gif} />
    </div>
     
  </div>

  )
  
}

export default Home
