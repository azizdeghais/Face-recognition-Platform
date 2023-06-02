require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors=require('cors');
const bcrypt = require('bcrypt');
const cron = require('node-cron');
const { MongoClient } = require('mongodb');
const cronSchedule = '41 22 * * *';
const bodyParser = require('body-parser');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        // set dest
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload=multer({storage:storage});
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
mongoose.connect('mongodb+srv://miker:miker@imagegeneratordall-e.arsxo0m.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Define a schema and model for storing image URLs
const imageSchema = new mongoose.Schema({
  url:{type:String},
  nom:{type:String},
  prenom:{type:String},
  numero:{type:String},
  code:{type:String},
  debut:{type:Date},
  fin:{type:Date},
  email:{type:String},
  password:{type:String},
},{collection:'images'});

const Image = mongoose.model('Image', imageSchema);

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
    


    // Save image URL to MongoDB
    const image = new Image({ url: result.secure_url,nom,prenom,numero,code,fin,debut,email,password});
    await image.save();

    // Return the image URL in the response
    res.json({ url: result.secure_url ,nom,prenom,numero,code,fin,debut,email,password});
  } catch (error) {
    console.error('Error uploading image', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

app.get("/users", async (req, res) => {
  try{
   const users= await Image.find()
   res.status(200).json(users)
  } catch (err){
   res.status(500).json(err)
  }

})


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


app.put("/:id", async (req,res)=>{
   
  try {
    const updatedImage = await Image.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
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
