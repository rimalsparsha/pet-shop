const express = require('express');
const profile_router = express.Router();



//controller
const profile_controller = require('../controllers/profile');



 //auth
 const auth = require('../middleware/auth');





//profile
/* profile_router.get('/profile', auth, (req, res) =>{

    res.render('profile');

}) */


profile_router.get('/profile', auth, profile_controller.getphoto);







const multer = require('multer');
const path = require('path');


profile_router.use(express.static('public'));


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname, '../public/profilePic'));
    },
    filename:function(req, file, cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null, name);
    }
});

const upload = multer({storage: storage});



profile_router.post('/profile',auth, upload.single('image'), profile_controller.uploadPic);














//update profile  

// profile_router.get('/profile_update', auth, (req, res) =>{

//     res.render('updateProfile');

// });

profile_router.get('/profile_update', auth, profile_controller.getUserData);

profile_router.post('/profile_update/:id', auth, profile_controller.updateUserData);









//Delete Profile

profile_router.get('/delete/:id', auth, profile_controller.deleteUser);



module.exports = profile_router;