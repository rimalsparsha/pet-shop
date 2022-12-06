const sign_in_up_Model = require('../model/sign_in_up');
const jwt = require('jsonwebtoken');




const admin_auth = async (req, res, next) =>{

    try {

        const token = req.cookies.jwt;
            const verifyuser = jwt.verify(token,process.env.SECRET_KEY);
            const user = await sign_in_up_Model.findOne({_id:verifyuser._id});
            req.user = verifyuser.id;
            req.token = token;

        next();

    }
    catch (error) {
        
        res.render('adminlogin',
        {
            message: "Login at first!"
        });


    }

}

module.exports = admin_auth;