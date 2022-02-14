require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_kEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// cloudinary.api.create_upload_preset(
//     { name: "my_preset", 
//       unsigned: true, 
//       categorization: "google_tagging,google_video_tagging",
//       auto_tagging: 0.75,
//       folder: "new-products" },
//     function(error, result){console.log(result);});

module.exports = { cloudinary };
