let cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({ 
    cloud_name: process.env.C_NAME, 
    api_key: process.env.C_API_KEY, 
    api_secret: process.env.C_API_SECRET 
});



module.exports = cloudinary;