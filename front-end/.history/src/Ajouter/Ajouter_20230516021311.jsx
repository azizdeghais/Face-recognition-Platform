import react,{useRef,useEffect,useState} from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

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


    // const [data,setData]=useState({nom:'',prenom:'',numero:'',email:'',image:null,debut:'',fin:'',naissance:''});
    // const [selectedImage, setSelectedImage] = useState(null);
    // useEffect(()=>{

    //     getVideo();
    // },[videoRef])

    // const handleChange = (e) => {
    //     const {name,value}=e.target
    //     setData((prev)=>{
    //       return {...prev, [name]:value}
    //     })
        
    //     console.log(data)
    // }

   

    const handleImageChange= (file,otherData) =>{
        const formData=new FormData();

        formData.append('image',file);
        // formData.append('nom',otherData.nom)
        // formData.append('prenom',otherData.prenom)
        // formData.append('naissance',otherData.naissance)
        // formData.append('debut',otherData.debut)
        // formData.append('numero',otherData.numero)
        // formData.append('fin',otherData.fin)
        // formData.append('email',otherData.email);

        return axios
          .post("http://localhost:3000/upload", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // setData(data.image=formData.image);
        // console.log(formData);

      }
 

    // const [naissance, setNaissance] =useState(dayjs('2023-05-15'));
    // const [debut, setDebut] =useState(dayjs('2023-05-15'));
    // const [fin, setFin] =useState(dayjs('2023-05-15'));

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
   
    
  
   const Snap =(e)=>{
      e.preventDefault();
      setClick(true);
   }
  

   const [hasPhoto,setHasPhoto]=useState(false);
   

    return (
        <form method='post' onSubmit={handleImageChange} encType='multipart/form-data'>

        <Grid container>
         <Box sx={{
            width: 500, 
          }}> 
        <Typography fontSize={32} mb={2}>Veuillez remplir la formulaire</Typography>
 
       <Grid container spacing={4}>
        <Grid xs={6}><input type="text" id="nom" name='nom'  label="Nom"  /></Grid>
        <Grid xs={6}><input type="text" id="prenom" name='prenom'  label="Prénom"  /></Grid>
        <Grid xs={6}><input type="text" id="numero" name='numero' label="Numéro de téléphone"  /></Grid>
        <Grid xs={6}><input type="text" id="email" name='email'  label="E-Mail" /></Grid>
        <Grid xs={6}><input type="text" id="mot-de-passe" name='mot-de-passe'  label="Mot de passe"  /></Grid>
        <Grid xs={6}><input type="text" id="naissance" name='naissance' label="Date de naissance"  /></Grid>
        <Grid xs={6}><input type="text" id="debut" name='debut'  label="Date de debut"  /></Grid>
        <Grid xs={6}><input type="text" id="fin" name='fin'  label="Date de fin"  /></Grid>


       
       </Grid>
       {/* <Grid xs={12}>
            <Typography>Date de naissance:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker  onChange={(newValue) => setNaissance(newValue)} value={naissance} name='naissance'  />
        </LocalizationProvider>
        </Grid>
       <Grid xs={12}>
            <Typography mt={2}>Date du début:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker  onChange={(newValue) =>{ setDebut(newValue);console.log(debut)}} value={debut}  name='debut'  />
        </LocalizationProvider>
        </Grid>

        <Grid xs={12}>
            <Typography mt={2}>Date de fin:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker  onChange={(newValue) => {setFin(newValue) ;console.log(fin)}}  value={fin} name='fin' />
        </LocalizationProvider>
        </Grid> */}
       
        
        <Box>
        <Grid container>
        <Grid xs={6} mt={2}>
            <Typography variant="outlined">
            Choisir un photo de votre PC 
            </Typography>
            <input name='image'  type="file"  onChange={handleImageChange} accept="image/png, image/jpeg,image/jpg" />
            </Grid>

        <Grid xs={6} mt={2}>
            <Button onClick={Snap}  variant="outlined">Prendre un photo à l instant </Button>
            
        </Grid>
        </Grid>
        </Box>
        <Grid mt={2}>
        <Button type="submit" variant="outlined">Submit</Button>


        </Grid>
        </Box>
        

        {/* <Box sx={{width:500}}>
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
        </Box> */}

        </Grid>
        
        </form>
        
      );
}

export default Ajouter;
