import react,{useRef,useEffect,useState} from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {FormLabel} from '@mui/material';
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Typography } from '@mui/material';
import {Button} from '@mui/material'
import './Ajouter.css'

function Ajouter() {
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState(new FormData());
    const [file, setFile] = useState(null);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [debut, setDebut] = useState('');
    const [fin, setFin] = useState('');
    const [email, setEmail] = useState('');
    const [naissance, setNaissance] = useState('');
    const [numero, setNumero] = useState('');
    const [startDate, setStartDate] = useState(new Date());



    const handleChange = (e) => {
        const {name,value}=e.target
        setData((prev)=>{
          return {...prev, [name]:value}
        })
    }
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        formData.set('image', selectedFile);
      };
    const handleSubmit = async (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
      
        await axios
          .post("http://localhost:3000/upload", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(function (response) {
            console.log(response);
            navigateTo('/') 
        })
          .catch(function (error) {
            console.log(error);
          });
      };

      const handleNomChange = (event) => {
        const newName = event.target.value;
        setNom(newName);
        formData.set('nom', newName);
      };
      const handlePrenomChange = (event) => {
        const newName = event.target.value;
        setPrenom(newName);
        formData.set('prenom', newName);
      };
      const handleEmailChange = (event) => {
        const newName = event.target.value;
        setEmail(newName);
        formData.set('email', newName);
      };
      const handleNaissanceChange = (event) => {
        const newName = event.target.value;
        setNaissance(newName);
        formData.set('naissance', newName);
      };
      const handleDebutChange = (event) => {
        const newName = event.target.value;
        setDebut(newName);
        formData.set('debut', newName);
      };
      const handleFinChange = (event) => {
        const newName = event.target.value;
        setFin(newName);
        formData.set('fin', newName);
      };
      const handleNumeroChange = (event) => {
        const newName = event.target.value;
        setNumero(newName);
        formData.set('numero', newName);
      };



    
     
 

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
   
    
  
   const [click,setClick]=useState(false);
   const Snap =(e)=>{
      e.preventDefault();
      setClick(true);
   }
  

   const [hasPhoto,setHasPhoto]=useState(false);
   

    return (
        <form method='post' onSubmit={handleSubmit} encType='multipart/form-data'>

        <Grid container>
         <Box sx={{
            width: 500, 
          }}> 
        <Typography fontSize={32} mb={2}>Veuillez remplir la formulaire</Typography>
 
       <Grid container spacing={4}>
        <Grid xs={6}><TextField onChange={handleNomChange} name='nom' id="outlined-basic" label="Nom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handlePrenomChange} name='prenom' id="outlined-basic" label="Prénom" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleNumeroChange} name='numero'id="outlined-basic" label="Numéro de téléphone" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleEmailChange} name='email' id="outlined-basic" label="E-Mail" variant="outlined" /></Grid>
        <Grid xs={6}><TextField  name='mot-de-passe' id="outlined-basic" label="Mot de passe" variant="outlined" /></Grid>
        <Grid xs={6}><TextField onChange={handleNaissanceChange} name='naissance'id="outlined-basic" label="Date de naissance" variant="outlined" /></Grid>
        <Grid xs={6}>
          <FormLabel >Date de debut:</FormLabel>
          <DatePicker selected={startDate} onChange={(date) => {setStartDate(date);console.log(date)}} />
        </Grid>
        <Grid xs={6}>
          <FormLabel >Date du fin</FormLabel>
          <DatePicker selected={startDate} onChange={(date) => {setStartDate(date);console.log(date)}} />
        </Grid>




       
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
