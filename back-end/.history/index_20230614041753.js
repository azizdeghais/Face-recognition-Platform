require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors=require('cors');
const bcrypt = require('bcrypt');
const cron = require('node-cron');
const { MongoClient } = require('mongodb');
const cronSchedule = '* 00 23 * *';
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const emailValidator = require('deep-email-validator');


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        // set dest
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload = multer({ storage });
mongoose.set('debug', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
      origin: 'http://localhost:5173', //
      methods: 'GET,POST,DELETE,PUT', // 
      allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
      credentials: true, // Allow sending cookies with requests
    })
  );

// Connect to MongoDB
mongoose.connect('mongodb+srv://hamzamrad:hamza2754651007@cluster0.uadxpsh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


  async function isEmailValid(email) {
    return emailValidator.validate(email)
  }

// Define a schema and model for storing image URLs
const historiqueSchema = new mongoose.Schema({
  nom:{type:String},
  timestamp:{type:Date},
  image_path:{type:String},
});

const imageSchema = new mongoose.Schema({
  image:{type:String,required:true},
  nom:{type:String,required:true},
  prenom:{type:String,required:true},
  numero:{type:String,required:true},
  code:{type:String,required:true},
  debut:{type:Date,required:true},
  fin:{type:Date,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
});

const users = mongoose.model('users',historiqueSchema)

const Image = mongoose.model('Image', imageSchema);


// GET HISTORY DATA
app.get('/history',async(req,res)=>{
  try{
    const historique= await users.find()
    console.log(historique)
    res.status(200).json(historique)
   } catch (err){
    res.status(500).json(err)
   }
})
// LISTE D UTILISATEURS
app.get("/users", async (req, res) => {
  try{
   const users= await Image.find()
   console.log(users)
   res.status(200).json(users)
  } catch (err){
   res.status(500).json(err)
  }

})

// Define an endpoint for uploading images
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const cloudinary = require('cloudinary').v2;

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const result = await cloudinary.uploader.upload(req.file.path);



    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const numero=req.body.numero;
    const code=req.body.code;
    const fin=req.body.fin;
    const debut=req.body.debut;
    const email=req.body.email;
    const password=req.body.password;
    
    // VALIDATE IF EMAIL OR PASSWORD ARE MISSING !
    if (!email || !password){
      return res.status(400).json({
        message: "Email ou mot de passe manquant!."
      })
    }

    // test if email fake or not
    const {valid, reason, validators} = await isEmailValid(email);
    if(!valid) return res.status(500).json({error:'Votre e-mail est faux!'})

    // Save image URL to MongoDB
    const image = new Image({ url: result.secure_url,nom,prenom,numero,code,fin,debut,email,password});
    await image.save();
   
    // Return the image URL in the response
    res.json({ url: result.secure_url,nom,prenom,numero,code,fin,debut,email,password});

    // // Send email
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // e.g., 'Gmail', 'Outlook'
    //   auth: {
    //     user: 'your_email_address',
    //     pass: 'your_email_password',
    //   },
    // });

    // const mailOptions = {
    //   from: 'your_email_address',
    //   to: email,
    //   subject: 'New Image Upload',
    //   text: `An image has been uploaded with the following details:
    //     Nom: ${nom}
    //     Prenom: ${prenom}
    //     Numero: ${numero}
    //     Code: ${code}
    //     Fin: ${fin}
    //     Debut: ${debut}`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email', error);
    //     res.status(500).json({ error: 'Failed to send email' });
    //   } else {
    //     console.log('Email sent:', info.response);
    //     res.json({ url: result.secure_url, nom, prenom, numero, code, fin, debut, email, password });
    //   }
    // });

  } catch (error) {
    console.error('S il vous plaît quelque chose manque du formulaire',error);
    res.status(500).json({ error: 'S il vous plaît quelque chose manque du formulaire' });
  }
});




// DELETE POST 

app.delete('/:id', async (req,res)=>{
   try{
  await Image.findByIdAndDelete(req.params.id)
res.status(200).json("User has been deleted")
   }
   catch(err){
       res.status(500).json(err);
   }


})


app.put("/:id",upload.single('image') ,async (req,res)=>{
   
  try {
    const updatedImage = await Image.findOneAndUpdate(
      { _id: req.params.id },
      {$set:req.body},
      { new: true }
    );
    if (!updatedImage) {
      return res.status(404).json({ error: 'Document not found' });
    }

    res.status(200).json(updatedImage);
  } catch (err) {
    console.log("Error handling image", err);
    res.status(500).json(err);
  }
});
async function deleteDocument(){
  try {
    //Get current date
  const currentDate=new Date();

  console.log('Current Date:', currentDate);
  const documents =await Image.find({ fin: { $lt: currentDate } });
  console.log('Documents to Delete:', documents);

  //DELETION
  const result =await Image.deleteMany({fin:{$lt:currentDate}})
 
  if (result.deletedCount !== undefined) {
    console.log(`${result.deletedCount} documents deleted.`);
  } else {
    console.log('No documents deleted.');
  }
}catch(error){
  console.error('Error:', error);
}
  }


cron.schedule(cronSchedule, () => {
  deleteDocument();
});

// Start the serverMi
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
