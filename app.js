const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cookieParser = require('cookie-parser');





//for bodyParser i.e getting data from body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));







//Database
const connectDB = require('./database/DBconnection');
const DATABASE_URL = process.env.MONGODB;
connectDB(DATABASE_URL);



//Router


//admin login router
const admin_router = require('./routes/admin');
app.use('/',admin_router);


//user register and login router
const sign_in_up_router = require('./routes/sign_in_up');
app.use('/',sign_in_up_router);



//user logout, forgot and change password router
const logout_forgot_change_router = require('./routes/logout_forgot_change');
app.use('/',logout_forgot_change_router);



//user profile get and update
const profile_router = require('./routes/profile');
app.use('/',profile_router);





//ejs
app.set("view engine", "ejs");


//public
const {join} = require('path');
app.use(express.static(join(process.cwd(), "public")));


//port listener
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})