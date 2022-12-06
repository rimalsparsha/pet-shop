const express = require('express');
const admin_router = express.Router();


//import auth
const admin_auth = require('../middleware/admin_auth');

const auth = require('../middleware/auth');


//import controller
const admin_Controller = require('../controllers/admin');


 //login
 admin_router.get('/adminlogin',(req,res)=>{
    res.render('adminlogin');
});


admin_router.post('/adminLogin', admin_Controller.adminLogin);



//logout
admin_router.get('/adminlogout', admin_Controller.adminLogout);



//admin page
admin_router.get('/admin', admin_auth,(req, res,) =>{
    res.render('admin');
});


//fetch user list in admin page
admin_router.get('/userlist', admin_Controller.userlist);




// upload Detail for shop 


const multer = require('multer');
const path = require('path');


admin_router.use(express.static('public'));


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname, '../public/shop'));
    },
    filename:function(req, file, cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null, name);
    }
});

const upload = multer({storage: storage});


admin_router.post('/upload', admin_auth, upload.single('image'), admin_Controller.uploadShop);


admin_router.get('/petshop', auth, admin_Controller.getShop);



module.exports = admin_router;