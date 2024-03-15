const multer = require('multer');
const imageModel = require('../models/image.js');
const User = require('../models/user.js');

 /**
      * Accept a single file with the name testImage.
      *  The single file will be stored in req.file
 */
async function uploadImage(req, res) {

    const upload = multer().single('testImage'); 
    
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error uploading image.');
        }

    //store image in monogo db
        const newImage = new imageModel({
            name: req.body.name,
            image: {
                data: req.file.filename, 
                contentType: 'image/png'
            },
            User
        });

        newImage.save()
            .then(() => res.send('Image successfully uploaded'))
            .catch((err) => {
                console.log(err);
                res.status(500).send('Error saving image data to database.');
            });

    });
} 


// async function getImage(req, res) {
//     try {
//       //const idEmployee = req.params.idEmployee;
//       const image = await imageModel.findOne({ _id: objectId });
  
//       if (!image || !image.data) {
//         return res.status(404).send('Profile picture not found');
//       }
  
//       res.set('Content-Type', 'image/jpeg'); // Set appropriate content type
//       res.send(Buffer.from(image.data, 'base64')); // Send image data as buffer
//     } catch (error) {
//       console.error('Error getting profile picture:', error);
//       res.status(500).send('Error getting profile picture');
//     }
//   };




// exports.getUserImages = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming you have authentication middleware setting req.user
//     const user = await User.findById(userId).populate('images'); // Assuming 'images' is the name of the reference field in the User schema
//     res.json(user.images); // Assuming you want to send back user's images
//   } catch (error) {
//     console.error('Error fetching user images:', error);
//     res.status(500).send('Error fetching user images');
//   }
// };


module.exports = {
    uploadImage,
    
    
};