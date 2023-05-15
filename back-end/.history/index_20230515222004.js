require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
  url: String,
});

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

    // Save image URL to MongoDB
    const image = new Image({ url: result.secure_url });
    await image.save();

    // Return the image URL in the response
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Error uploading image', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});