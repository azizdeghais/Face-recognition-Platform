onst express = require('express');
const app=express()
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const multer=require('multer')
const ImageModel=require('./models/ImageModel')
const cors = require('cors')

dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DBConnection Success!")
}).catch((error)=>{
    console.log(error)
})

app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/chef",chefRoute);
app.use("/api/chantier", chantierRoute);
app.use("/api/architecte", architecteRoute);
app.use("/api/services", servicesRoute);


app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running!")
})