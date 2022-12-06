const express = require('express');
const logout_forgot_change_router = express.Router();


//import controller
 const logout_forgot_change = require('../controllers/logout_forgot_change');

//auth
 const auth = require('../middleware/auth');




 //logout
 logout_forgot_change_router.get('/logout', auth, logout_forgot_change.userLogout);




//forgot password


//reset password


//change password
logout_forgot_change_router.get('/change_password', auth, logout_forgot_change.getPassword);

logout_forgot_change_router.post('/change_password/:id', auth, logout_forgot_change.changePassword);



module.exports = logout_forgot_change_router;