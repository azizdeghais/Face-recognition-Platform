import React from 'react'

function Modifier() {
  return (
    <div>
     


     <form encType='multipart/form-data'>

<Grid container>
 <Box sx={{
    width: 500, 
  }}> 
<Typography fontSize={32} mb={2}>Veuillez remplir la formulaire</Typography>

<Grid container spacing={4}>
<Grid xs={6}><TextField onChange={handleNomChange} name='nom'  label="Nom" variant="outlined" /></Grid>
<Grid xs={6}><TextField onChange={handlePrenomChange} name='prenom'  label="Prénom" variant="outlined" /></Grid>
<Grid xs={6}><TextField onChange={handleNumeroChange} name='numero' label="Numéro de téléphone" variant="outlined" /></Grid>
<Grid xs={6}><TextField onChange={handleEmailChange} name='email'  label="E-Mail" variant="outlined" /></Grid>
<Grid xs={6}><TextField onChange={handlePassChange} type='password' name='password'  label="Mot de passe" variant="outlined" /></Grid>
<Grid xs={6}><TextField onChange={handleNaissanceChange} name='naissance' label="Code d'immatriculation" variant="outlined" /></Grid>
<Grid xs={6} >
<Typography sx={{fontSize:22}}>Date de début</Typography>
<DatePicker 
selected={startTime} 
onChange={handleStartTime}
showTimeSelect
dateFormat="Pp"
/>
</Grid>      
<Grid xs={6} >
<Typography sx={{fontSize:22}}>Date de fin</Typography>
<DatePicker 
selected={endTime} 
onChange={handleEndTime}
showTimeSelect
dateFormat="Pp"
/>
</Grid>   
</Grid>
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
<Button type="submit" onClick={handleFormSubmit} variant="outlined">Submit</Button>
<Button sx={{marginLeft:1}} onClick={()=>{navigateTo("/")}} variant="outlined">Annuler</Button>
</Grid>
</Box>


 <Box sx={{width:500}}>
{click? (
<div className="container">
{imgSrc ? (
 <img src={imgSrc} alt="webcam" />
) : (
 <Webcam height={600} width={600} ref={webcamRef} />
)}
<div className="btn-container">
 {imgSrc ? ( <>
   <Button variant='outlined' onClick={retake}>Retake photo</Button>
   <Button variant='outlined' sx={{marginLeft:1}}   onClick={()=>setClick(false)}>Annuler</Button>
   </>
 ) : (<>
   <Button variant='outlined' onClick={capture}>Capture photo</Button>
   <Button sx={{marginLeft:1}}  variant='outlined' onClick={()=>setClick(false)}>Annuler</Button>
   </>

 )}
</div>
</div>
) : null}
</Box> 

</Grid>

</form>

     
    </div>
  )
}

export default Modifier
