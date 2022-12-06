const bcrypt = require('bcrypt');
const sign_in_up_Model = require('../model/sign_in_up');



class logout_forgot_change{

    //Logout Function Start
    static userLogout = async (req, res) =>{

    try {
      req.token = [];
      res.clearCookie("jwt");
       res.redirect('/login')

    }
    catch(error) {
      
      res.render('index',
      {
        message: "Logout Unsucessed!"
      });

    }

}

//Logout Function Stop




//Forgot Function Start

//Forgot Function Stop


//Reset Password Function Start

//Reset Password Function Stop



//Change Password Function Start

static getPassword = async (req, res) =>{

  const user = await sign_in_up_Model.findById(req.user);
  res.render("changePassword",{data:user});
  
}

static changePassword = async (req, res) =>{


  const id = req.params.id;
  const {newpassword} = req.body;
  const hashedPassword = await bcrypt.hash(newpassword, 10);

  const newpass = {

    newpassword: hashedPassword,

  }



  try {
    await sign_in_up_Model.findByIdAndUpdate(id);
    res.redirect('/profile_update');

  }
   catch (error) 
  {
   console.log(error); 
  }


}
//Change Password Function Stop


}


module.exports = logout_forgot_change;