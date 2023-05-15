import react,{useRef,useEffect,useState} from 'react';
import axios from 'axios';
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import {Button} from '@mui/material'
import './Ajouter.css'

function Ajouter() {

    const handleChange = (e) => {
        const {name,value}=e.target
        setData((prev)=>{
          return {...prev, [name]:value}
        })
    const [data,setData]=useState({nom:'',prenom:'',numero:'',naissance:'',fin:'',debut:'',email:'',url:''})
    const videoRef=useRef(null);
    const photoRef=useRef(null);
    const getVideo=()=>{
        navigator.mediaDevices.getUserMedia({video:{width:1920,heigt:1080}}).
        then(stream =>{
            let video=videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const takePhoto=()=>{
        const width=414;
        const height=width/ (16/9);

        let video=videoRef.current;
        let photo=photoRef.current;
        photo.width = width;
        photo.height = height;

        let ctx=photo.getContext('2d');
        ctx.drawImage(video, 0,0,width,height);
        setHasPhoto(true);
    }
    useEffect(()=>{
        getVideo();
    },[videoRef])
    
  
   const [click,setClick]=useState(false);
   const Snap =(e)=>{
      e.preventDefault();
      setClick(true);
   }
  

   const [hasPhoto,setHasPhoto]=useState(false);
   

    return (
        <Grid container>
         <Box sx={{
            width: 500, 
          }}> 
        <Typography fontSize={32} mb={2}>Veuillez remplir la formulaire</Typography>
 
       <Grid container spacing={4}>
        <Grid xs={6}><TextField onChange={handleChange} name='nom' id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleChange}  name='prenom' id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleChange}  name='numero'id="outlined-basic" label="Numéro de téléphone" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleChange}  name='email' id="outlined-basic" label="E-Mail" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleChange} name='mot-de-passe' id="outlined-basic" label="Mot de passe" variant="outlined" /></Grid>


        <Grid xs={12}>
            <Typography>Date de naissance:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker onChange={(e)=>{setData(data.naissance=e.target.value)}} name='naissance' value={value} />
        </LocalizationProvider>
        </Grid>
       </Grid>

       <Grid xs={12}>
            <Typography mt={2}>Date du début:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker onChange={(e)=>{setData(data.debut=e.target.value)}} name='debut' value={value} />
        </LocalizationProvider>
        </Grid>

        <Grid xs={12}>
            <Typography mt={2}>Date de fin:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker onChange={(e)=>{setData(data.fin=e.target.value)}} name='fin' value={value} />
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

        <Grid xs={6} mt={2}>
            <Button onClick={Snap}  variant="outlined">Prendre un photo à l instant </Button>
            
        </Grid>
        </Grid>
        </Box>
        </Box>

        <Box sx={{width:500}}>
        {click? (
        <div className='App'>
        <div className='camera'>
            <video ref={videoRef}></video>
            <button onClick={takePhoto}>SNAP!</button>
        </div>
        <div className={'result' + (hasPhoto ? 'hasPhoto':'')}>
            <canvas ref={photoRef}></canvas>
            <button>CLOSE!</button>
        </div>
        </div>
        ) : null}
        </Box>
        </Grid>
          
        
      );
}

export default Ajouter;
