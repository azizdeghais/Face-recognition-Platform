import react,{useRef} from 'react';
import Webcam from 'react-webcam';

import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import {Button} from '@mui/material'



function Ajouter() {


    const webcamRef = useRef(null);
  
    const handleCapture = () => {
      const video = webcamRef.current.video;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas dimensions to match the video stream
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw the current video frame onto the canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Access the image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // Manipulate the image data or perform any desired processing
      
      // Render the modified image data back onto the canvas
      ctx.putImageData(imageData, 0, 0);
      
      // Use the canvas or image data as needed
    };


    return (
         <Box sx={{
            width: 500, 
          }}>  
       <Grid container spacing={4}>
        <Grid xs={6}><TextField id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="Numéro de téléphone" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="E-Mail" variant="outlined" /></Grid>
        <Grid xs={6}><TextField id="outlined-basic" label="Mot de passe" variant="outlined" /></Grid>


        <Grid xs={12}>
            <Typography>Date de naissance:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       </Grid>

       <Grid xs={12}>
            <Typography mt={2}>Date du début:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>

        <Grid xs={12}>
            <Typography mt={2}>Date de fin:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker />
        </LocalizationProvider>
        </Grid>
       
        
        <Box>
        <Grid container>
        <Grid xs={6} mt={2}>
            <Typography variant="outlined">
            Choisir un photo de votre PC 
            </Typography>
            <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" />
            </Grid>

        <Grid xs={6} mt={2}><Button onClick={handleCapture} variant="outlined">Prendre un photo à l instant </Button></Grid>
        </Grid>
        </Box>
        

        <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          mirrored={true} // Adjust this based on your requirements
        />
        <canvas ref={canvasRef}></canvas>
      </div>

        </Box>
          
        
      );
}

export default Ajouter
