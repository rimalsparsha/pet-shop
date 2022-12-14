const express = require('express');
const sign_in_up_router = express.Router();


//import controller
 const sign_in_up_Controller = require('../controllers/sign_in_up');

 const profile_controller = require('../controllers/profile');

 //import model
 const sign_in_up_Model = require('../model/sign_in_up');



 


//auth
 const auth = require('../middleware/auth');





//register
sign_in_up_router.get('/register',(req,res)=>{
    res.render('register');
});

sign_in_up_router.post('/register',sign_in_up_Controller.userRegister);




//login
sign_in_up_router.get('/login',(req,res)=>{
    res.render('login');
});

sign_in_up_router.post('/login',sign_in_up_Controller.userLogin);





//index
/* sign_in_up_router.get('/', auth,(req, res,) =>{
    res.render('index');
});
 */

sign_in_up_router.get('/', auth, profile_controller.getName);





module.exports = sign_in_up_router;
