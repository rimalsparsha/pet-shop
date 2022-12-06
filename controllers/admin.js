const sign_in_up_Model = require('../model/sign_in_up');
const shop_Model = require('../model/shop');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


class admin_Controller{


//Admin Login Function start
static adminLogin = async (req, res) =>{

    try {

        //getting the data
        const {email, password} = req.body

        if(email && password){

         //check the register email
        const user = await sign_in_up_Model.findOne({email:email})
        if(user != null){

        // check the password match
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){

            if(user.is_admin === 1){

          //generate token
          const token = jwt.sign({email: user.email, id: user._id}, process.env.SECRET_KEY);
          //res.json({user: user, token: token});

                  //store in cookie
                res.cookie("jwt", token, {
                  expires: new Date(Date.now() + 300000000),
                  httpOnly: true,
                  //secure: true
                  });


            res.redirect('\admin')

            }
            else{

                res.render('adminlogin',
                {
                    message: "Email or Password is incorrect!"
                })
                
            }
        }
        else{

            res.render('adminlogin',
            {
                message: "Email or Password is incorrect!"
            })

        }

        }
        else{

            res.render('adminlogin',
            {
                message: "Email isnot registered!"
            })

        }
        }
        else{

            res.render('adminlogin',
            {
                message: "All field are should be required!"
            })
        }

}
            catch (error)
            {
                console.log(error);
            }


}


//Logout Function Start
static adminLogout = async (req, res) =>{

        try {
    
            req.token = [];
            res.clearCookie("jwt");
             res.redirect('/adminlogin')
    
        }
        catch(error) {
          
          console.log(error);
    
        }
    
    }
    
    //Logout Function Stop



     // Post shop name ,image and price upload Start
     static uploadShop = async (req,res) =>{

         try
         {
             const shop = new shop_Model({
 
                petname: req.body.petname,
                price: req.body.price,
                image: req.file.filename,


 
             });
 
               await shop.save();
 
               if(shop){
                 res.redirect('/admin');
               };
 
                           
         }
         catch(error)
         {
             console.log(error);
         } 
 
     }


     // Post shop name ,image and price upload Stop


         //Get shop image, price and name Start
        static getShop = async (req, res) =>{

        const user = await shop_Model.find();
        res.render("shop",{data:user});
       }

       //Get shop image, price and name Stop



        //    fetch user list Start
       static userlist = async (req, res) =>{

        const user = await sign_in_up_Model.find();
        res.render("userlist",{data:user});
       }

       //    fetch user list Start
       


}

module.exports = admin_Controller;