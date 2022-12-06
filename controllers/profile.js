const sign_in_up_Model = require('../model/sign_in_up');
const profile_pic_Model = require('../model/profilepic');


class profile_controller{

    //Get User name in sliderbar
    static getName = async (req, res) =>{

        const user = await sign_in_up_Model.findById(req.user);
        res.render("index",{data:user});
    
    }



    //Get Data for Update
    static getUserData = async (req, res) =>{

        const user = await sign_in_up_Model.findById(req.user);
        res.render("updateProfile",{data:user});
        
    }


    //Update user data
    static updateUserData = async (req, res) =>{

        const userUpdate = await sign_in_up_Model.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/profile_update');
            
    }


        //delete user 
        static deleteUser = async (req, res) =>{

            const deleteUser  = await sign_in_up_Model.findByIdAndDelete(req.user);
            res.redirect('/login');
                
        }


        //Profile Picture upload
        static uploadPic = async (req,res) =>{

            // console.log(req.user);
            
             try
             {
                 const profilePic = new profile_pic_Model({
     
                     image: req.file.filename,
                     userId: req.user
    
     
                 });
     
                   await profilePic.save();
     
                   if(profilePic){
                     res.redirect('/profile');
                   };
     
                               
             }
             catch(error)
             {
                 console.log(error);
             } 
     
         }

         
         //get profile picture in slidebar
         static getphoto = async (req,res) =>{

            const user = await profile_pic_Model.findOne({userId:req.user});
            res.render("profile",{data: user});
            
        }

}

module.exports = profile_controller;